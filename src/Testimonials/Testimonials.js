import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Testimonial from './Testimonial';
import Menu from '../Menu/Menu';


const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'start',
        marginBottom: '40px',
        marginTop: '60px',
        color: '#00fd97',
        fontSize:'6vh',
        [theme.breakpoints.down('sm')]:{
            marginLeft:'10px'
        },
        [theme.breakpoints.up('md')]:{
            marginLeft:'140px'
        }
    },
    box: {
        [theme.breakpoints.down('sm')]:{
            display:'block',
            marginBottom:'40px'
        },
        [theme.breakpoints.up('md')]: {
            display:'flex'
        }
    }

}));
export default function Testimonials() {
    const classes = useStyles();
    return (
        <>
            <Menu />
            <Typography className={classes.title}>A few words from...</Typography>
            <Box md={12} flexWrap='none' className={classes.box}>
                <Testimonial />
            </Box>
        </>
    )
}