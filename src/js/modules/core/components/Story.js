import React from "react";
import { compose } from "redux";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import humps from "humps";
import injectSheet from "react-jss";

import Navbar from "./Navbar";
import SideNav from "./SideNav";

const StoryQuery = gql`
  query StoryQuery($story_id: ID!) {
    storyByID(id: $story_id) {
      title
      pages {
        content
        media {
          content_url
        }
      }
    }
  }
`;

const styles = {  
  hero: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
    background: "rgb(221, 209, 190)",
    position: "absolute",
    width: "100%",
    zIndex: -1,
  },
  content: {
    paddingTop: "170px",
    marginLeft: "210px",
  },
  story: {
    margin: "0 auto",
  },
  title: {
    fontSize: "46px",
    lineHeight: "101px",
    fontFamily: "Helvetica Neue",
    fontWeight: 500,
    textFillColor: "transparent",
    textStrokeWidth: "1px",
    textDecoration: "underline",
    textStrokeColor: "#000",
  },
};

const Story = ({ classes, data }) => {
  if (data.loading) {
    return null;
  }
  data = humps.camelizeKeys(data);

  const story = data.storyByID;
  const { pages } = story;

  return (
    <div className={classes.Story}>    
      <div className={classes.hero}>
        <Navbar />
        <SideNav />
        <div></div>
      </div>
      <div className={classes.content}>
        <div className={classes.story}>
          <p className={classes.title}>{story.title}</p>
        </div>
      </div>
    </div>
  );
};

export default compose(
  graphql(StoryQuery, {
    options: ({ match }) => ({
      variables: {
        story_id: match.params.story_id
      },
    }),
  }),
  injectSheet(styles),
)(Story);
