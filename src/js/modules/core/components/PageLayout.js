import React, { PureComponent } from "react";
import { withRouter } from 'react-router-dom';
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap/lib";

import FixedNavbar from "./FixedNavbar";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

const styles = {
  hero: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
    position: "absolute",
    width: "100%",
    top: 0,
  },
};

class PageLayout extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, children, location, pageNumber } = this.props;

    let heroId = '';
    if (location.pathname === '/') {
      heroId = 'hero-home'
    } else if (location.pathname.includes('stories') && !location.pathname.includes('pages')) {
      heroId = 'hero-story'
    }

    if (pageNumber === 0 || pageNumber) {
      heroId = 'hero-pages'
    }

    return (
      <div>
        <div className={classes.hero} id={heroId}>
          {location.pathname === '/collection' ? <FixedNavbar /> : <Navbar />}
          {location.pathname !== '/collection' && !location.pathname.includes('pages') && <SideNav />}
          <div></div>
        </div>
        <div className={classes.content}>
          {children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  navbarText: state.core.customNavbarText,
  pageNumber: state.core.pageNumber,
});

export default withRouter(connect(mapStateToProps)(injectSheet(styles)(PageLayout)));
