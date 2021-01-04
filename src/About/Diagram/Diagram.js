import React from 'react';
import './Diagram.css'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeCircleIn } from "d3-ease";
import AnimatedProgressProvider from './AnimatedProgressProvider';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    circularProgressbar: {
        [theme.breakpoints.down('sm')]: {
            width: '50%',
            marginTop: '40px'
        }
    }
}))

export default function Diagram() {
    const classes = useStyles();

    return (
        <>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={66}
                duration={1.4}
                easingFunction={easeCircleIn}
                repeat>
                {value => {
                    const roundedValue = Math.round(value);
                    return (
                        <Grid container className={classes.circularProgressbar}>
                            <CircularProgressbarWithChildren
                                value={75}
                                strokeWidth={8}
                                styles={buildStyles({
                                    pathColor: "#00fd97",
                                    trailColor: "transparent",

                                })}>
                                <CircularProgressbar
                                    value={value}
                                    text={`${roundedValue}%`}
                                    /* This is important to include, because if you're fully managing the
                              animation yourself, you'll want to disable the CSS animation. */
                                    styles={buildStyles({ pathTransition: "none", })}
                                />
                            </CircularProgressbarWithChildren>
                        </Grid>
                    );
                }}
            </AnimatedProgressProvider>
        </>
    )
}