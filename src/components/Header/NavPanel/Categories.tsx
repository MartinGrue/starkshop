import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import categoryItems from "../../../constants/categoryItems";
import Icons from "../../../assets/images/sprite.svg";
import { Icon } from "../../../helpers/getSprite";
import MegaMenu from "./MegaMenu";
const styles = createStyles({
  Root: {
    width: "255px",
    height: "42px",
    color: "#fff",
    position: "relative",
  },
  body: {
    width: "100%",
    paddingTop: "42px",
    position: "absolute",
    background: "#3d464d",
    boxShadow: "none",
    borderRadius: "2px",
  },
  bodyLinksWrapper: {
    overflow: "visible",
    height: "auto",
    opacity: 1,
  },
  bodyLinks: {
    position: "relative",
    listStyle: "none",
    padding: "0 0 14px",
    margin: "6px 0 0",
  },
  bodyLinksItem: {
    "&:hover > a": { background: "#525d66" },
    "&:hover #megaMenu": { visibility: "visible" },

    listStyle: "none",
    "& > a": {
      // "&:hover": {
      //   background: "#525d66",
      // },
      textDecoration: "none", //global style
      backgroundColor: "transparent",
      fontWeight: 400,
      position: "relative",
      display: "block",
      padding: "10px 16px",
      color: "inherit",
      fontSize: "14px",
      lineHeight: "16px",
      letterSpacing: "0.02em",
      "& svg": {
        right: "14px",
        top: "calc(50% - 5px)",
        position: "absolute",
        fill: "#98aab3",
      },
    },
  },
  button: {
    textAlign: "left",
    border: "none",
    background: "transparent",
    color: "inherit",
    fontSize: "15px",
    position: "relative",
    zIndex: 1,
    width: "100%",
    height: "100%",
    cursor: "default",
    fontWeight: 500,
    padding: "0 32px 0 47px",
  },
  buttonIcon: {
    position: "absolute",
    fill: "#859ba6",
    transition: "fill 0.2s, transform 0.2s",
  },
  buttonIconMenu: { left: "16px", top: "calc(50% - 7px)" },
  buttonIconArrow: {
    transform: "rotate(180deg)",
    right: "13px",
    top: "calc(50% - 3px)",
  },
});

interface Props extends WithStyles<typeof styles> {}

const Categories: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.Root}>
      <div className={classes.body}>
        <div className={classes.bodyLinksWrapper}>
          <ul className={classes.bodyLinks}>
            {categoryItems.map((item) => {
              return (
                <li className={classes.bodyLinksItem}>
                  <a href="/">
                    {item.name}
                    <Icon
                      icons={Icons}
                      id="arrow-rounded-right-6x9"
                      width="6px"
                      height="9px"
                    ></Icon>
                  </a>
                  <MegaMenu
                    subCategories={item.subCategories && item.subCategories}
                  ></MegaMenu>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <button className={classes.button}>
        <div className={`${classes.buttonIcon} ${classes.buttonIconMenu}`}>
          <Icon icons={Icons} id="menu-18x14" width="18px" height="14px"></Icon>
        </div>
        Shop By Category
        <div className={`${classes.buttonIcon} ${classes.buttonIconArrow}`}>
          <Icon
            icons={Icons}
            id="arrow-rounded-down-9x6"
            width="9px"
            height="6px"
          ></Icon>
        </div>
      </button>
    </div>
  );
};

export default withStyles(styles)(Categories);
