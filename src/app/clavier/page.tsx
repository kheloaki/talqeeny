"use client";

import React, { useState, useRef } from "react";
import Header from "@/components/sections/header";
import FooterSection from "@/components/sections/footer";
import { Copy, Delete, Space, RotateCcw } from "lucide-react";

const ArabicKeyboard = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
    
    setText(newText);
    
    // Focus and move cursor after state update
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
      setText(newText);
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start - 1, start - 1);
      }, 0);
    } else {
      const newText = text.substring(0, start) + text.substring(end);
      setText(newText);
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start, start);
      }, 0);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Texte copié !");
  };

  const handleClear = () => {
    if (confirm("Effacer tout le texte ?")) {
      setText("");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-[#0B485B] mb-4">Clavier Arabe</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Utilisez ce clavier virtuel pour écrire en arabe. Vous pouvez copier le texte une fois terminé.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-10 border border-gray-100">
            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              dir="rtl"
              placeholder="اكتب هنا..."
              className="w-full h-48 p-6 text-2xl border-2 border-gray-100 rounded-2xl focus:border-[#33C6E5] focus:ring-0 transition-all mb-8 resize-none font-arabic"
            />

            <div className="space-y-3">
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center gap-2 flex-wrap">
                    {row.map((key) => (
                      <button
                        key={key}
                        onClick={() => handleKeyClick(key)}
                        className="w-10 h-10 lg:w-14 lg:h-14 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl text-xl lg:text-2xl font-medium text-[#0B485B] hover:bg-[#33C6E5] hover:text-white hover:border-[#33C6E5] transition-all duration-200 active:scale-95 group"
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
                  className="px-6 py-4 flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#0B485B] rounded-xl font-semibold transition-all"
                  title="Retour arrière"
                >
                  <Delete size={20} />
                  <span>Effacer</span>
                </button>
                <button
                  onClick={() => handleKeyClick(" ")}
                  className="flex-grow max-w-md h-14 bg-gray-100 hover:bg-gray-200 text-[#0B485B] rounded-xl font-semibold transition-all flex items-center justify-center"
                >
                  <Space size={20} className="mr-2" />
                  Espace
                </button>
                <button
                  onClick={handleClear}
                  className="px-6 py-4 flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl font-semibold transition-all"
                >
                  <RotateCcw size={20} />
                  Réinitialiser
                </button>
              </div>

              <div className="flex justify-center pt-8">
                <button
                  onClick={handleCopy}
                  className="px-10 py-4 bg-[#33C6E5] hover:bg-[#2DB9B0] text-white rounded-full font-bold text-lg shadow-lg shadow-[#33C6E5]/20 flex items-center gap-3 transition-all transform hover:-translate-y-1"
                >
                  <Copy size={22} />
                  Copier le texte
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-[#33C6E5]/5 rounded-3xl p-8 border border-[#33C6E5]/10">
            <h2 className="text-2xl font-bold text-[#0B485B] mb-4">Comment ça marche ?</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#33C6E5] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Cliquez sur les lettres pour composer votre texte en arabe.
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#33C6E5] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Utilisez le bouton "Espace" pour séparer les mots.
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#33C6E5] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Une fois terminé, cliquez sur "Copier le texte" pour le coller où vous le souhaitez.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default ArabicKeyboard;
