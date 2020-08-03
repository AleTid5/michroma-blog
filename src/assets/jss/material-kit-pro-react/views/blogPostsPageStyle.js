import {
  container,
  title,
  main,
  whiteColor,
  mainRaised
} from "../../material-kit-pro-react.js";

const blogPostsPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative"
  },
  textCenter: {
    textAlign: "center"
  },
  title: {
    ...title,
    color: whiteColor,
    fontSize: "60px"
  },
  main: {
    ...main,
    ...mainRaised
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  },
  greyBtn: {
    backgroundColor: "#f4f4f4",
    color: "black"
  },
  monserratFont: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif'
  },
  fs16: {
    fontSize: "16px !important"
  },
  w28: {
    width: "28px !important",
    minWidth: "28px !important",
  },
  hideOnMobile: {
    "@media only screen and (max-width: 600px)": {
      display: "none"
    }
  },
  t40Negative: {
    top: "-40px"
  }
};

export default blogPostsPageStyle;
