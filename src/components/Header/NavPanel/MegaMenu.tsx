import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { SubCategories } from "../../../constants/categoryItems";
const styles = createStyles({
  container: {
    width: "855px",
    position: "absolute",
    left: "100%",
    top: 0,
    height: "100%",
    visibility: "hidden",
  },
  root: {
    background: "#fff",
    color: "#3d464d",
    boxShadow: "0 1px 15px rgba(0, 0, 0, 0.25)",
    minHeight: "100%",
    width: "100%",
    padding: "26px 30px",
    lineHeight: 1.5,
    letterSpacing: "0.01em",
    backgroundPosition: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
  },
  col: {
    flex: "0 0 100%",
    maxWidth: "100%",
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    "&  a": {
      color: "inherit",
      textDecoration: "none",
      fontWeight: 500,
    },
  },
  listItem: {
    padding: "1px 0",
  },
  listItemWithSubMenu: {
    "& + li": {
      marginTop: "20px",
    },
  },

  nestedList: {
    listStyle: "none",
    paddingTop: "10px",
    marginTop: "3px",
    borderTop: "1px solid #e5e5e5",
    "& a": {
      textDecoration: "none",
      fontSize: "14px",
      color: "#5c6b73",
      transition: "color 0.15s",
    },
  },
});
interface Props extends WithStyles<typeof styles> {
  subCategories?: SubCategories[];
}
const SetWidth = (subCategories: SubCategories[]) => {
  // if()
};
const MegaMenu: React.FC<Props> = ({ classes, subCategories }) => {
  return (
    <div className={classes.container} id="megaMenu">
      <div className={classes.root}>
        <div className={classes.row}>
          <div className={classes.col}>
            <ul className={classes.list}>
              <li
                className={`${classes.listItem} ${classes.listItemWithSubMenu}`}
              >
                <a href="">Power Tools</a>
                <ul className={`${classes.nestedList} ${classes.list}`}>
                  <li className={classes.listItem}>
                    <a href="#">Engravers</a>
                  </li>
                  <li className={classes.listItem}>
                    <a href="#">Engravers</a>
                  </li>
                  <li className={classes.listItem}>
                    <a href="#">Engravers</a>
                  </li>
                  <li className={classes.listItem}>
                    <a href="#">Engravers</a>
                  </li>
                  <li className={classes.listItem}>
                    <a href="#">Engravers</a>
                  </li>
                  <li className={classes.listItem}>
                    <a href="#">Engravers</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className={classes.listItem} href="#">
                  Workbenches
                </a>
              </li>
              <li>
                <a className={classes.listItem} href="#">
                  Workbenches
                </a>
              </li>
              <li>
                <a className={classes.listItem} href="#">
                  Workbenches
                </a>
              </li>
              <li>
                <a className={classes.listItem} href="#">
                  Workbenches
                </a>
              </li>
            </ul>
          </div>
          {/* <div className={classes.col}></div>
          <div className={classes.col}></div>
          <div className={classes.col}></div> */}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(MegaMenu);
