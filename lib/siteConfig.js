export const siteConfig = {
  name: "All For Beauty",
  brandTagline: "Beauté & Soins Naturels",
  tagline: "Votre beauté, naturellement",
  description:
    "All For Beauty est une boutique en ligne spécialisée dans les soins de beauté, crèmes, huiles et produits cosmétiques naturels adaptés à tous les types de peau.",
  announcement: "Sélection premium importée des États-Unis · Commande simple via WhatsApp",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://all-for-beauty.vercel.app/",
  locale: "fr_FR",
  currency: "FCFA",
  // Numéro utilisé uniquement dans les liens (jamais affiché sur les pages)
  whatsappNumber: "19295841026",
  whatsappGreeting: "Bonjour All For Beauty, je souhaite avoir des informations sur vos produits.",
  mapUrl: "https://maps.app.goo.gl/K9p2WaUfdBztz78x7",
  logo: "/logoCos.svg",
  ogImage: "/logoCos.jpg",
  aboutImage: "/mainfond6.png",

  socials: [
    { id: "facebook", label: "Facebook", href: "https://www.facebook.com/people/All-For-Beauty/61590215965512/" }, // <- lien Facebook de la vendeuse
    { id: "whatsapp", label: "WhatsApp", href: "WHATSAPP" }, // généré automatiquement
  ],

  // mega: true = menu déroulant avec les catégories
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Nos Produits", href: "/products", mega: true },
    { label: "Informations", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    script: "Une peau saine, une confiance éclatante",
    interval: 6000,
    slides: [
      {
        eyebrow: "Bienvenue",
        title: "Prenez soin de vous, naturellement",
        text: "Une sélection de produits doux et efficaces pour une peau saine, lumineuse et rayonnante.",
        image: "/mainfond.png",
        cta: { label: "Découvrir la collection", href: "/products" },
      },
      {
        eyebrow: "Offres",
        title: "Profitez d'offres exclusives",
        text: "Des soins premium sélectionnés pour vous, à des prix accessibles.",
        image: "/mainfond2.png",
        cta: { label: "Voir les produits", href: "/products" },
      },
      {
        eyebrow: "Conseils",
        title: "Des conseils beauté personnalisés",
        text: "Écrivez-nous : nous vous aidons à choisir les soins adaptés à votre peau.",
        image: "/mainfond6.png",
        cta: { label: "Nous contacter", href: "/contact" },
      },
    ],
  },

  features: [
    { icon: "truck", title: "Commande simple", text: "Facture envoyée sur WhatsApp" },
    { icon: "shield", title: "Produits authentiques", text: "Sélection premium importée des USA" },
    { icon: "leaf", title: "Actifs naturels", text: "Des formules douces et efficaces" },
    { icon: "heart", title: "Service réactif", text: "Un accompagnement personnalisé" },
  ],

  // Section « Pourquoi choisir nos produits ? » (icon : leaf | globe | award)
  reasons: [
    { icon: "leaf", title: "Pureté des ingrédients naturels", text: "Des formules douces et puissantes, enrichies en actifs naturels sélectionnés pour révéler l'éclat de votre peau." },
    { icon: "globe", title: "Sélection premium importée des États-Unis", text: "Des soins de qualité internationale, soigneusement choisis pour leur efficacité et leurs résultats visibles." },
    { icon: "award", title: "Expérience client d'exception", text: "Un accompagnement personnalisé et un service réactif pour vous offrir une expérience beauté unique et haut de gamme." },
  ],

  // Légende des cartes catégories (clé = slug du JSON). `image` est optionnelle.
  categoryInfo: {
    cremes: { tagline: "Essentiels Corps · Rituel Hydratation" },
    soap: { tagline: "Gels douche et savons parfumés" },
    face: { tagline: "Éclat du Visage · Soin Perfecteur" },
    "gommages-huiles": { tagline: "Huiles et gommages nourrissants" },
    cheveux: { tagline: "Rituel Capillaire · Nutrition Cheveux" },
    "soins-intimes-bucco": { tagline: "Intimité & Douceur · Éclat du Sourire" },
    autres: { tagline: "Parfums, brumes et accessoires" },
    vitamines: { tagline: "Vitalité & Énergie · Compléments Bien-être" },
  },

  // Produits mis en avant (id du JSON). `badge` et `rating` (1 à 5) sont optionnels.
  bestSellers: [
    { id: "creme3", badge: "Top vente" },
    { id: "face3", badge: "Top vente" },
    { id: "face17" },
    { id: "hair7" },
    { id: "gom4" },
    { id: "vit30" },
  ],

  about: {
    title: "À propos d'All For Beauty",
    text: "All For Beauty est une boutique de produits cosmétiques dédiée à votre bien-être et à votre beauté naturelle. Nous sélectionnons avec soin des soins premium importés des États-Unis, sûrs et efficaces, et nous vous accompagnons de conseils personnalisés pour révéler la meilleure version de vous-même.",
    quote: "Parce que chaque femme mérite de se sentir belle",
  },

  // À REMPLACER par de vrais avis clients
  testimonials: [
    {
      name: "Awa K.",
      rating: 5,
      text: "Des produits de très bonne qualité et un service au top ! Ma peau n'a jamais aussi bien rayonné.",
    },
  ],

  deliveryOptions: [
    { value: "domicile", label: "Livraison à domicile" },
    { value: "retrait", label: "Retrait / à convenir" },
  ],
};

export const whatsappLink = (text = siteConfig.whatsappGreeting) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;