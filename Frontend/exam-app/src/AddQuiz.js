import React from 'react'
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import A from './A';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 30, height: '75vh', width: 340, margin: "20px auto",
        marginTop: -10,

    },
    margin: {
        margin: theme.spacing(2),
        width: 600
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '20ch'
    },

}));
function AddQuiz() {
    const classes = useStyles();
    let select = "";
    const [category, setcategory] = useState([])
    const [categories, setcategorys] = useState(0);
    const [title, settitle] = useState("")
    const [ description, setdescription] = useState("")
    const [ maxmarks, setmaxmarks] = useState(0)
    const [numberofquestion, setnumberofquestion] = useState(0)
   
    

const handleChange = (e)=>{
console.log(e.target.value)
select = e.target.value;

}
    useEffect(() => {


        //  const { state } = props.history.location;
        // console.log(state);
        let logintoken = JSON.parse(localStorage.getItem('login'));
        console.log(logintoken.token)
        axios.get('http://localhost:8080/Category/allcategories', {
            headers: {
                'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${logintoken.token}`
            },
        }

        ).then(response => {
            {
                setcategory(response.data);
                console.log(response.data)

            }
        }
        )
            .catch((error) => {
                console.log('error ' + error);
            });


    }, [])
   
    const add_quiz = () => {
        //  const { state } = props.history.location;
     console.log(categories)
     category.map((e)=>{
         console.log(e)
     })
        let logintoken = JSON.parse(localStorage.getItem('login'));
        console.log(logintoken.token)
        axios({
            method: 'post',
            url: 'http://localhost:8080/Quiz/',
            headers: {
                'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${logintoken.token}`,

            },
            data: { "category": {
                cid: categories
            },
            "title": title,
            "description": description,
            "maxmarks": maxmarks,
            "numberofquestion": numberofquestion
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
   /* const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    */
    const paperStyle = {
        padding: 10, height: '80vh', maxwidth: 1000, marginTop: "2px ", backgroundColor: "aliceblue", top: -20
    }

    const AvatarStyle = { backgroundColor: "blue" }
    const GridStyle = { backgroundColor: "midnightblue" }

    return (
        <>
            <A />

            <div className={classes.root}>
                <div>

                    <Grid  >
                        <Paper elevation={10} style={paperStyle}>
                            <Grid align='center'>


                                <h3>ADD QUIZ</h3>

                                <FormControl fullWidth className={classes.margin} variant="outlined" >
                                    <InputLabel htmlFor="outlined-adornment-amount"  >Title</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        value={title} onChange={(e) => settitle(e.target.value)}
                                        labelWidth={60}

                                    />
                                    <br></br>
                                    <TextField id="outlined-basic" value={maxmarks} onChange={e => setmaxmarks(e.target.value)} label="Maximum Marks" variant="outlined"  />
                                    <br></br>
                                    <TextField id="outlined-basic" label="Number of Question" value={numberofquestion} onChange={e => setnumberofquestion(e.target.value)} variant="outlined" />

                                    <br></br>
                                    <textarea rows={3} value={description} onChange={e => setdescription(e.target.value)} placeholder=
                                        "Discription" backgroundColor="aliceblue"></textarea>
                                    <br></br>
                                    <select name="country"  onClick ={(e)=> setcategorys(e.target.value)}  value={category}>
                                        {category.map((e, key) => {
                                            return <option key={key} value={e.cid}>{e.title}</option>;
                                        })}
                                    </select>
                                </FormControl>


                                <br></br>
                                <Button variant="contained" color="primary" onClick={() => add_quiz()}>
                                    ADD QUIZ
                                </Button>
                            </Grid>
                        </Paper >
                    </Grid>
                </div>

            </div>
        </>
    );
}
export default AddQuiz
