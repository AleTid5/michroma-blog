import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import NavPills from "../NavPills/NavPills.js";

import press from "../../config/press";

import sectionPillsStyle from "../../assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.js";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import CardAvatar from "../Card/CardAvatar";

const useStyles = makeStyles(sectionPillsStyle);

export default function SectionPills() {
    const classes = useStyles();
    const spanishPress = press.filter(press => press.lang === "spanish");
    const englishPress = press.filter(press => press.lang === "english");

    const withZeroLeading = number => {
        return number > 9 ? number : `0${number}`;
    }

    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} className={classes.textCenter}>
                    <NavPills
                        alignCenter
                        color="rose"
                        tabs={[
                            {
                                tabButton: "Spanish",
                                tabContent: (
                                    <GridContainer>
                                        {spanishPress.map((spanishPress, key) => (
                                            <GridItem xs={12} sm={4} md={4} lg={4} xl={4} key={key}>
                                                <Card blog>
                                                    <CardHeader image>
                                                        <CardAvatar profile plain className={classes.maxWidthImage}>
                                                            <a href="#pablo" title={spanishPress.media.name}>
                                                                <img src={spanishPress.media.image} alt="profile-pic" className={classes.img} style={{height: "70px"}} />
                                                            </a>
                                                        </CardAvatar>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <h6 className={classes.textMuted}>
                                                            {`${withZeroLeading(spanishPress.date.getDate())}/${withZeroLeading(spanishPress.date.getMonth() + 1)}/${spanishPress.date.getFullYear()}`}
                                                        </h6>
                                                        <h4 className={classes.cardTitle}>
                                                            <a href={spanishPress.link}>
                                                                {spanishPress.name}
                                                            </a>
                                                        </h4>
                                                        <p className={classes.description}>
                                                            <a target="_blank" rel="noopener noreferrer" href={spanishPress.link} style={{color: "#ff1e64"}}>
                                                                {spanishPress.author
                                                                    ? `Ver nota hecha por ${spanishPress.author}`
                                                                    : "Ver nota"}
                                                            </a>
                                                        </p>
                                                    </CardBody>
                                                </Card>
                                            </GridItem>
                                        ))}
                                    </GridContainer>
                                )
                            },
                            {
                                tabButton: "English",
                                tabContent: (
                                    <GridContainer>
                                        {englishPress.map((englishPress, key) => (
                                            <GridItem xs={12} sm={4} md={4} lg={4} xl={4} key={key}>
                                                <Card blog>
                                                    <CardHeader image>
                                                        <CardAvatar profile plain className={classes.maxWidthImage}>
                                                            <a href="#pablo" title={englishPress.media.name}>
                                                                <img src={englishPress.media.image} alt="profile-pic" className={classes.img} style={{height: "70px"}} />
                                                            </a>
                                                        </CardAvatar>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <h6 className={classes.textMuted}>
                                                            {`${withZeroLeading(englishPress.date.getDate())}/${withZeroLeading(englishPress.date.getMonth() + 1)}/${englishPress.date.getFullYear()}`}
                                                        </h6>
                                                        <h4 className={classes.cardTitle}>
                                                            <a href={englishPress.link}>
                                                                {englishPress.name}
                                                            </a>
                                                        </h4>
                                                        <p className={classes.description}>
                                                            <a target="_blank" rel="noopener noreferrer" href={englishPress.link} style={{color: "#ff1e64"}}>
                                                                {englishPress.author
                                                                    ? `Read note written by ${englishPress.author}`
                                                                    : "Read note"}
                                                            </a>
                                                        </p>
                                                    </CardBody>
                                                </Card>
                                            </GridItem>
                                        ))}
                                    </GridContainer>
                                )
                            }
                        ]}
                    />
                </GridItem>
            </GridContainer>
        </div>
    );
}
