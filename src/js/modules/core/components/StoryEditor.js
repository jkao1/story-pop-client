import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import injectSheet from "react-jss";
import Highlightable from 'highlightable';

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
    fontFamily: "Helvetica Neue",
    fontWeight: 400,
    fontSize: "30px",
    flexBasis: "70%",
    "& > div": {
      marginBottom: "10px",
      "& > span::selection": {
        backgroundColor: 'rgb(240, 92, 80)',
      },
    },
  },
};  

class StoryEditor extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.story.pages.find(page => page.pageNumber === this.props.pageNumber),
      highlightedText: '',
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

  onTextHighlighted = range => {
    this.setState({ highlightedText: range.text });
  }

  render() {
    const { page, highlightedText } = this.state;
    const { nextPage, prevPage, classes } = this.props;

    return (
      <div className={classes.StoryEditor}>
        <div className={classes.editor}>
          <div className={classes.text}>
          {page.content.split('\\n').map(text => {
            return (
              <Highlightable ranges={[]}
                 key={text}
                 enabled={true}
                 onTextHighlighted={this.onTextHighlighted}
                 id={text}
                 /* onMouseOverHighlightedWord={onMouseOverHighlightedWordCallback} */
                 highlightStyle={{
                   backgroundColor: '#ffcc80'
                 }}
                 text={text}
              />
            );
          })}
          </div>
          <Toolbar highlightedText={highlightedText}/>
        </div>
        
        <button onClick={prevPage}>Prev Page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeNavbarText }, dispatch);

export default connect(null, mapDispatchToProps)(injectSheet(styles)(StoryEditor));
