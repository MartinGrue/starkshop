import React, { Fragment } from "react";
import Topbar from "./TopBar/Topbar";
import Search from "./MiddleSection/Search";
import Logo from "./MiddleSection/Logo";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import NavPanel from "./NavPanel/NavPanel";
import MiddleSection from "./MiddleSection/MiddleSection";

const styles = createStyles({
  middleSection: {
    display: "flex",
    alignItems: "center",
    height: "104px",
    maxWidth: "1140px",

    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  navPanel: {
    height: "53px",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    marginRight: "30px",
    width: "255px",
  },
});
interface Props extends WithStyles<typeof styles> {}

const Header: React.FC<Props> = ({ classes }) => {
  return (
    <Fragment>
      <Topbar></Topbar>
      {/* <div className={classes.middleSection}>
        <div className={classes.logo}>
          <Logo></Logo>
        </div>
        <Search></Search>
      </div> */}
      <MiddleSection></MiddleSection>
      <div className={classes.navPanel}>
        <NavPanel></NavPanel>
      </div>
    </Fragment>
  );
};
export default withStyles(styles)(Header);
