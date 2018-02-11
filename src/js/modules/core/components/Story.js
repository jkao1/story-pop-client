import React, { PureComponent } from "react";
import { compose } from "redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import humps from "humps";
import injectSheet from "react-jss";

import StoryCover from "./StoryCover";
import StoryEditor from "./StoryEditor";
import { changePageNumber } from "../actions";

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

  componentDidMount() {
    this.props.changePageNumber(this.state.pageNumber);
  }

  componentWillUnmount() {
    this.props.changePageNumber(null);
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.numPages === 0 && nextProps.data && nextProps.data.storyByID) {
      this.setState({ numPages: nextProps.data.storyByID.pages.length });
    }
    this.props.changePageNumber(nextState.pageNumber);
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

const mapDispatchToProps = dispatch => bindActionCreators({ changePageNumber }, dispatch);

export default compose(
  graphql(StoryQuery, {
    options: ({ match }) => ({
      variables: {
        story_id: match.params.story_id
      },
    }),
  }),
  connect(null, mapDispatchToProps),
  injectSheet(styles),
)(Story);
