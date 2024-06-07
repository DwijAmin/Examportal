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
import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import A from './A';
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

function GetQuiz_Question() {
     const classes = useStyles();
      const [Quiz, setQuiz] = useState([])
      const deleteQuestion = (b) =>{
        let logintoken = JSON.parse(localStorage.getItem('login'));
        console.log(logintoken.token)
        axios.delete('http://localhost:8080/question/'+b, {
          headers: {
            'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${logintoken.token}`
          },
        }
    
        ).then(response => {
          {
         //   setQuiz(response.data);
         window.location.reload(); 
   console.log(response.data)
          }
        }
        )
          .catch((error) => {
            console.log('error ' + error);
          });
         
     
      }
  useEffect(() => {
   
    
    //  const { state } = props.history.location;
     // console.log(state);
      let logintoken = JSON.parse(localStorage.getItem('login'));
      console.log(logintoken.token)
      axios.get('http://localhost:8080/question/Cat/'+55, {
        headers: {
          'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${logintoken.token}`
        },
      }
  
      ).then(response => {
        {
          setQuiz(response.data);
 
 console.log(response.data)
        }
      }
      )
        .catch((error) => {
          console.log('error ' + error);
        });
       
   }, [])
  
    const paperStyle = {
    padding: 10, maxheight: '15vh', width:600, marginLeft:100,marginTop:'20px',margin: "2px auto", backgroundColor: "aliceblue", left:200   }
        const history = useHistory();
        const [B, setB] = useState(
           {name :"dwij", id : 1}
       );
       const UpdateQuestion = (b) =>{
        history.push({pathname: "/UpdateQuestion", state : b});
    }

    return (
        <>
<A></A>
        <div className={classes.root}>
    

           <Grid  >
               {
                   Quiz.map((e)=>(
                    <Paper elevation={20} style={paperStyle}>
                    <Grid align='left'left={200}>

                        <List component="nav" className={classes.textField} aria-label="mailbox folders">
                            <ListItem >
                                <ListItemText primary={"Question  : "+e.content} />
                               
                                </ListItem>
                                <ui>
                                    <li>{"Option 1 :  "+e.option1}</li>
                                    <li>{"Option 2 :  "+e.option2}</li>
                                    <li>{"Option 3 :  "+e.option3}</li>
                                    <li>{"Option 4 :  "+e.option4}</li>
                                </ui>
                        </List>
                        <Button variant="contained" className={classes.Button} color="primary" onClick={()=>UpdateQuestion(e.quiz.qid)}  >
                                    UPDATE QUESTION
                                </Button>
                                <Button variant="contained" className={classes.Button} onClick={()=>deleteQuestion(e.qid)} color="primary" marginLeft= {20}  >
                                    DELETE QUESTION
                                </Button>
                               
                    </Grid>
                    <p marginLeft={20}>{"Answer : "+e.answer}</p>
                </Paper>
                

                   ))
               }
               
            </Grid>
        </div>
        </>
    )
}

export default GetQuiz_Question
