import React from "react";
import { Link } from "react-router-dom";
import injectSheet from "react-jss";

const styles = {
  Navbar: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "40px",
    padding: "0 45px",
  },
  logo: {
    fontFamily: "Arial",
    fontSize: "20px",
    fontWeight: 700,    
    textTransform: "uppercase",
  },
  navigation: {
    "& a": {
      fontFamily: "Helvetica Neue",
      fontSize: "14px",
      marginRight: "20px",
    }
  }
};

const links = [
  {
    title: "My account",
    to: "/",
  },
  {
    title: "Get the app",
    to: "/",
  },
]

const Navbar = ({ classes }) => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.logo}><Link to="/">Story Pop</Link></div>
      <div className={classes.navigation}>
        {links.map(link => {
          return (
            <Link key={link.title} to={link.to}>{link.title}</Link>
          );
        })}
        <a href="/" key="bag">Books: 0</a>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Navbar);
