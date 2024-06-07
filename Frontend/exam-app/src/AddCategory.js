import React, { useState } from 'react'
import A from './A';
import clsx from 'clsx';
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
        padding: 30, height: '65vh', width: 340, margin: "30px auto",
        marginTop: -10,
    },
    margin: {
        margin: theme.spacing(6),
        width: 600
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '50ch'
    },

}));
function AddCategory() {
    const classes = useStyles();
   const [values, setvalues] = useState({
    title:'',
    description :''
   })

    const add = () => {
        //  const { state } = props.history.location;
        console.log(values);
        let logintoken = JSON.parse(localStorage.getItem('login'));
        console.log(logintoken.token)
        axios({
            method: 'post',
            url: 'http://localhost:8080/Category/',
            headers: {
                'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${logintoken.token}`,

            },
            data: values
        }).then(response => {

            //    setQuiz(response.data);
            console.log(response)


        }
        )
            .catch((error) => {
                console.log('error ' + error);
            });



    }

    const handleClickShowPassword = () => {
        setvalues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const paperStyle = {
        padding: 20, height: '70vh', width: 700, margin: "2px ", backgroundColor: "aliceblue",
    }

    const AvatarStyle = { backgroundColor: "blue" }
    const GridStyle = { backgroundColor: "midnightblue" }

    return (
        <>
            <A />

            <div className={classes.root}>
                <div>
                    <Grid  >

                        <Paper elevation={20} style={paperStyle}>
                            <Grid align='center'>


                                <h3>ADD CATEGORY</h3>

                                <FormControl fullWidth className={classes.margin} variant="outlined" >
                                    <InputLabel htmlFor="outlined-adornment-amount" >Title</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        value={values.title} onChange={e => setvalues({title : e.target.value})}
                                        labelWidth={60}


                                    />
                                    <br></br>
                                    <textarea rows={10} placeholder=
                                        "Discription"
                                        value={values.description} onChange={e => setvalues({description : e.target.value})}
                                     
                                        className={classes.textareas}></textarea>

                                </FormControl>
                                <Button variant="contained" color="primary" onClick={() => add()}>
                                    SignIn
                                </Button>
                            </Grid>
                        </Paper >
                    </Grid>
                </div>

            </div>
        </>
    );
}

export default AddCategory

