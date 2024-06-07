import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import A from './A';
import { useState } from 'react';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        padding: 5, height: '45vh', width: 500, margin: "30px auto",
        marginTop: 10,
        marginLeft : '470px'

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    roots: {
        width: 390,
    },
    xs6: {
        padding: 10,
        width: 150
    },
    center: {
        alignItems: 'center'
    }
}));

function Addquestions(props) {
    const classes = useStyles();
    const { state } = props.history.location;
    console.log(state);
    const [category, setcategory] = useState([])
    const [Question, setQuestion] = useState("");
    const [qid, setqid] = useState(0);
    const [answer, setanswer] = useState("")
    const [marks, setmarks] = useState(0)
    const [option1, setoption1] = useState("")
    const [option2, setoption2] = useState("")
    const [option3, setoption3] = useState("")
    const [option4, setoption4] = useState("")

    const add_quiz = () => {
        //  const { state } = props.history.location;


        let logintoken = JSON.parse(localStorage.getItem('login'));
        console.log(logintoken.token)
        axios({
            method: 'post',
            url: 'http://localhost:8080/question/',
            headers: {
                'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${logintoken.token}`,

            },
            data: {
                "quiz": {
                    "qid": state
                },
                "content": Question,
                "answer": answer,
                "image": "kkk",
                "marks": marks
                , "option1": option1,
                "option2": option2,
                "option3": option3,
                "option4": option4

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
    return (
        <>
            <A />
            <div className={classes.root}>

                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <h4 textAlign="center">ADD QUESTION</h4> </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className={classes.paper}>

                            <TextField className={classes.roots} id="standard-basic" label="Question" value={Question} onChange={e => setQuestion(e.target.value)} />  </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} ><TextField className={classes.xs3} id="standard-basic" value={option1} onChange={e => setoption1(e.target.value)} label="Option 1" /></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}><TextField className={classes.xs3} id="standard-basic" value={option2} onChange={e => setoption2(e.target.value)} label="Option 2" /></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}><TextField className={classes.xs3} id="standard-basic" label="Option 3" value={option3} onChange={e => setoption3(e.target.value)} /></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}><TextField className={classes.xs3} id="standard-basic" label="Option 4" value={option4} onChange={e => setoption4(e.target.value)} /></Paper>
                    </Grid>

                    <Grid item xs={3}>
                        <Paper className={classes.paper}><TextField className={classes.xs3} id="standard-basic" value={marks} onChange={e => setmarks(e.target.value)} label="Marks" /></Paper>
                    </Grid><br></br>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}><TextField className={classes.xs3} id="standard-basic" value={answer} onChange={e => setanswer(e.target.value)} label="Correct Answer" /></Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}><Button variant="outlined" color="primary" onClick={() => add_quiz()} className={classes.center}>
                            ADD QUESTION
                        </Button></Paper>
                    </Grid>
                </Grid>
                
            </div>
        </>
    )
}

export default Addquestions
