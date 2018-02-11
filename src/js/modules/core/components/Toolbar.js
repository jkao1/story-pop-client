import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  Toolbar: {
    flexBasis: "30%",
  },
};

const buttonStyles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    opacity: 0,
  },
};


class Toolbar extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let { classes, highlightedText } = this.props;

    if (highlightedText === '') {
      return <div className={classes.Toolbar} />;
    }

    const isEnding = '".-'.includes(highlightedText.substr(highlightedText.length - 1));

    highlightedText = `<p>${highlightedText.substr(0, 2) !== 'Th' ? '...' : ''}${highlightedText}${isEnding ? '' : '...'}</p>`;

    const buzzwords = ['wolf', 'night','mother','WILD','Max','bed','forest','vines','private boat','ocean','claws','teeth','eyes','magic','rumpus','king','supper', 'walls','mischief','YOU','ceiling','world','eating'];

    buzzwords.forEach(word => {
      highlightedText = highlightedText.replace(word, `<b>${word}</b>`);
    });

    return (
      <div className={classes.Toolbar} >
        <div dangerouslySetInnerHTML={{__html: highlightedText}} />

          <RaisedButton
            label="Choose a Model"
            labelPosition="before"
            style={buttonStyles.button}
            containerElement="label"
          >
            <input type="file" style={buttonStyles.exampleImageInput} />
          </RaisedButton>
      </div>
    );
  }
}

export default injectSheet(styles)(Toolbar);