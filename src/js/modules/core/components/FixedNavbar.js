import React from "react";
import injectSheet from "react-jss";

import Navbar from "./Navbar";

const styles = {
  FixedNavbar: {
    position: "fixed",
    width: "100%",
  }
};

const FixedNavbar = ({ classes }) => {
  return (
    <div className={classes.FixedNavbar}>
      <Navbar />
    </div>
  );
};

export default injectSheet(styles)(FixedNavbar);
