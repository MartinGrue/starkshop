import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import classes from "*.module.css";
import categoryItems from "../../constants/categoryItems";
import Icons from "../../assets/images/sprite.svg";
import { Icon } from "../../helpers/getSprite";

const styles = createStyles({
  categories__Root: {
    width: "255px",
    height: "42px",
    color: "#fff",
    position: "relative",
  },
  categories__body: {
    width: "100%",
    paddingTop: "42px",
    position: "absolute",
    background: "#3d464d",
    boxShadow: "none",
    borderRadius: "2px",
  },
  categories__bodyLinksWrapper: {
    overflow: "visible",
    height: "auto",
    opacity: 1,
  },
  categories__bodyLinks: {
    position: "relative",
    listStyle: "none",
    padding: "0 0 14px",
    margin: "6px 0 0",
  },
  categories__bodyLinksItem: {
    listStyle: "none",
    "& a": {
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
  categories__button: {
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
  categories__buttonIcon: {
    position: "absolute",
    fill: "#859ba6",
    transition: "fill 0.2s, transform 0.2s",
  },
  categories__buttonIconMenu: { left: "16px", top: "calc(50% - 7px)" },
  categories__buttonIconArrow: {
    transform: "rotate(180deg)",
    right: "13px",
    top: "calc(50% - 3px)",
  },
});

interface Props extends WithStyles<typeof styles> {}

const Categories: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.categories__Root}>
      <div className={classes.categories__body}>
        <div className={classes.categories__bodyLinksWrapper}>
          <ul className={classes.categories__bodyLinks}>
            {categoryItems.map((Item) => {
              return (
                <li className={classes.categories__bodyLinksItem}>
                  <a href="/">
                    {Item.name}
                    <Icon
                    
                      icons={Icons}
                      id="arrow-rounded-right-6x9"
                      width="6px"
                      height="9px"
                    ></Icon>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <button className={classes.categories__button}>
        <div
          className={`${classes.categories__buttonIcon} ${classes.categories__buttonIconMenu}`}
        >
          <Icon icons={Icons} id="menu-18x14" width="18px" height="14px"></Icon>
        </div>
        Shop By Category
        <div
          className={`${classes.categories__buttonIcon} ${classes.categories__buttonIconArrow}`}
        >
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
