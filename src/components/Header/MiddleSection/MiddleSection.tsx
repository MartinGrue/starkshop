import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Container, createStyles, Grid } from "@material-ui/core";
import Logo from "./Logo";
import Search from "./Search";
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
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "30px",
    width: "255px",
  },
});
interface Props extends WithStyles<typeof styles> {}
const MiddleSection: React.FC<Props> = ({ classes }) => {
  return (
    <Container style={{height:"104px"}}>
      <Grid container style={{height:"100%"}} alignContent="center" >
        <div className={classes.logo}>
          <Logo></Logo>
        </div>
        <Search></Search>
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(MiddleSection);
