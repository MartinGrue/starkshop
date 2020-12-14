import React, { Fragment } from "react";
import Topbar from "./Topbar";
import Search from "./Search";
import Logo from "./Logo";
const containerStyle = {
  display: "flex",
  alignItems: "center",
  height: "104px",
  maxWidth: "1140px",

  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
};
const Header = () => {
  return (
    <Fragment>
      <Topbar></Topbar>
      <div style={containerStyle}>
        <Logo></Logo>
        <Search></Search>
      </div>
    </Fragment>
  );
};
export default Header;
