import React, { PureComponent } from "react";
import injectSheet from "react-jss";

const styles = {
  Toolbar: {
    flexBasis: "30%",
  },
};

class Toolbar extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Toolbar}>
        
      </div>
    );
  }
}

export default injectSheet(styles)(Toolbar);