import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

import Icons from "../../assets/images/sprite.svg";
import { Icon } from "../../helpers/getSprite";

interface Props extends WithStyles<typeof styles> {}
const styles = createStyles({
  navIndicators__container: {
    display: "flex",
  },
  navIndicators__item: {
    "& a": {
      textDecoration: "none", //should be global
      alignItems: "center",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: "0px",
      color: "inherit",
      fill: "currentColor",
      "& span": {
        background: "transparent",
        transition: "background-color 0.2s",
        borderRadius: "2px",
        height: "42px",
        padding: "0 14px",
        display: "flex",
        MsFlexAlign: "center",
        alignItems: "center",
        "& span": {
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
      },
    },
  },
});
const NavIndicators: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.navIndicators__container}>
      <div className={classes.navIndicators__item}>
        <a href="">
          <span>
            <Icon icons={Icons} id="heart-20" width="20px" height="20px"></Icon>
            <span>0</span>
          </span>
        </a>
      </div>
      <div className={classes.navIndicators__item}>
        <a href="">
          <span>
            <Icon icons={Icons} id="cart-20" width="20px" height="20px"></Icon>
            <span>3</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default withStyles(styles)(NavIndicators);
