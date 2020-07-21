import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BasicTextFields from './textfield.js'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
      textAlign:'center',
      backgroundColor: 'yellow'
      
    },
  },
  paper:{
    height: 800,
    width: 800,
    margin: 'auto',
    textAlign:'center',
    backgroundColor: 'grey',
    marginTop:50
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
      <Paper elevation={10} className = {classes.paper}>
    
      <h1>login</h1>
      <BasicTextFields></BasicTextFields>
      </Paper>
        
    
    </div>
  );
}