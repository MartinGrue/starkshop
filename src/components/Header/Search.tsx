import React, { useState } from "react";
import { withStyles, createStyles } from "@material-ui/styles";
import { WithStyles } from "@material-ui/core";
import classes from "*.module.css";
import { Icon } from "../../helpers/getSprite";
import Icons from "../../assets/images/sprite.svg";

const styles = createStyles({
  root: { flexGrow: 1 },
  Form: {
    position: "relative",
    height: "42px",
    display: "flex",
  },
  Input: {
    border: "none",
    padding: "0 17px",
    background: "transparent",
    flexGrow: 1,
    fontSize: "15px",
    transition: "color 0.15s",
    "&:focus": {
      outline: "none",
    },
  },
  Button: {
    border: "none",
    padding: 0,
    background: "transparent",
    MsFlexPositive: 0,
    flexGrow: 0,
    width: "42px",
    cursor: "pointer",
    display: "flex",
    MsFlexAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fill: "#bfbfbf",
    transition: "fill 0.15s",
    "&:focus": {
      outline: "none",
      fill: "#ffd333",
    },
  },
  Border: {
    zIndex: -1,
    position: "absolute",
    pointerEvents: "none",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    borderRadius: 3,
    transition: "box-shadow 0.15s, background 0.15s",
    boxShadow: "inset 0 0 0 2px #e5e5e5",
  },
  BorderFocus: {
    boxShadow: "inset 0 0 0 2px #ffd333",
  },
});

interface SearchProps extends WithStyles<typeof styles> {}
const Search: React.FC<SearchProps> = ({ classes }) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className={classes.root}>
      <div>
        <form className={classes.Form}>
          <input
            className={classes.Input}
            name="search"
            placeholder="Search over 10,000 products"
            aria-label="Site search"
            type="text"
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
          <button className={classes.Button}>
            <Icon
              icons={Icons}
              id="search-20"
              width="20px"
              height="20px"
            ></Icon>
          </button>
          <div
            className={`${classes.Border} ${isFocus && classes.BorderFocus}`}
          ></div>
        </form>
      </div>
    </div>
  );
};
export default withStyles(styles)(Search);
