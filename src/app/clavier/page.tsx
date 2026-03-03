"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Header from "@/components/sections/header";
import FooterSection from "@/components/sections/footer";
import ClavierSEOContent from "./ClavierSEOContent";
import {
  Copy,
  Delete,
  Space,
  RotateCcw,
  Download,
  Undo2,
  Redo2,
  Type,
  Volume2,
  Maximize2,
  Minimize2,
  Sun,
  Moon,
  Minus,
  Plus,
  AlignHorizontalSpaceAround,
} from "lucide-react";

const STORAGE_KEY = "clavier-arabic-draft";
const MAX_HISTORY = 50;
const DIACRITICS = [
  { char: "\u064B", name: "tanwin fatḥ" },
  { char: "\u064C", name: "tanwin damma" },
  { char: "\u064D", name: "tanwin kasr" },
  { char: "\u064E", name: "fatḥa" },
  { char: "\u064F", name: "damma" },
  { char: "\u0650", name: "kasra" },
  { char: "\u0651", name: "shadda" },
  { char: "\u0652", name: "sukun" },
];

// Lexilogos-style phonetic: type Latin (e.g. t) → get Arabic (ت)
const latinToArabicPhonetic: Record<string, string> = {
  "a": "ا", "b": "ب", "t": "ت", "j": "ج", "h": "ه", "d": "د", "r": "ر", "z": "ز", "s": "س", "f": "ف", "q": "ق", "k": "ك",
  "l": "ل", "m": "م", "n": "ن", "w": "و", "y": "ي", " ": " ",
  "2": "ء", "3": "ع", "5": "خ", "6": "ط", "7": "ح", "8": "غ", "9": "ص",
  "T": "ط", "D": "ض", "S": "ص", "Z": "ظ", "H": "ح", "G": "غ", "K": "خ",
  "'": "ء", "p": "ة", "i": "ي", "u": "و", "e": "ا", "o": "و",
};
// Two-letter combinations (type "th" → ث, "sh" → ش, etc.)
const digraphs: Record<string, string> = {
  "th": "ث", "sh": "ش", "dh": "ذ", "kh": "خ", "gh": "غ",
};

const HIGHLIGHT_DURATION_MS = 180;

function stripArabicDiacritics(str: string): string {
  return str.replace(/[\u064B-\u0652\u0670]/g, "");
}

const ArabicKeyboard = () => {
  const [text, setText] = useState("");
  const [pressedVirtualKey, setPressedVirtualKey] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState(24);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isRTL, setIsRTL] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [copyToast, setCopyToast] = useState(false);
  const [history, setHistory] = useState<string[]>([""]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lastLatinRef = useRef<string | null>(null);
  const pressTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load draft from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved != null) {
        const parsed = JSON.parse(saved) as string;
        if (typeof parsed === "string") {
          setText(parsed);
          setHistory([parsed]);
          setHistoryIndex(0);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // Auto-save to localStorage (debounced)
  useEffect(() => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(text));
      } catch {
        // ignore
      }
      saveTimeoutRef.current = null;
    }, 500);
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, [text]);

  // Focus textarea on load so user can type immediately with physical keyboard
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const flashVirtualKey = useCallback((char: string) => {
    if (pressTimeoutRef.current) clearTimeout(pressTimeoutRef.current);
    setPressedVirtualKey(char);
    pressTimeoutRef.current = setTimeout(() => {
      setPressedVirtualKey(null);
      pressTimeoutRef.current = null;
    }, HIGHLIGHT_DURATION_MS);
  }, []);

  const applyTextChange = useCallback((newText: string) => {
    setHistory((prev) => {
      const next = [...prev.slice(0, historyIndex + 1), newText].slice(-MAX_HISTORY);
      setHistoryIndex(next.length - 1);
      return next;
    });
    setText(newText);
  }, [historyIndex]);

  const undo = useCallback(() => {
    if (historyIndex <= 0) return;
    const newIndex = historyIndex - 1;
    setHistoryIndex(newIndex);
    setText(history[newIndex] ?? "");
    textareaRef.current?.focus();
  }, [history, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex >= history.length - 1) return;
    const newIndex = historyIndex + 1;
    setHistoryIndex(newIndex);
    setText(history[newIndex] ?? "");
    textareaRef.current?.focus();
  }, [history, historyIndex]);

  const insertAtCursor = useCallback((char: string, clearLastLatin = true) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    if (clearLastLatin) lastLatinRef.current = null;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newText = text.substring(0, start) + char + text.substring(end);
    applyTextChange(newText);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + char.length, start + char.length);
    }, 0);
  }, [text, applyTextChange]);

  const replaceLastChar = useCallback((newChar: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start === 0) return;
    const before = text.substring(0, start - 1);
    const after = text.substring(end);
    const newText = before + newChar + after;
    applyTextChange(newText);
    lastLatinRef.current = null;
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(before.length + newChar.length, before.length + newChar.length);
    }, 0);
  }, [text, applyTextChange]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Backspace" || e.key === "Delete" || e.key === "Enter" || e.key.startsWith("Arrow") || e.key === "Tab") {
      lastLatinRef.current = null;
      return;
    }
    if (e.ctrlKey || e.metaKey) return;

    const key = e.key.length === 1 ? e.key : "";
    const lower = key.toLowerCase();

    // Check digraph: e.g. last was "t", now "h" → ث
    const last = lastLatinRef.current;
    if (last) {
      const pair = (lower === key ? last.toLowerCase() : last) + lower;
      const digraph = digraphs[pair];
      if (digraph) {
        e.preventDefault();
        replaceLastChar(digraph);
        flashVirtualKey(digraph);
        return;
      }
    }

    const arabic = latinToArabicPhonetic[key] ?? latinToArabicPhonetic[lower];
    if (arabic !== undefined) {
      e.preventDefault();
      lastLatinRef.current = key;
      insertAtCursor(arabic, false);
      flashVirtualKey(arabic);
    }
  }, [insertAtCursor, replaceLastChar, flashVirtualKey]);

  const rows = [
    ["ذ", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"],
    ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "د"],
    ["ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ط"],
    ["ئ", "ء", "ؤ", "ر", "لا", "ى", "ة", "و", "ز", "ظ"],
  ];

  const latinNumbers: { [key: string]: string } = {
    "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5",
    "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0"
  };

  const handleKeyClick = (key: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newText = text.substring(0, start) + key + text.substring(end);
    applyTextChange(newText);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + key.length, start + key.length);
    }, 0);
  };

  const handleBackspace = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start === end) {
      if (start === 0) return;
      const newText = text.substring(0, start - 1) + text.substring(end);
      applyTextChange(newText);
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start - 1, start - 1);
      }, 0);
    } else {
      const newText = text.substring(0, start) + text.substring(end);
      applyTextChange(newText);
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start, start);
      }, 0);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopyToast(true);
    setTimeout(() => setCopyToast(false), 2000);
  };

  const handleClear = () => {
    if (confirm("Effacer tout le texte ?")) {
      applyTextChange("");
    }
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "texte-arabe.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const addDiacritic = (char: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newText = text.substring(0, start) + char + text.substring(end);
    applyTextChange(newText);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + char.length, start + char.length);
    }, 0);
  };

  const handleStripDiacritics = () => {
    applyTextChange(stripArabicDiacritics(text));
  };

  const handleSpeak = () => {
    if (!text.trim()) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ar-SA";
    u.rate = 0.9;
    speechSynthesis.speak(u);
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      {!isFullscreen && <Header />}
      <main className={isFullscreen ? `fixed inset-0 z-50 overflow-auto pt-6 pb-20 px-4 ${darkMode ? "bg-gray-900" : "bg-[#F8FAFC]"}` : "flex-grow pt-32 pb-20 px-4"}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-[#0B485B] mb-4">Clavier Arabe</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tapez en arabe avec le clavier virtuel à l’écran ou avec votre clavier (saisie phonétique). Copiez, téléchargez ou écoutez le texte.
            </p>
          </div>

          <div id="clavier-virtuel" className={`rounded-3xl shadow-xl p-6 lg:p-10 border transition-colors scroll-mt-28 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
            {/* Toolbar: font size, fullscreen, RTL, dark, undo, redo */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Taille:</span>
                <div className="flex items-center gap-1">
                  <button type="button" onClick={() => setFontSize((f) => Math.max(14, f - 2))} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#0B485B]" aria-label="Réduire"><Minus size={16} /></button>
                  <span className="w-8 text-center text-sm tabular-nums">{fontSize}</span>
                  <button type="button" onClick={() => setFontSize((f) => Math.min(48, f + 2))} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#0B485B]" aria-label="Agrandir"><Plus size={16} /></button>
                </div>
                <button type="button" onClick={() => setIsFullscreen((v) => !v)} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#0B485B]" title={isFullscreen ? "Réduire" : "Plein écran"}>
                  {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>
                <button type="button" onClick={() => setIsRTL((v) => !v)} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#0B485B]" title={isRTL ? "Passer en LTR" : "Passer en RTL"}>
                  <AlignHorizontalSpaceAround size={18} />
                </button>
                <button type="button" onClick={() => setDarkMode((v) => !v)} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#0B485B]" title={darkMode ? "Mode clair" : "Mode sombre"}>
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button type="button" onClick={undo} disabled={historyIndex <= 0} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#0B485B] disabled:opacity-50" title="Annuler"><Undo2 size={18} /></button>
                <button type="button" onClick={redo} disabled={historyIndex >= history.length - 1} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#0B485B] disabled:opacity-50" title="Rétablir"><Redo2 size={18} /></button>
              </div>
              <div className={`text-sm tabular-nums ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                {wordCount} mot{wordCount !== 1 ? "s" : ""} · {charCount} car. · Sauvegardé auto
              </div>
            </div>

            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => applyTextChange(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              dir={isRTL ? "rtl" : "ltr"}
              placeholder="اكتب هنا..."
              style={{ fontSize: `${fontSize}px` }}
              className={`w-full p-6 border-2 rounded-2xl focus:ring-0 transition-all resize-none font-arabic ${
                isFullscreen ? "min-h-[70vh]" : "h-48"
              } ${darkMode ? "bg-gray-900 border-gray-600 text-gray-100 placeholder-gray-500 focus:border-[#33C6E5]" : "border-gray-100 text-[#0B485B] focus:border-[#33C6E5]"}`}
            />

            {/* Diacritics (harakat) row */}
            <div className="flex justify-center gap-1.5 flex-wrap mb-3">
              {DIACRITICS.map(({ char: c, name }) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => addDiacritic(c)}
                  title={name}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg text-lg font-arabic transition-all ${
                    darkMode ? "bg-gray-700 hover:bg-[#33C6E5] text-gray-200" : "bg-gray-100 hover:bg-[#33C6E5] hover:text-white text-[#0B485B]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center gap-2 flex-wrap">
                    {row.map((key) => (
                      <button
                        key={key}
                        onClick={() => handleKeyClick(key)}
                        className={`w-10 h-10 lg:w-14 lg:h-14 flex flex-col items-center justify-center border rounded-xl text-xl lg:text-2xl font-medium transition-all duration-200 active:scale-95 group ${
                          pressedVirtualKey === key
                            ? "scale-95 bg-[#33C6E5] text-white border-[#33C6E5] shadow-inner"
                            : darkMode
                              ? "bg-gray-700 border-gray-600 text-gray-200 hover:bg-[#33C6E5] hover:text-white hover:border-[#33C6E5]"
                              : "bg-white border-gray-200 text-[#0B485B] hover:bg-[#33C6E5] hover:text-white hover:border-[#33C6E5]"
                        }`}
                      >
                        {latinNumbers[key] && (
                          <span className="text-[10px] lg:text-[11px] opacity-40 group-hover:opacity-100 leading-none mb-0.5">
                            {latinNumbers[key]}
                          </span>
                        )}
                        <span className="leading-none">{key}</span>
                      </button>
                    ))}
                </div>
              ))}

              <div className="flex justify-center gap-3 pt-4 flex-wrap">
                <button
                  onClick={handleBackspace}
                  className={`px-6 py-4 flex items-center gap-2 rounded-xl font-semibold transition-all ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-200" : "bg-gray-100 hover:bg-gray-200 text-[#0B485B]"}`}
                  title="Retour arrière"
                >
                  <Delete size={20} />
                  <span>Effacer</span>
                </button>
                <button
                  onClick={() => handleKeyClick(" ")}
                  className={`flex-grow max-w-md h-14 rounded-xl font-semibold transition-all flex items-center justify-center ${
                    pressedVirtualKey === " "
                      ? "scale-95 bg-[#33C6E5] text-white shadow-inner"
                      : darkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-200" : "bg-gray-100 hover:bg-gray-200 text-[#0B485B]"
                  }`}
                >
                  <Space size={20} className="mr-2" />
                  Espace
                </button>
                <button
                  onClick={handleClear}
                  className={`px-6 py-4 flex items-center gap-2 rounded-xl font-semibold transition-all ${darkMode ? "bg-red-900/30 hover:bg-red-900/50 text-red-300" : "bg-red-50 hover:bg-red-100 text-red-600"}`}
                >
                  <RotateCcw size={20} />
                  Réinitialiser
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-8">
                <button onClick={handleCopy} className="px-6 py-3 bg-[#33C6E5] hover:bg-[#2DB9B0] text-white rounded-full font-bold flex items-center gap-2 transition-all" title="Copier">
                  <Copy size={20} />
                  Copier
                </button>
                <button onClick={handleDownload} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-[#0B485B] rounded-full font-semibold flex items-center gap-2 transition-all" title="Télécharger en .txt">
                  <Download size={20} />
                  Télécharger
                </button>
                <button onClick={handleStripDiacritics} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-[#0B485B] rounded-full font-semibold flex items-center gap-2 transition-all" title="Enlever les voyelles (harakat)">
                  <Type size={20} />
                  Sans voyelles
                </button>
                <button onClick={handleSpeak} disabled={!text.trim()} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-[#0B485B] rounded-full font-semibold flex items-center gap-2 transition-all disabled:opacity-50" title="Lire à voix haute">
                  <Volume2 size={20} />
                  Lire
                </button>
              </div>
            </div>
          </div>

          {/* Copy toast */}
          {copyToast && (
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#0B485B] text-white px-6 py-3 rounded-full font-semibold shadow-lg z-50 transition-opacity">
              Copié !
            </div>
          )}

          {!isFullscreen && (
            <>
              <div className={`mt-16 rounded-3xl p-8 border ${darkMode ? "bg-[#33C6E5]/10 border-[#33C6E5]/20" : "bg-[#33C6E5]/5 border-[#33C6E5]/10"}`}>
                <h2 className={`text-2xl font-bold mb-4 ${darkMode ? "text-gray-100" : "text-[#0B485B]"}`}>Comment ça marche ?</h2>
                <ul className={`space-y-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#33C6E5] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Tapez avec votre clavier physique (phonétique : t→ت, b→ب, th→ث, sh→ش) ou cliquez sur le clavier virtuel.
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#33C6E5] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Barre de voyelles (harakat) : fatḥa, damma, kasra, sukun, shadda, tanwin — pour la lecture coranique.
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#33C6E5] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Annuler/Rétablir, copier, télécharger (.txt), enlever les voyelles, lire à voix haute. Le texte est sauvegardé automatiquement.
                  </li>
                </ul>
              </div>

              {/* Long-form SEO content: keywords organized by theme, some direct response, some link to other/external */}
              <div className="mt-16 rounded-3xl p-6 lg:p-10 border bg-white border-gray-100 shadow-sm">
                <ClavierSEOContent />
              </div>
            </>
          )}
        </div>
      </main>
      {!isFullscreen && <FooterSection />}
    </div>
  );
};

export default ArabicKeyboard;
