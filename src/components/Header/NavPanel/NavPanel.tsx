import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Categories from "./Categories";
import NavLinks from "./NavLinks";
import NavIndicators from "./NavIndicators";
import { Container, Grid } from "@material-ui/core";

const styles = createStyles({
  root: {
    color: "black",
    background: "#d2d2d2",
  },
  categories: { flexShrink: 0 },
  links: {
    marginLeft: "18px",
  },
  indicators: {
    marginLeft: "auto",
  },
});

interface Props extends WithStyles<typeof styles> {}

const NavPanel: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Container style={{ height: "53px" }}>
        <Grid container style={{ height: "100%" }} alignContent="center">
          <div className={classes.categories}>
            <Categories></Categories>
          </div>
          <div className={classes.links}>
            <NavLinks></NavLinks>
          </div>
          <div className={classes.indicators}>
            <NavIndicators></NavIndicators>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default withStyles(styles)(NavPanel);
