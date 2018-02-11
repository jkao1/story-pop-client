import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import injectSheet from "react-jss";

import { changeNavbarText } from "../actions";
import Toolbar from "./Toolbar";

const styles = {
  StoryEditor: {
    position: 'relative',
    marginTop: "140px",
    width: '95%',
    margin: '0 auto',
  },
  editor: {
    display: 'flex'
  },
  text: {    
    flexBasis: "70%",
  },
};  

class StoryEditor extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.story.pages.find(page => page.pageNumber === this.props.pageNumber),
    };
  }

  componentWillMount() {    
    const { changeNavbarText, pageNumber, story: { title } } = this.props;
    changeNavbarText(`0${pageNumber} / ${title}`);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.pageNumber !== this.props.pageNumber) {
      const { changeNavbarText, pageNumber, story: { title } } = nextProps;
      changeNavbarText(`0${pageNumber} / ${title}`);
      this.setState({ page: this.props.story.pages.find(page => page.pageNumber === nextProps.pageNumber )});
    }
  }

  handleFocus = e => {
    console.log(e.target.select())
  }

  render() {
    const { page } = this.state;
    const { nextPage, prevPage, classes } = this.props;

    return (
      <div className={classes.StoryEditor}>
        <div className={classes.editor}>
          <div className={classes.text} dangerouslySetInnerHTML={{ __html: page.content }} />
          <Toolbar />
        </div>
        <textarea type='text' value='Some something' onFocus={this.handleFocus} />
        <button onClick={prevPage}>Prev Page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeNavbarText }, dispatch);

export default connect(null, mapDispatchToProps)(injectSheet(styles)(StoryEditor));
