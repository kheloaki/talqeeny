import React from "react";

const sectionClass = "mb-12";
const h2Class = "text-xl font-bold text-[#0B485B] mb-3 scroll-mt-28";
const pClass = "text-gray-700 leading-relaxed mb-3";

const TOC_LINKS = [
  { href: "#clavier-arabe-en-ligne", label: "Clavier arabe en ligne" },
  { href: "#lexilogos-yamli", label: "Lexilogos / Yamli" },
  { href: "#clavier-virtuel-arabe", label: "Clavier virtuel" },
  { href: "#sans-telecharger", label: "Sans télécharger" },
  { href: "#clavier-arabe-francais", label: "Arabe français" },
  { href: "#pc-mac-iphone", label: "PC, Mac, iPhone" },
  { href: "#azerty-arabe", label: "AZERTY et arabe" },
  { href: "#faq-clavier-arabe", label: "FAQ" },
];

export default function ClavierSEOContent() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
      {/* Left: sticky table of contents */}
      <aside
        id="sommaire"
        className="lg:w-56 xl:w-64 flex-shrink-0 order-2 lg:order-1"
      >
        <nav
          className="sticky top-24 rounded-xl border border-gray-200 bg-gray-50/80 p-4 lg:p-5 shadow-sm"
          aria-label="Sommaire"
        >
          <h2 className="text-sm font-bold text-[#0B485B] uppercase tracking-wide mb-3 pb-2 border-b border-gray-200">
            Sur cette page
          </h2>
          <ul className="space-y-1.5">
            {TOC_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-sm text-[#33C6E5] hover:text-[#2DB9B0] hover:underline font-medium py-1 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 pt-3 border-t border-gray-200">
            <a
              href="#clavier-virtuel"
              className="text-xs text-[#33C6E5] hover:underline font-medium"
            >
              ↑ Retour au clavier
            </a>
          </p>
        </nav>
      </aside>

      {/* Right: main content */}
      <article className="flex-1 min-w-0 order-1 lg:order-2">
      <section id="clavier-arabe-en-ligne" className={sectionClass}>
        <h2 className={h2Class}>Clavier arabe en ligne gratuit</h2>
        <p className={pClass}>
          Ce site propose un clavier arabe en ligne et clavier en arabe gratuit : vous pouvez écrire en arabe directement dans votre navigateur, sans rien installer. Que vous cherchiez un clavier arabe en ligne, un clavier en arabe en ligne ou un clavier en ligne arabe, la solution est ici. C’est aussi un clavier arabe gratuit et un clavier en arabe gratuit, utilisable sur clavier arabe pc, tablette ou téléphone.
        </p>
        <p className={pClass}>
          Vous pouvez taper avec votre clavier physique (mode phonétique) ou utiliser le clavier virtuel à l’écran. Idéal pour l’écriture arabe au clavier, pour écrire « Allah » en arabe au clavier ou tout autre texte.
        </p>
      </section>

      <section id="lexilogos-yamli" className={sectionClass}>
        <h2 className={h2Class}>Clavier arabe type Lexilogos et Yamli</h2>
        <p className={pClass}>
          Si vous utilisez habituellement le clavier arabe Lexilogos, le clavier arabe en ligne Lexilogos ou le clavier Yamli arabe, vous vous y retrouverez tout de suite. Notre clavier arabe Lexilogos en ligne fonctionne sur le même principe : un clavier en arabe Lexilogos style phonétique. Que ce soit Lexilogos clavier arabe, Lexilogos clavier arabe en ligne, yamli clavier arabe, clavier arabe yamli ou clavier en arabe yamli, vous tapez en lettres latines et les caractères arabes apparaissent (ex. t → ت, b → ب, th → ث, sh → ش). Lexilogo clavier arabe et yamil clavier arabe sont des variantes de la même idée : un clavier arabe ligne phonétique.
        </p>
      </section>

      <section id="clavier-virtuel-arabe" className={sectionClass}>
        <h2 className={h2Class}>Clavier virtuel arabe</h2>
        <p className={pClass}>
          Le clavier virtuel arabe affiché sur la page vous permet d’écrire en arabe en cliquant sur les touches. C’est un clavier arabe virtuel et un clavier virtuel en arabe : pas besoin de configurer votre ordinateur. Vous pouvez aussi combiner le virtuel clavier arabe avec la saisie au clavier physique. Un arab clavier virtuel ou clavier en arabe virtuel pratique sur tout appareil.
        </p>
      </section>

      <section id="sans-telecharger" className={sectionClass}>
        <h2 className={h2Class}>Pas besoin de télécharger un clavier arabe</h2>
        <p className={pClass}>
          Inutile de télécharger clavier arabe, télécharger le clavier arabe ou télécharger un clavier arabe : tout fonctionne dans le navigateur. Pas de clavier arabe telecharger ni de telecharger clavier en arabe. Pour ceux qui cherchaient à telecharger arabe clavier ou arab clavier telecharger, cette page remplace l’installation d’un logiciel. Vous gardez votre clavier français et vous écrivez en arabe ici.
        </p>
      </section>

      <section id="clavier-arabe-francais" className={sectionClass}>
        <h2 className={h2Class}>Clavier arabe et français</h2>
        <p className={pClass}>
          L’interface est en français et conçue pour un clavier arabe français et clavier français arabe. Que vous pensiez clavier arabe en français, clavier arabe en francais, clavier arabe et français, clavier arabe et français, clavier francais en arabe, clavier français et arabe ou clavier arabe fr, vous pouvez écrire en arabe tout en gardant votre arabe clavier français ou clavier arabe français. Idéal pour arabe francais clavier et clavier arab francais / clavier arab et francais.
        </p>
      </section>

      <section id="pc-mac-iphone" className={sectionClass}>
        <h2 className={h2Class}>Clavier arabe sur PC, Mac, iPhone, Samsung et Google</h2>
        <p className={pClass}>
          Le clavier arabe en ligne fonctionne sur clavier arabe pc, clavier arabe sur pc et clavier pc arabe : ouvrez simplement cette page dans Chrome, Firefox, Edge ou Safari. Pour un clavier arabe Mac, clavier arabe MacBook ou clavier arabe pour Mac, c’est la même chose : utilisez ce clavier dans le navigateur sans rien installer. Pour clavier arabe iPhone, clavier arabe pour iPhone ou clavier arabe sur iPhone, ouvrez ce site sur Safari ou Chrome sur votre iPhone : vous avez immédiatement un clavier arabe en ligne. Pour ajouter l’arabe directement sur le clavier système de votre iPhone, rendez-vous dans Réglages → Général → Claviers (
          <a href="https://support.apple.com/fr-fr/guide/iphone/iph3e5e2f2c/ios" target="_blank" rel="noopener noreferrer" className="text-[#33C6E5] hover:underline">
            guide Apple
          </a>
          ). Pour clavier arabe Samsung, utilisez cette page dans le navigateur ou ajoutez la langue arabe dans Paramètres → Langue et saisie.
        </p>
        <p className={pClass}>
          Si vous cherchez un clavier arabe Google, clavier arabe pour Google, clavier arabe sur Google, clavier google arabe, google arabe clavier, google en arabe clavier, clavier en arabe sur google ou arab clavier sur google : cette page est un clavier arabe utilisable dans Google Chrome et sur toute recherche ou formulaire une fois que vous copiez-collez votre texte. Arabe google clavier et clavier arabe sur google sont donc couverts.
        </p>
      </section>

      <section id="azerty-arabe" className={sectionClass}>
        <h2 className={h2Class}>Clavier AZERTY et arabe</h2>
        <p className={pClass}>
          Vous avez un clavier azerty arabe ou vous cherchez un clavier arabe azerty ? Avec notre outil, pas besoin de passer en disposition arabe : le mode phonétique fonctionne avec un clavier azerty en arabe ou clavier en arabe azerty. Vous tapez avec vos touches AZERTY et les lettres arabes s’affichent selon la prononciation (comme un clavier in arabic ou arabic clavier phonétique). Idéal pour clavier arabic et clavier arabes depuis la France.
        </p>
      </section>

      <section id="faq-clavier-arabe" className={sectionClass}>
        <h2 className={h2Class}>Questions fréquentes : clavier arabe</h2>

        <h3 className="text-lg font-semibold text-[#0B485B] mt-6 mb-2">Comment avoir un clavier arabe en ligne gratuit ?</h3>
        <p className={pClass}>
          Utilisez cette page : c’est un clavier arabe en ligne gratuit. Vous pouvez taper avec votre clavier (phonétique) ou utiliser le clavier virtuel à l’écran.
        </p>

        <h3 className="text-lg font-semibold text-[#0B485B] mt-6 mb-2">Clavier arabe comme Lexilogos, c’est quoi ?</h3>
        <p className={pClass}>
          Le clavier arabe Lexilogos en ligne permet de taper en lettres latines pour obtenir des caractères arabes (t → ت, b → ب, etc.). Notre outil fait la même chose : clavier arabe lexilogos style, sans quitter la page.
        </p>

        <h3 className="text-lg font-semibold text-[#0B485B] mt-6 mb-2">Faut-il télécharger un clavier arabe ?</h3>
        <p className={pClass}>
          Non. Inutile de télécharger clavier arabe ou telecharger un clavier arabe : ce clavier arabe en ligne fonctionne dans le navigateur. Idéal si vous cherchiez clavier arabe telecharger ou arab clavier telecharger sans installer de logiciel.
        </p>

        <h3 className="text-lg font-semibold text-[#0B485B] mt-6 mb-2">Clavier arabe pour iPhone ou Mac ?</h3>
        <p className={pClass}>
          Pour clavier arabe iPhone et clavier arabe Mac, vous pouvez utiliser ce site directement dans le navigateur. Pour avoir l’arabe sur le clavier système de l’iPhone ou du Mac, ajoutez la langue arabe dans les réglages des claviers (voir liens officiels Apple ci-dessus).
        </p>

        <h3 className="text-lg font-semibold text-[#0B485B] mt-6 mb-2">Clavier arabe 3000, c’est quoi ?</h3>
        <p className={pClass}>
          « Clavier arabe 3000 » et clavier en arabe 3000 font souvent référence à des logiciels ou des claviers en ligne. Ici, vous avez un clavier arabe en ligne gratuit avec clavier virtuel et saisie phonétique, sans numéro de version : toujours à jour dans le navigateur.
        </p>

        <h3 className="text-lg font-semibold text-[#0B485B] mt-6 mb-2">Comment écrire en arabe au clavier ?</h3>
        <p className={pClass}>
          Avec ce clavier arabe pour ecrire : tapez en phonétique (t pour ت, b pour ب, th pour ث, sh pour ش) ou cliquez sur le clavier virtuel arabe. Vous pouvez ensuite copier le texte ou le télécharger en .txt. Parfait pour l’écriture arabe clavier et clavier ecrire en arabe.
        </p>

        <h3 className="text-lg font-semibold text-[#0B485B] mt-6 mb-2">En arabe clavier / clavier en arab ?</h3>
        <p className={pClass}>
          Oui : ce site est un clavier en arabe (et en arabe clavier). Si vous cherchiez clavier en arab, clavier arabe en, clavier araba ou claviera arabe, vous êtes au bon endroit. Même principe pour arab clavier et clavier &arabe.
        </p>
      </section>

      <section className={sectionClass}>
        <p className="text-gray-600 text-sm">
          <a href="#clavier-virtuel" className="text-[#33C6E5] hover:underline font-medium">← Retour au clavier virtuel</a>
        </p>
      </section>
      </article>
    </div>
  );
}
