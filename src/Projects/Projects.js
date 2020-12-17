import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, Card } from '@material-ui/core';
import clsx from 'clsx';
import './Projects.css';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  expand: {
    color:'#00fd97',
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  picture: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    backgroundColor:'#2A2E35',
    color:'#00fd97'
  },
  details: {
    backgroundColor:'#2A2E35',
    color:'#b2becd'
  },
  cardContent: {
    backgroundColor:'#2A2E35',
    color:'#b2becd'
  },
  linkRoot: {
    color:'#00fd97'
  },
  cardActions: {
    backgroundColor:'#2A2E35'
  }
}));

export default function Projects({ picture, details, link, technologies, title }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.item}>
        <Card classeName={classes.card}>
          <CardHeader title={title} className={classes.title}></CardHeader>
          <CardMedia className={classes.picture} image={picture}></CardMedia>
          <CardContent className={classes.details}>
            <Typography component="p" variant="body2">{details}</Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.cardActions}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more">
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent className={classes.cardContent}>
              <Typography>{technologies}</Typography>
              <Typography className={classes.link}>
              <Button variant="contained" color="primary" href={link} target="_blank">
                Visit Site
              </Button>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </Grid>
  );
}