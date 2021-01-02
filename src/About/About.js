import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Chart from '../About/Diagram/Diagram';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  about: {
    marginLeft: '100px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 'auto',
      padding: '10px',
      marginBottom: '100px'
    }
  },
  skillsContainer: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1)
    }
  },
  aboutTitle: {
    color: '#00fd97',
    marginTop: '20px',
    marginBottom: '20px'
  },
  typography: {
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
    }
  },
  skillsTitle: {
    color: '#00fd97',
    marginBottom: '20px'
  },
  button: {
    margin: theme.spacing(1),
    color: 'black',
    textTransform: 'none',
    backgroundColor: '#C4C4C4'
  },
  service: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem',
      padding: theme.spacing(1),
    }
  },
  textContainer: {
    marginTop: '20px'
  },
  chart: {
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto'
    }
  }
}));
export default function About() {
  const classes = useStyles();

  return (
    <Link to="/about">
      <Menu />
      <Grid container md={12} className={classes.about} lg={12} sm={12} xs={12}>
        <Typography variant='h3' className={classes.aboutTitle}>About me</Typography>
        <Grid container md={12} className={classes.profession}>
          <Grid container md={3} lg={3} sm={12}>
            <Typography variant='h5' className={classes.typography}>
              Professionally connected with the web development
              industry and information technology as a result of a
              career change.
            </Typography>
            <Typography variant='h5' className={classes.typography}>
              Well-organised person, problem solver, independent employee
              with high attention to detail.
              Fan of graphic novels, outdoor activities,
              TV series and squash.
            </Typography>
          </Grid>
          <Grid container md={9} justify='center' sm={12} className={classes.chart}>
            <Chart />
          </Grid>
        </Grid>
        <Grid container direction='column' className={classes.skills}>
          <Typography variant='h4' className={classes.skillsTitle}>Skills</Typography>
          <Grid container direction='row' className={classes.skillsContainer}>
            <Button variant="contained" className={classes.button} color={'primary'}>JavaScript</Button>
            <Button variant="contained" className={classes.button} color={'primary'}>ReactJs</Button>
            <Button variant="contained" className={classes.button} color={'primary'}>NodeJs</Button>
          </Grid>
        </Grid>
        <Grid container md={12} className={classes.itemsContainer} sm={12}>
          <Grid container direction='column' md={6} className={classes.items}>
            <Grid container justify='center'>
              <Typography variant='h3' className={classes.service}>Web Development</Typography>
            </Grid>
            <Grid container justify='center'>
              <Typography variant='h4' className={classes.service}>UI Design</Typography>
            </Grid>
            <Grid container justify='center'>
              <Typography variant='h3' className={classes.service}>Website Design</Typography>
            </Grid>
          </Grid>
          <Grid container md={3} className={classes.textContainer}>
            <Typography variant='h5' className={classes.typography}>
              Currently working at HelloHub as a Frontend Engineer
              and as a freelancer for small businesses.
              </Typography>
            <Typography variant='h5' className={classes.typography}>
              Interested in the entire frontend spectrum and working
                on ambitious projects with positive people.</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Link>
  );
}