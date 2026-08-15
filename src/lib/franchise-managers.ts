// Temporary, hand-maintained mapping while franchise ownership isn't in the
// database yet. Keyed by league_members.email so it stays correct even if a
// display name changes. Move this into a real DB column/table once we wire
// up the FPL API sync — we'll need this relationship there anyway.
export const FRANCHISE_MANAGERS: Record<
  string,
  { franchise: string; image: string }
> = {
  "argelrh9@gmail.com": {
    franchise: "Narra Football Federation",
    image: "/franchises/Narra Football Federation.jpg",
  },
  "gabilondo12321@gmail.com": {
    franchise: "Papi Boris FC",
    image: "/franchises/Papi Boris FC.jpg",
  },
  "cr7cristianoelanimal@gmail.com": {
    franchise: "Kingsbury Albion",
    image: "/franchises/Kingsbury Albion.jpg",
  },
  "damir.cardona@icloud.com": {
    franchise: "El Pantano 913 FC",
    image: "/franchises/El Pantano 913 FC.jpg",
  },
  "javier.sardinas@gmail.com": {
    franchise: "Meet Your Daddy",
    image: "/franchises/Meet Your Daddy.jpg",
  },
  "elflacoborgo98@gmail.com": {
    franchise: "Catenaccio Haram FC",
    image: "/franchises/Catenaccio Haram FC.jpg",
  },
  "darielrfc97@gmail.com": {
    franchise: "Real Banquillo CF",
    image: "/franchises/Real Banquillo CF.jpg",
  },
  "1987adadd@gmail.com": {
    franchise: "Dinastia FC",
    image: "/franchises/Dinastia FC.jpg",
  },
  "jldg2397@gmail.com": {
    franchise: "AFC Richmond",
    image: "/franchises/AFC Richmond.jpg",
  },
  "ricky970812@gmail.com": {
    franchise: "Versalles Vendetta FC",
    image: "/franchises/Versalles Vendetta FC.jpg",
  },
  "phadfegpacheco@gmail.com": {
    franchise: "Los Repas",
    image: "/franchises/Los Repas.jpg",
  },
  // Yohan -> FC Jose Marti confirmed, but he's not in league_members yet
  // (email still unknown) — add him here once he's added to the DB.
};
