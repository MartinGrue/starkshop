import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

import Icons from "../../../assets/images/sprite.svg"
import { Icon } from "../../../helpers/getSprite";

interface Props extends WithStyles<typeof styles> {}
const styles = createStyles({
  container: {
    display: "flex",
  },
  item: {
    // display: "flex",
    // alignItems: "center",
    // border: "none",
    // background: "transparent",
    // cursor: "pointer",
    // padding: "0px",
    // fill: "currentColor",
    "& a": {
      textDecoration: "none", //should be global
    },
  },
  itemContainer: {
    color: "#3d464d", //should be global
    background: "transparent",
    transition: "background-color 0.2s",
    borderRadius: "2px",
    height: "42px",
    padding: "0 14px",
    display: "flex",
    alignItems: "center",
  },
  valueIdicator: {
    height: "15px",
    fontSize: "10px",
    padding: "0 5px",
    borderRadius: "1000px",
    position: "relative",
    top: "-11px",
    marginLeft: "-5px",
    marginRight: "-8px",
    background: "#fff",
    color: "#3d464d",
    fontWeight: 700,
  },
});
const NavIndicators: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <a href="">
          <span className={classes.itemContainer}>
            <Icon icons={Icons} id="heart-20" width="20px" height="20px"></Icon>
            <span className={classes.valueIdicator}>0</span>
          </span>
        </a>
      </div>
      <div className={classes.item}>
        <a href="">
          <span className={classes.itemContainer}>
            <Icon icons={Icons} id="cart-20" width="20px" height="20px"></Icon>
            <span className={classes.valueIdicator}>3</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default withStyles(styles)(NavIndicators);
