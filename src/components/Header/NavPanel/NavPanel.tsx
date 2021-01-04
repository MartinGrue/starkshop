import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Categories from "./Categories";
import NavLinks from "./NavLinks";
import NavIndicators from "./NavIndicators";

const styles = createStyles({
  navPanel__root: {
    height: "100%",
    color: "black",
    background: "#d2d2d2",
  },
  navPanel__container: {
    maxWidth: "1140px",
    height: "100%",

    width: "100%", //global
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  navPanel__row: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    height: "100%",
  },
  navPanel__categories: { flexShrink: 0 },
  navPanel__links: {
    marginLeft: "18px",
  },
  navPanel__indicators: {
    marginLeft: "auto",
  },
});

interface Props extends WithStyles<typeof styles> {}

const NavPanel: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.navPanel__root}>
      <div className={classes.navPanel__container}>
        <div className={classes.navPanel__row}>
          <div className={classes.navPanel__categories}>
            <Categories></Categories>
          </div>
          <div className={classes.navPanel__links}>
            <NavLinks></NavLinks>
          </div>
          <div className={classes.navPanel__indicators}>
            <NavIndicators></NavIndicators>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(NavPanel);
