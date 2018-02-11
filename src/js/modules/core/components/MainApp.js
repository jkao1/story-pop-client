import React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";

const styles = {
  MainApp: {
    height: "100vh",
  },
};

const MainApp = ({ classes }) => {
  return (
    <div className={classes.MainApp}>
    </div>
  );
};

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(injectSheet(styles)(MainApp));
