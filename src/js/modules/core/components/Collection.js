import React from "react";
import injectSheet from "react-jss";

import FixedNavbar from "./FixedNavbar";
import Showcase from "./Showcase";

const styles = {  
  boujeeBack: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -2,
  },
  backText: {
    textAlign: "center",
    fontSize: "160px",
    fontWeight: 700,
  }
};

const Collection = ({ classes }) => {
  return (
    <div>
      <FixedNavbar />
      <div className={classes.boujeeBack}>
        <h1 className={classes.backText}>books</h1>
      </div>
      <Showcase />
    </div>
  );
};

export default injectSheet(styles)(Collection);
