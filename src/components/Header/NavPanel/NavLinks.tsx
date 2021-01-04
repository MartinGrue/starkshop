import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Categories from "./Categories";
import NavLinkItems from "../../../constants/navLinkItems";
import Icons from "../../../assets/images/sprite.svg"
import { Icon } from "../../../helpers/getSprite";
const styles = createStyles({
  navLinks__list: { display: "flex", listStyle: "none", padding: 0, margin: 0 },
  navLinks__item: {
    listStyle: "none",
    height: "100%",
    "& span": {
      display: "flex",
      alignItems: "center",
      background: "transparent",
      transition: "background-color 0.2s",
      padding: "0 14px",
      height: "42px",
      borderRadius: "2px",
      "& svg": {
        right: "12px",
        top: "calc(50% - 3px)",
        position: "absolute",
      },
    },
  },
  navLinks__itemWithSubmenu: {
    "& span": {
      position: "relative",
      paddingRight: "27px",
    },
  },
  navLinks__Root: {},
});

interface Props extends WithStyles<typeof styles> {}

const NavLinks: React.FC<Props> = ({ classes }) => {
  return (
    <ul className={classes.navLinks__list}>
      {NavLinkItems.map((link) => {
        return (
          <li
            className={`${classes.navLinks__item} ${
              link.subMenus && classes.navLinks__itemWithSubmenu
            }`}
          >
            <span>
              {link.name}
              {link.subMenus && (
                <Icon
                  icons={Icons}
                  id="arrow-rounded-down-9x6"
                  width="9px"
                  height="6px"
                ></Icon>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default withStyles(styles)(NavLinks);
