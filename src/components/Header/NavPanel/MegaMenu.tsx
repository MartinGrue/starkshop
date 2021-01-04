import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
const styles = createStyles({
  container: {
    position: "absolute",
    left: "100%",
    top: 0,
    height: "100%",
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
    marginRight: "-15px",
    marginLeft: "-15px",
  },
  col: {
    flex: "0 0 100%",
    maxWidth: "100%",
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  listItem: {
    padding: "1px 0",
    "& a": {
      fontWeight: 500,
    },
  },
  listItemWithSubMenu: {
    "+ li": {
      marginTop: "20px",
    },
  },

  nestedList: {
    listStyle: "none",
    paddingTop: "10px",
    marginTop: "3px",
    borderTop: "1px solid #e5e5e5",
  },
});
interface Props extends WithStyles<typeof styles> {}

const MegaMenu: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.container}>
      {" "}
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
                <a href="#">Workbenches</a>
              </li>
              <li>
                <a href="#">Workbenches</a>
              </li>
              <li>
                <a href="#">Workbenches</a>
              </li>
              <li>
                <a href="#">Workbenches</a>
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
