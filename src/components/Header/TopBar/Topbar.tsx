import React, { useState } from "react";
import { withStyles, createStyles } from "@material-ui/styles";
import { Grid, WithStyles } from "@material-ui/core";
import Icons from "../../../assets/images/sprite.svg";
import { Icon } from "../../../helpers/getSprite";
import Container from "@material-ui/core/Container";
const styles = createStyles({
  topbar: {
    background: "#f7f7f7",
    boxShadow: "none",
    borderBottom: "none",
    fontSize: "14px",
    lineHeight: "14px",
    color: "#737373",
    position: "relative",
    zIndex: 20,
  },
  topbarItem: {
    display: "flex",
    alignItems: "center",
    margin: 0,
    height: "100%",
  },
  topbarItemLink: {
    "&:not(:first-child)": {
      marginLeft: "16px",
    },
    "& a": {
      color: "inherit",
      transition: "color 0.3s",

      textDecoration: "none", //this should be global
      backgroundColor: "transparent", //this should be global
    },
    "&:hover": {
      textDecoration: "none", //this should be global
      color: "#1a66ff", //this should be global
    },
  },
  topbarPadding: {
    flexGrow: 1,
  },
  topbarItem__dropdown: {
    position: "relative",
    height: "100%",
  },

  topbarItem__dropdown_btn: {
    height: "100%",
    border: "none",
    padding: "0 20px 0 10px",
    cursor: "pointer",
    transition: "all 0.1s",
    background: "transparent",
    color: "inherit",
    fill: "#bfbfbf",
    "&:focus": {
      outline: "none",
    },
    "& svg": {
      position: "absolute",
      right: "7px",
      top: "calc(50% - 4px)",
    },
  },
  topbarItem__dropdown_body: {
    position: "absolute",
    right: "0px",
    top: "100%",
    visibility: "hidden",
    transformOrigin: "top",
    transform: "rotateX(60deg)",
    opacity: 0,
    transition: "transform 0.2s, opacity 0.2s, visibility 0s 0.2s",
  },
  topbarItem__dropdow_opened: {
    zIndex: 1,
    transitionDelay: "0s, 0s, 0s",
    opacity: 1,
    visibility: "visible",
    transform: "rotateX(0deg)",
  },
  menu: {
    color: "#3d464d",
    background: "#fff",
    boxShadow: "0 1px 15px rgba(0, 0, 0, 0.25)",
    listStyle: "none",
    width: "190px",
    padding: "10px 0",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "0.02em",
    fontWeight: 500,
    "& li": {
      "& a": {
        textDecoration: "none", //this shoudl be global a
        display: "block",
        padding: "8px 24px 6px 16px",
        color: "inherit",
      },
    },
    "& li:hover": {
      "& a": {
        background: "#f2f2f2",
      },
    },
  },
  topbar_menu: {
    padding: "6px 0",
    width: "150px",
    boxShadow: "0 1px 7px rgba(0, 0, 0, 0.25)",
    marginTop: 0,
    marginBottom: "1rem",
  },
});

interface TopBarProps extends WithStyles<typeof styles> {}

const Topbar: React.FC<TopBarProps> = ({ classes }) => {
  const [dropdownOpen, setdropdownOpen] = useState<boolean>(false);
  return (
    <div className={classes.topbar}>
      <Container style={{ height: "32px" }}>
        <Grid container style={{ height: "100%" }} alignContent="center">
          <div className={`${classes.topbarItem} ${classes.topbarItemLink}`}>
            <a style={{ textDecoration: "none" }} href={"www.google.de"}>
              About Us
            </a>
          </div>
          <div className={`${classes.topbarItem} ${classes.topbarItemLink}`}>
            <a style={{ textDecoration: "none" }} href={"www.google.de"}>
              Contacts
            </a>
          </div>
          <div className={`${classes.topbarItem} ${classes.topbarItemLink}`}>
            <a style={{ textDecoration: "none" }} href={"www.google.de"}>
              Store Location
            </a>
          </div>
          <div className={`${classes.topbarItem} ${classes.topbarItemLink}`}>
            <a style={{ textDecoration: "none" }} href={"www.google.de"}>
              Track Order
            </a>
          </div>
          <div className={classes.topbarPadding}></div>
          <div className={classes.topbarItem}>
            <div className={classes.topbarItem__dropdown}>
              <button
                className={classes.topbarItem__dropdown_btn}
                onClick={() => {
                  setdropdownOpen(!dropdownOpen);
                }}
              >
                My Account
                <Icon
                  icons={Icons}
                  id="arrow-rounded-down-7x5"
                  width="7px"
                  height="5px"
                ></Icon>
              </button>
              <div
                className={`${classes.topbarItem__dropdown_body} ${
                  dropdownOpen && classes.topbarItem__dropdow_opened
                }`}
              >
                <ul className={`${classes.menu} ${classes.topbar_menu}`}>
                  <li>
                    <a href="account.html">Login</a>
                  </li>
                  <li>
                    <a href="account.html">Register</a>
                  </li>
                  <li>
                    <a href="#">Orders</a>
                  </li>
                  <li>
                    <a href="#">Addresses</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Grid>
      </Container>
      {/* </div> */}
    </div>
  );
};
export default withStyles(styles)(Topbar);
