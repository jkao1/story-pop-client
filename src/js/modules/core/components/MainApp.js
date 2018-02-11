import React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";

import Navbar from "./Navbar";
import SideNav from "./SideNav";

const styles = {
  MainApp: {
    height: "100vh",
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

const MainApp = ({ classes }) => {
  return (
    <div className={classes.MainApp}>    
      <div className={classes.hero} id="hero">
        <Navbar />
        <SideNav />
        <div></div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(injectSheet(styles)(MainApp));
