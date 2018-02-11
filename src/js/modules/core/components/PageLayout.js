import React, { PureComponent } from "react";
import { withRouter } from 'react-router-dom';
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap/lib";

const styles = {
};

class PageLayout extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, children } = this.props;

    return (
      <div>
        <div className={classes.content}>
          {children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

export default withRouter(connect(mapStateToProps)(injectSheet(styles)(PageLayout)));
