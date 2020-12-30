interface Categorie {
  name: string;
  subCategories?: SubCategories[];
}
interface SubCategories {
  heading: string;
  items: string[];
}
const CategoryItems: Categorie[] = [
  { name: "Power Tools" },
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
