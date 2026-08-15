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
};
