import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import injectSheet from "react-jss";
import Highlightable from 'highlightable';
import RaisedButton from 'material-ui/RaisedButton';

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
    display: 'flex',
    justifyContent: 'space-around',
  },
  text: {
    fontFamily: "Helvetica Neue",
    fontWeight: 400,
    fontSize: "40px",
    flexBasis: "60%",
    "& > div": {
      marginBottom: "25px",
      "& > span::selection": {
        backgroundColor: 'rgb(240, 92, 80)',
      },
    },
  },
  buttons: {
    display: "flex",
    width: "40%",
    justifyContent: "space-around",
  }
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

  clearHighlighted = () => {
    this.setState({ highlightedText: '' });
  }

  render() {
    const { page, highlightedText } = this.state;
    const { nextPage, prevPage, classes } = this.props;

    return (
      <div className={classes.StoryEditor} onClick={this.clearHighlighted}>
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
        <div className={classes.buttons}>
          <RaisedButton label="Previous" onClick={prevPage} primary={true}></RaisedButton>
          <RaisedButton label="Next" onClick={nextPage} secondary={true}></RaisedButton>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeNavbarText }, dispatch);

export default connect(null, mapDispatchToProps)(injectSheet(styles)(StoryEditor));
