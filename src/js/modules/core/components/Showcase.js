import React, { PureComponent } from "react";
import injectSheet from "react-jss";

import ImageRow from "./ImageRow";

const styles = {
  Showcase: {
    paddingTop: "80vh",
  }
};

const COVERS_PATH = "/img/covers";

class Showcase extends PureComponent {
  constructor(props) {
    super(props);

    const filenames = ['horton.jpg', 'fish.jpeg', 'gruffalo.jpeg', 'green.jpeg', 'beanstalk.jpg', 'albert.jpg', 'goldilocks.jpeg', 'riding.jpeg', 'pigeon.jpeg', 'mother.jpg', 'alexander.jpg', 'rainbow.jpeg', 'corduroy.jpg', 'desoto.jpg', 'babar.jpg', 'caterpillar.jpg', 'chika.jpg', 'george.jpeg', 'tree.jpeg', 'web.JPG', 'wild.jpg', 'sideawlk.jpeg', 'barnyard.jpg', 'frances.jpg'];

    this.state = {
      images: filenames.map(name => ({
        src: '/img/covers/' + name,
        link: '/stories/1',
      })),
    }
  }

  render() {
    const { images } = this.state;
    const { classes } = this.props;

    const imageRows = [];
    for (let i = 0; i < images.length; i += 3) {
      imageRows.push(<ImageRow key={i} index={i} images={images.slice(i, i + 3)} />);
    }
    return (
      <div className={classes.Showcase}>
      {imageRows}
      </div>
    );
  }
}

export default injectSheet(styles)(Showcase);
