import React, { PureComponent } from "react";
import { compose } from "redux";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import humps from "humps";
import injectSheet from "react-jss";

import StoryCover from "./StoryCover";
import StoryEditor from "./StoryEditor";

const StoryQuery = gql`
  query StoryQuery($story_id: ID!) {
    storyByID(id: $story_id) {
      id
      title
      pages {
        page_number
        content
        media {
          content_url
        }
      }
    }
  }
`;

const styles = {  
  content: {
    paddingTop: "100px",
    display: "flex",
    flexDirection: "column",
    position: 'relative',
  },
};

class Story extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 0,
      numPages: 0,
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.numPages === 0 && nextProps.data && nextProps.data.storyByID) {
      this.setState({ numPages: nextProps.data.storyByID.pages.length });
    }
  }

  nextPage = () => {
    this.setState({ pageNumber: (this.state.pageNumber + 1) % this.state.numPages })
  }

  prevPage = () => {
    if (this.state.pageNumber === 0) {
      this.setState({ pageNumber: this.state.numPages - 1 });
    } else {
      this.setState({ pageNumber: this.state.pageNumber - 1 });
    }
  }

  render() {
    const { pageNumber } = this.state;
    const { classes, match } = this.props;
    let { data } = this.props;

    if (data.loading) {
      return null;
    }
    data = humps.camelizeKeys(data);

    const story = data.storyByID;
    const { pages } = story;

    return (
      <div className={classes.Story}>
        <StoryEditor story={story} pageNumber={pageNumber} nextPage={this.nextPage} prevPage={this.prevPage}/>
      </div>
    );
  }
}

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
