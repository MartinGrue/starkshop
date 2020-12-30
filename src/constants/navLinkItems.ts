interface NavLink {
  name: string;
  subMenus?: SubNavLink[];
}
interface SubNavLink {
  heading: string;
  items: string[];
}
const NavLinkItems: NavLink[] = [
  { name: "Home" },
  {
    name: "Megamenu",
    subMenus: [
      { heading: "Power Tools", items: ["Wall crusher", "Wall paint"] },
    ],
  },
  { name: "Shop" },
  { name: "News" },
  { name: "Deals" },
  { name: "Contact Us" },
  { name: "About this site" },
];
export default NavLinkItems;
