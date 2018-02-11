import React from "react";
import { compose } from "redux";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import humps from "humps";

const StoryCoverQuery = gql`
  query StoryCoverQuery($story_id: ID!) {
    storyByID(id: $story_id) {
      id
      title
    }
  }
`;

const styles = {
  StoryCover: {
    textAlign: 'center',
  },
  story: {
    paddingTop: "110px",
    margin: "0 auto",
    display: "inline-flex",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  title: {
    marginBottom: "20px",
    display: "inline-block",
    fontSize: "46px",
    lineHeight: "101px",
    fontFamily: "Helvetica Neue",
    fontWeight: 500,
    textFillColor: "transparent",
    textStrokeWidth: "1px",
    textStrokeColor: "#000",
    position: 'relative',
    "&:after": {
      content: "''",
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "20px",
      display: 'block',
      width: '100%',
      height: '4px',
      border: '1px solid #000',
      backgroundColor: "transparent",
    },
    "&:hover": {
      textDecoration: "none",
    },
    "&:hover &:after": {
      backgroundColor: "#000",
    },
  },
  enter: {
    zIndex: "3 !important",
    textAlign: "center",
    margin: "0 auto",
    marginTop: "17px",
    animationName: "bounce",
    animationDuration: ".3s",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    animationTimingFunction: "ease-in",
    width: "110px",
  },
  "@keyframes bounce": {
    from: {transform: "translateY(0)"},
    to: {transform: "translateY(5px)"},
  },
  cover: {
    margin: "0 auto",
    width: "500px",
    zIndex: 3,
  },
};

const StoryCover = ({ classes, data }) => {
  if (data.loading) {
    return null;
  }
  data = humps.camelizeKeys(data);

  const story = data.storyByID;
  return (
    <div className={classes.StoryCover}>
      <div className={classes.story}>
        <Link className={classes.title} to={`/stories/${story.id}/pages`}>{story.title}</Link>
        <img className={classes.cover} src="/img/covers/wild.jpg" />
        <Link className={classes.enter} to={`/stories/${story.id}/pages`}>Enter Story &gt;&gt;</Link> 
      </div>       
    </div>
  );
};

export default compose(
  graphql(StoryCoverQuery, {
    options: ({ match }) => ({
      variables: {
        story_id: match.params.story_id
      },
    }),
  }),
  injectSheet(styles),
)(StoryCover);
