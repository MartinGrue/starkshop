interface Categorie {
  name: string;
  subCategories?: SubCategories[];
}
export interface SubCategories {
  heading: string;
  items?: string[];
}
export const CategoryItems: Categorie[] = [
  {
    name: "Power Tools",
    subCategories: [
      {
        heading: "Power Tools",
        items: [
          "Engravers",
          "Drills",
          "Wrenches",
          "Plumbing",
          "Wall Chaser",
          "Pneumatic Tools",
          "Milling Cutters",
        ],
      },
      {
        heading: "Hand Tools",
        items: [
          "Engravers",
          "Drills",
          "Wrenches",
          "Plumbing",
          "Wall Chaser",
          "Pneumatic Tools",
        ],
      },
      {
        heading: "Machine Supplies",
        items: [
          "Engravers",
          "Drills",
          "Wrenches",
          "Plumbing",
          "Wall Chaser",
          "Pneumatic Tools",
        ],
      },
      {
        heading: "Instruments",
        items: ["Engravers", "Drills", "Wrenches", "Plumbing"],
      },
      { heading: "Workbenches" },
      { heading: "Presses" },
      { heading: "Spray Guns" },
      { heading: "Riveters" },
      {
        heading: "Garden Equipment",
        items: ["Engravers", "Drills", "Wrenches", "Plumbing"],
      },
    ],
  },
  { name: "Hand Tools" },
  { name: "Machine Tools" },
  { name: "Building Supplies" },
  { name: "Electrical" },
  { name: "Power Machinery" },
  { name: "Measurement" },
  { name: "Clothes & PPE" },
  { name: "Plumbing" },
  { name: "Storage & Organization" },
  { name: "Welding & Soldering" },
];
export default CategoryItems;
