import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Avatar, ClickAwayListener, Link } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import Button from '@material-ui/core/Button';
import { useState , useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import UpdateQuestion from './UpdateQuestion';
import Addquestions from './Addquestions';
import UpdateQuiz from './UpdateQuiz';
import A from './A';
import axios from 'axios';
import GetQuiz_Question from './GetQuiz_Question';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 8, width: 690, margin: "19px auto",
        marginTop: 2,
        left: 4,right:40,
        

    },
    text : {
        marginLeft: "20px" , textDecorationStyle:'solid'},
    margin: {
        margin: theme.spacing(6),
        width: 900
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '50ch',left: 5
    },
Button:{
    marginLeft:'78px',
}
}));

function Quiz(props) {
    const classes = useStyles();
    const [quiz, setquiz] = useState([])
    //  const store = JSON.parse(localStorage.getItem('login'));
    const paperStyle = {
        padding: 17, height: '15vh', width: 590, margin: "20px auto", backgroundColor: "aliceblue", marginLeft : 110,left:200 , right:100   }
    const [B, setB] = useState(
        {name :"dwij", id : 1}
    );
    useEffect(() => {


        //  const { state } = props.history.location;
        // console.log(state);
        let logintoken = JSON.parse(localStorage.getItem('login'));
        console.log(logintoken.token)
        axios.get('http://localhost:8080/Quiz/allquizes', {
            headers: {
                'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${logintoken.token}`
            },
        }

        ).then(response => {
            
                setquiz(response.data);
                console.log(response.data)

            
        }
        )
            .catch((error) => {
                console.log('error ' + error);
            });


    }, [])
    const history = useHistory();
    const handle = (b) =>{
        history.push({pathname: "/Addquestions", state : b});
    }
    const GetQuestion = (b) =>{
        history.push({pathname: "/GetQuiz_Question", state : b});
    }
    const updateQuiz = (b) =>{
        history.push({pathname: "/UpdateQuiz", state : b});
    }
    const UpdateQuestion = (b) =>{
        history.push({pathname: "/UpdateQuestion", state : b});
    }

    const AvatarStyle = { backgroundColor: "blue" }
    const GridStyle = { backgroundColor: "midnightblue" }
   
    return (
        <>
       <A></A>
            
        <div className={classes.root} >
     

            <Grid className={classes.root} >
                {
                    quiz.map((m)=>(
                        <Paper elevation={20} style={paperStyle}>
                        <Grid align='left'left={200}>
    
                            <List component="nav" className={classes.root} aria-label="mailbox folders">
                            <ListItem >
                                    <br></br>
                                    <ListItemText className={classes.text} primary={"Title  : "+m.title} />
                                    <ListItemText primary= {"description  : " + m.description} />
                                   
                                </ListItem>



   
                                <Button variant="contained"  color="primary" onClick={()=>updateQuiz(m.qid)}>
                                        UPDATE QUIZ
                                    </Button>
                                    <br></br>
                                    <Button variant="contained"  className={classes.Button} color="primary" onClick={()=>handle(m.qid)}>
                                        AddQuestion
                                    </Button>
                                    <br />
                              
                                    <Button variant="contained"  className={classes.Button} color="primary" onClick={()=>GetQuestion(m.qid)}>
                                        GetQuestion
                                    </Button>
                                    
                                   
                                
                            </List>
    
                        </Grid>
    
                    </Paper>
                    
                    ))
                }
            
            </Grid>
        </div>
        </>
    )
}
export default Quiz
