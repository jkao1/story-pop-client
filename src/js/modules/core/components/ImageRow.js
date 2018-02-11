import React from "react";
import injectSheet from "react-jss";

const styles = {
  ImageRow: {
    display: "flex",
    justifyContent: "space-around",
    "& figure": {
      position: "relative",
      display: "block",
      "& img": {
        opacity: .8,
        width: "100%",
        top: 0,
        left: 0,
        display: "block",
        boxSizing: "border-box",
        "&:hover": {
          border: "2px solid #000",
        },
      },
    },
  },
  smallImages: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "49%",
    "& figure:first-child": {
      marginLeft: "26%",
      marginTop: "-3%",
      marginBottom: "16%",
      width: "48%",
    },
    "& figure:last-child": {
      width: "48%",
    },
  },
  largeImage: {
    flexBasis: "46%",
  },
};

const FigureImg = ({ image }) => {
  return (
    <figure>
      <a href={image.link}>
        <img src={image.src} />
      </a>
    </figure>
  );
};

const ImageRow = ({ classes, images, index }) => {
  return (
    <div className={classes.ImageRow} style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }} >
      <div className={classes.smallImages}>
        <FigureImg image={images[0]} />
        <FigureImg image={images[1]} />
      </div>
      <div className={classes.largeImage}>
        <FigureImg image={images[2]} />
      </div>
    </div>
  );
};

export default injectSheet(styles)(ImageRow);
