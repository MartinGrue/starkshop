import React, { useState } from "react";
import { withStyles, createStyles } from "@material-ui/styles";
import { WithStyles } from "@material-ui/core";

const styles = createStyles({
  container: {
    maxWidth: 1140,
    height: "100%",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
  },
  root: {},
  topbar: {
    height: "32px",
    background: "#f7f7f7",
    boxShadow: "none",
    borderBottom: "none",
    fontSize: 14,
    lineHeight: 14,
    color: "#737373",
    position: "relative",
    zIndex: 20,
  },
  topbarItem: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    margin: 0,
  },
  topbarItemLink: {
    "&:not(:first-child)": {
      marginLeft: 16,
    },
  },
  topbarItemButton: {},
  topbarPadding: {
    flexGrow: 1,
  },

  middle: {},
  navPanel: {},
});

interface NavBarProps extends WithStyles<typeof styles> {}

const Header: React.FC<NavBarProps> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.topbar}>
        <div className={classes.container}>
          <div className={classes.topbarItem}>
            <a style={{ textDecoration: "none" }} href={"www.google.de"}>
              Link
            </a>
          </div>
          <div className={`${classes.topbarItem} ${classes.topbarItemLink}`}>
            <a style={{ textDecoration: "none" }} href={"www.google.de"}>
              Link
            </a>
          </div>
          <div className={`${classes.topbarItem} ${classes.topbarItemLink}`}>
            <a style={{ textDecoration: "none" }} href={"www.google.de"}>
              Link
            </a>
          </div>
          <div className={`${classes.topbarItem} ${classes.topbarItemLink}`}>
            <a style={{ textDecoration: "none" }} href={"www.google.de"}>
              Link
            </a>
          </div>
          <div className={`${classes.topbarItem} ${classes.topbarItemLink}`}>
            <a style={{ textDecoration: "none" }} href={"www.google.de"}>
              Link
            </a>
          </div>
          <div className={classes.topbarPadding}></div>
          <div className={classes.topbarItem}>
            <a style={{ textDecoration: "none" }} href={"www.google.de"}>
              Link
            </a>
          </div>
          <div className={classes.topbarItem}>
            <a style={{ textDecoration: "none" }} href={"www.google.de"}>
              Link
            </a>
          </div>
        </div>
      </div>
      <div className={classes.middle}></div>
      <div className={classes.navPanel}></div>
    </div>
  );
};
export default withStyles(styles)(Header);
