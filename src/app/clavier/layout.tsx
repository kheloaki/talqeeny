import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clavier arabe en ligne gratuit | Clavier virtuel arabe français - Lexilogos",
  description:
    "Clavier arabe en ligne gratuit, clavier virtuel arabe et français. Tapez en arabe comme sur Lexilogos ou Yamli : phonétique (t→ت, b→ب). Pas besoin de télécharger. Fonctionne sur PC, Mac, iPhone, Android.",
  keywords: [
    "clavier arabe",
    "clavier arabe en ligne",
    "clavier arabe gratuit",
    "clavier virtuel arabe",
    "clavier arabe lexilogos",
    "clavier arabe français",
    "clavier français arabe",
    "clavier arabe pc",
    "clavier arabe mac",
    "clavier arabe iphone",
    "télécharger clavier arabe",
  ].join(", "),
  openGraph: {
    title: "Clavier arabe en ligne gratuit | Clavier virtuel arabe",
    description: "Clavier arabe en ligne gratuit. Tapez en arabe avec votre clavier (phonétique) ou le clavier virtuel. Comme Lexilogos, sans télécharger.",
  },
};

export default function ClavierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
