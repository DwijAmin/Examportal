import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import A from './A';
import { useEffect } from 'react';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        padding: 5, height: '45vh', width: 500, margin: "30px auto",
        marginTop: '10px', marginLeft : '490px'

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
function UpdateQuestion(props) {
    const classes = useStyles();
    const [a, seta] = useState([])
    const [title, settitle] = useState("")
    const [option1, setoption1] = useState(0)
    const [option2, setoption2] = useState(0)
    const [option3, setoption3] = useState(0)
    const [option4, setoption4] = useState(0)
    const [marks, setmarks] = useState(0)
    const [answer, setanswer] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()
      //  event.preventDefault();
    const data = new FormData(e.target);

    console.log(data.get("Question"));
    }
    
    const { state } = props.history.location;
    console.log(state);
    const submit = () =>{
        let logintoken = JSON.parse(localStorage.getItem('login'));
        console.log(logintoken.token)
        axios.put('http://localhost:8080/question/put', {
            headers: {
                'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${logintoken.token}`
            },
            data : {
                "quiz": {
                    "qid": 55
                },
                "image": "kkk",
                "option1": option1,
                "option2": option2,
                "option3": option3,
                "option4": option4,
                "answer": answer,
                "marks": marks,
                "content": title,
                "qid": 105
            }
        }

        ).then(response => {
           // console.log(response.data.content)
            
            console.log(response.data)
        }
        )
            .catch((error) => {
                console.log('done');
            });


    }
    useEffect(() => {
        let logintoken = JSON.parse(localStorage.getItem('login'));
        console.log(logintoken.token)
        axios.get('http://localhost:8080/question/Cat/'+state, {
            headers: {
                'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${logintoken.token}`
            },
        }

        ).then(response => {
            console.log(response.data[0])
            seta(response.data)
         /*   setQuestion({
                "content": response.data.content,
                "answer": response.data.answer,
                "image": "",
                "marks": response.data.marks ,
                 "option1": response.data.option1,
                "option2": response.data.option2,
                "option3": response.data.option3,
                "option4": response.data.option4
            });
            */
                settitle(response.data[0].content)
                setanswer(response.data[0].answer)
                setmarks(response.data[0].marks)
                setoption1(response.data[0].option1)
                setoption2(response.data[0].option2)
                setoption3(response.data[0].option3)
                setoption4(response.data[0].option4)
                
            console.log(response.data)
        }
        )
            .catch((error) => {
                console.log('error ' + error);
            });


    }, [])
    console.log(a)

    return (
        <>
       <A/>
        <div className={classes.root}>
            {
                a.map((e)=>(  
                    <form onSubmit={(e)=>handleSubmit(e)}>

                 
                     <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <h4 textAlign="center">UPDATE QUESTION</h4> </Paper>
                    </Grid>
    
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
    
                            <TextField className={classes.roots} id="standard-basic" label={e.content} name = "Question" onChange = {e => settitle(e.target.value)}   />  </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} ><TextField className={classes.xs3} id="standard-basic" label="Option 1" value={option1} onChange={e => setoption1(e.target.value)} /></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}><TextField className={classes.xs3} id="standard-basic" label="Option 2" value={option2} onChange={e => setoption2(e.target.value)}  /></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}><TextField className={classes.xs3} id="standard-basic" label="Option 3"  value={option3} onChange={e => setoption3(e.target.value)}  /></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}><TextField className={classes.xs3} id="standard-basic" label="Option 4" value={option4} onChange={e => setoption4(e.target.value)} /></Paper>
                    </Grid>
    
                    <Grid item xs={3}>
                        <Paper className={classes.paper}><TextField className={classes.xs3} id="standard-basic" label="Marks" value={marks} onChange={e => setmarks( e.target.value)}  /></Paper>
                    </Grid><br></br>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}><TextField className={classes.xs3} id="standard-basic" label="Correct Answer" value={answer} onChange={e => setanswer( e.target.value)} /></Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}><Button variant="outlined" color="primary" className={classes.center} onClick={()=>submit()}>
                            UPDATE QUESTION
                        </Button></Paper>
                    </Grid>
                  
                </Grid>
                </form>
                )

                )
            }
         
        </div>
        </>
    )
}
export default UpdateQuestion
