import React from "react";
import { Link } from "react-router-dom";
import injectSheet from "react-jss";

const styles = {
  SideNav: {
    fontFamily: "Helvetica Neue",
    fontSize: "22px", 
    marginTop: "-60px",
    paddingLeft: "45px",
    width: "150px",
    "& a": {
      display: "block",
      marginTop: "20px",
    },
  },
};

const links = [
  {
    title: "Collection",
    to: "/collection",
  },
  {
    title: "About",
    to: "/",
  },
  {
    title: "The brand",
    to: "/",
  },
  {
    title: "Scenes",
    to: "/",
  },
]
const SideNav = ({ classes }) => {
  return (
    <div className={classes.SideNav}>
    {links.map(link => <Link key={link.title} to={link.to}>{link.title}</Link>)}
    </div>
  );
};

export default injectSheet(styles)(SideNav);
