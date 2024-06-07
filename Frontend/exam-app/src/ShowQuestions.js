import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Avatar, ClickAwayListener, Link } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useHistory } from 'react-router-dom';
import A from './A';
import UserSidebar from './UserSidebar';
const useStyles = makeStyles((theme)=>({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 10, width: 400, margin: "8px auto",
        marginTop: 2,
        left: 3,right:40
    },
    margin: {
        margin: theme.spacing(6),
        width: 900
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '80ch',left: 40
    },
Button:{
    marginLeft:'87px',
}
}));

function ShowQuestions() {
     const classes = useStyles();
    const paperStyle = {
        padding: 10, maxheight: '15vh', width:600, marginLeft:100,margin: "2px auto", backgroundColor: "aliceblue", left:200   }
      
    return (
        <div className={classes.root}>

           <Grid  >
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='left'left={200}>

                        <List component="nav" className={classes.textField} aria-label="mailbox folders">
                            <ListItem >
                                <ListItemText primary="hi" />
                               
                                </ListItem>
                           
                               
                                <ui>
                                   <li>hii</li>
                                   <li>hii</li>
                                   <li>hii</li>
                                   <li>hii</li>
                               </ui>
                               
                             
                            
                        </List>
                        <Button variant="contained" className={classes.Button} color="primary"   >
                                    UPDATE QUESTION
                                </Button>
                                <Button variant="contained" className={classes.Button} color="primary" marginLeft= {20}  >
                                    DELETE QUESTION
                                </Button>
                               
                    </Grid>
                    <p marginLeft={20}>hello</p>
                </Paper>
            </Grid>
        </div>
    )
}

export default ShowQuestions
