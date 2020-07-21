import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  text:{
    width: '95%',
    margin: 'auto',
    textAlign:'center',
    backgroundColor: 'white',
    marginTop:50
  },
  button:{
    width: '70%',
    margin: 'auto',
    textAlign:'center',
    backgroundColor: 'blue',
    marginTop:50
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form  noValidate autoComplete="off">
      <TextField className = {classes.text} label = "First Name"/>
      <TextField className = {classes.text} label = "Last Name"/>
      <Button className = {classes.button} variant="contained">Enter</Button>
    </form>
  );
}