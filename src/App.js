/*eslint-disable*/
import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// core components
import "./assets/scss/material-kit-pro-react.scss";
import Footer from "./components/Footer/Footer.js";
import GridContainer from "./components/Grid/GridContainer.js";
import GridItem from "./components/Grid/GridItem.js";
import Parallax from "./components/Parallax/Parallax.js";
// sections for this page
import SectionPills from "./components/Sections/SectionPills.js";
import Button from "./components/CustomButtons/Button.js";
import Navbar from "./components/Navbar/Navbar";

import blogPostsPageStyle from "./assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";
const useStyles = makeStyles(blogPostsPageStyle);

export default function App() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();
    return (
        <div style={{backgroundImage: `url(${require("./assets/img/michroma.jpg")})`}}>
            <Navbar />
            <Parallax small>
                <div className={`${classes.container} ${classes.t40Negative}`}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                            <h2 className={`${classes.title} ${classes.monserratFont}`}>
                                PRESS
                            </h2>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classes.main}>
                <div className={classes.container}>
                    <SectionPills />
                </div>
            </div>
            <Footer
                content={
                    <div>
                        <div className={classes.left}>
                            <List className={classes.list}>
                                <ListItem className={classes.inlineBlock}>
                                    <Button color="white"
                                            round
                                            justIcon
                                            simple
                                            onClick={() => window.open("https://www.linkedin.com/company/michroma/")}>
                                        <i className={`fab fa-linkedin-in`} />
                                    </Button>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <Button color="white"
                                            round
                                            justIcon
                                            simple
                                            onClick={() => window.open("https://www.instagram.com/michroma.co/")}>
                                        <i className={`fab fa-instagram`} />
                                    </Button>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <Button color="white"
                                            round
                                            justIcon
                                            simple
                                            onClick={() => window.open("https://www.facebook.com/michroma.co/")}>
                                        <i className={`fab fa-facebook-f`} />
                                    </Button>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <Button color="white"
                                            round
                                            justIcon
                                            simple
                                            onClick={() => window.open("https://twitter.com/michroma_co")}>
                                        <i className={`fab fa-twitter`} />
                                    </Button>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <Button color="white"
                                            round
                                            justIcon
                                            simple
                                            onClick={() => window.open("mailto:ricky@michroma.co?subject=Introduce%20me%20to%20MICHROMA")}>
                                        <i className={`far fa-envelope`} />
                                    </Button>
                                </ListItem>
                            </List>
                        </div>
                        <div className={classes.right} style={{color: "white"}}>
                            &copy; {1900 + new Date().getYear()} Michroma
                        </div>
                    </div>
                }
            />
        </div>
    );
}
