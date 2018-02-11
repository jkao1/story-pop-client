import React from "react";
import injectSheet from "react-jss";

import Navbar from "./Navbar";

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
    zIndex: -1,
  },
  backText: {
    textAlign: "center",
    fontSize: "110px",
    fontWeight: 700,
  }
};

const Collection = ({ classes }) => {
  return (
    <div>
      <Navbar />
      <div className={classes.boujeeBack}>
        <h1 className={classes.backText}>books</h1>
      </div>
      <Showcase />
    </div>
  );
};

export default injectSheet(styles)(Collection);
