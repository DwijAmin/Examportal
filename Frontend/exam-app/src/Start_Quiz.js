import React, { useEffect, useState } from 'react'
import './Start_quiz.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useCountdown } from 'react-countdown-circle-timer'
import UserSidebar from './UserSidebar';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 10, width: 600, margin: "28px auto",
        marginTop: 20,
        left: 3, right: 40
    },
    margin: {
        margin: theme.spacing(2),
        width: 900
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '60ch', left: 10, overflowWrap: 'break-word'

    },
    Button: {
        marginLeft: '87px',
    }
}));
function Start_Quiz(props) {
    
  const items = JSON.parse(localStorage.getItem('id'));
  console.log(items.id)
  

    const classes = useStyles();
    const {
        path,
        pathLength,
        stroke,
        strokeDashoffset,
        remainingTime,
        elapsedTime,
        size,
        strokeWidth,
    } = useCountdown({ isPlaying: true, duration: 2, colors: '#abc' })
    const [marks, setmarks] = useState(0)
       
    const [data, setdata] = useState([])
    const redio = (A, b, c) => {
        if (A === b) {

            let d = marks + c;
            setmarks(d)
        }
        else{
            console.log("false")
        }

    }
    console.log(marks)
    const { state } = props.history.location;
    useEffect(() => {


        //  const { state } = props.history.location;
        // console.log(state);
        let logintoken = JSON.parse(localStorage.getItem('login'));
        console.log(logintoken.token)
        axios.get('http://localhost:8080/question/Cat/' + state, {
            headers: {
                'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${logintoken.token}`
            },
        }

        ).then(response => {

            setdata(response.data);
            console.log(response.data)


        }
        )
            .catch((error) => {
                console.log('error ' + error);
            });


    }, [])
    const submit = () =>{
         // console.log(d)
         let logintoken = JSON.parse(localStorage.getItem('login'));
         //   let id = JSON.parse(localStorage.getItem('login'));
     
            axios({
                method: 'post',
                url: 'http://localhost:8080/result/',
                headers: {
                    'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${logintoken.token}`,
    
                },
                data: {
                 
                     "marks" : marks,
                     "quiz" : {
                         "qid" : state
                     },
                     "users" : {
                          "id" :  items.id
                     }       
                    
                    
                }
            }).then(response => {
    
                //    setQuiz(response.data);
                console.log(response)
    
    
            }
            )
                .catch((error) => {
                    console.log('error ' + error);
                });
    
    
    
         
    }
    const paperStyle = {
        padding: 10, maxheight: '15vh', width: 600, marginLeft: 100, margin: "15px auto", backgroundColor: "lightgrey", left: 200
    }
    const history = useHistory();
    return (

        <div >
          
            <div className='Quiz'>
             
            <UserSidebar></UserSidebar>
            <div className='timer'>
            <CountdownCircleTimer
                isPlaying
                duration={10}
                colors="#A30000"
                onComplete={() => {
                    history.push({pathname: "/User_Quiz"});
                }}
            />
            </div>
           
            <div className="root">
                {
                    data.map((p) => (
                        <Grid  >
                            <Paper elevation={20} style={paperStyle}>
                                <Grid align='left' left={200}>

                                    <List component="nav" className={classes.textField} aria-label="mailbox folders">
                                        <h1>{p.content}</h1>
                                        <div onChange={(e) => redio(e.target.value, p.answer, p.marks)}>
                                            <input type="radio" value={p.option1} name="gender" /> {p.option1}
                                            <br></br>
                                            <input type="radio" value={p.option2} name="gender" /> {p.option2}
                                            <br></br>
                                            <input type="radio" value={p.option3} name="gender" /> {p.option3}
                                            <br></br>
                                            <input type="radio" value={p.option4} name="gender" /> {p.option4}
                                        </div>



                                    </List>


                                </Grid>


                            </Paper>
                        </Grid>
                    ))
                }



<Button variant="contained" color="primary" onClick={() => { submit() }}>
                                SUBMIT QUIZ
                            </Button>
            
            </div>
               
            </div>
            
        </div>
    )
}

export default Start_Quiz