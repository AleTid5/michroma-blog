import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";

import Button from "../CustomButtons/Button";
import List from "@material-ui/core/List";

import blogPostsPageStyle from "../../assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";
const useStyles = makeStyles(blogPostsPageStyle);

const Navbar = () => {
    const classes = useStyles();

    return (
        <div style={{ display: "flex", paddingTop: "20px", paddingLeft: "40px" }}>
            <div style={{ flex: "50%" }}>
                <img src="/michroma/static/wp-content/uploads/2019/10/RGB-17.png" alt="michroma" width="200"
                     itemProp="logo" data-pagespeed-url-hash="281226273"/>
            </div>
            <div style={{ float: "right", marginTop: "13px", marginRight: "38px" }} className={classes.hideOnMobile}>
                <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                        <Button color="white"
                                className={classes.w28}
                                round
                                justIcon
                                simple
                                onClick={() => window.open("https://www.linkedin.com/company/michroma/")}>
                            <i className={`fab fa-linkedin-in ${classes.fs16}`} />
                        </Button>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                        <Button color="white"
                                className={classes.w28}
                                round
                                justIcon
                                simple
                                onClick={() => window.open("https://www.instagram.com/michroma.co/")}>
                            <i className={`fab fa-instagram ${classes.fs16}`} />
                        </Button>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                        <Button color="white"
                                className={classes.w28}
                                round
                                justIcon
                                simple
                                onClick={() => window.open("https://www.facebook.com/michroma.co/")}>
                            <i className={`fab fa-facebook-f ${classes.fs16}`} />
                        </Button>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                        <Button color="white"
                                className={classes.w28}
                                round
                                justIcon
                                simple
                                onClick={() => window.open("https://twitter.com/michroma_co")}>
                            <i className={`fab fa-twitter ${classes.fs16}`} />
                        </Button>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                        <Button color="white"
                                className={classes.w28}
                                round
                                justIcon
                                simple
                                onClick={() => window.open("mailto:ricky@michroma.co?subject=Introduce%20me%20to%20MICHROMA")}>
                            <i className={`far fa-envelope ${classes.fs16}`} />
                        </Button>
                    </ListItem>
                </List>
            </div>
        </div>
);
}

export default Navbar;