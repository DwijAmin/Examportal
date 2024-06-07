import React from 'react'
import clsx from 'clsx';
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
import A from './A';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 30, height: '75vh', width: 340, margin: "20px auto",
        marginTop: 2,
        top:-2
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
function UpdateQuiz(props) {
    const {state} = props.history.location;
    console.log(state.name);
    const classes = useStyles();
    const [values, setValues] = React.useState({
        title: '',
        discription: '',

    });



    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const paperStyle = {
        padding: 10, height: '80vh', maxwidth: 1000, marginTop: "2px ", backgroundColor: "aliceblue",top :-20
    }

    const AvatarStyle = { backgroundColor: "blue" }
    const GridStyle = { backgroundColor: "midnightblue" }

    return (
        <>
        <A/>
        <div className={classes.root}>
         
            <div>
                <Grid  >
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>


                            <h3>UPDATE QUIZ</h3>

                            <FormControl fullWidth className={classes.margin} variant="outlined" >
                                <InputLabel htmlFor="outlined-adornment-amount" align ="Right" >Title</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value="hii"
                                    
                                    labelWidth={60}

                                />
                                <br></br>
                                <TextField id="outlined-basic" label="Maxmimum Marks" variant="outlined" value="Maxmimum Marks"/>
                                <br></br>
                                <TextField id="outlined-basic" label="Number of Question" variant="outlined" value="Number of Question"/>

                                <br></br>
                                <textarea rows={3} placeholder=
                                    "Discription"  backgroundColor="aliceblue"></textarea>
                                    <br></br>
                                <select id="dropdown" maxManuHeight={20}>
                                    <option value="N/A">Category</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                <Button variant="contained" color="primary" onClick={() => { this.login() }}>
                                Update QUIZ
                            </Button>
                            </FormControl>
                            
                        </Grid>
                    </Paper >
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>


                            <h3>UPDATE QUIZ</h3>

                            <FormControl fullWidth className={classes.margin} variant="outlined" >
                                <InputLabel htmlFor="outlined-adornment-amount" align ="Right" >Title</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value="hii"
                                    
                                    labelWidth={60}

                                />
                                <br></br>
                                <TextField id="outlined-basic" label="Maxmimum Marks" variant="outlined" value="Maxmimum Marks"/>
                                <br></br>
                                <TextField id="outlined-basic" label="Number of Question" variant="outlined" value="Number of Question"/>

                                <br></br>
                                <textarea rows={3} placeholder=
                                    "Discription"  backgroundColor="aliceblue"></textarea>
                                    <br></br>
                                <select id="dropdown" maxManuHeight={20}>
                                    <option value="N/A">Category</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                <Button variant="contained" color="primary" onClick={() => { this.login() }}>
                                Update QUIZ
                            </Button>
                            </FormControl>
                            
                        </Grid>
                    </Paper >
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>


                            <h3>UPDATE QUIZ</h3>

                            <FormControl fullWidth className={classes.margin} variant="outlined" >
                                <InputLabel htmlFor="outlined-adornment-amount" align ="Right" >Title</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value="hii"
                                    
                                    labelWidth={60}

                                />
                                <br></br>
                                <TextField id="outlined-basic" label="Maxmimum Marks" variant="outlined" value="Maxmimum Marks"/>
                                <br></br>
                                <TextField id="outlined-basic" label="Number of Question" variant="outlined" value="Number of Question"/>

                                <br></br>
                                <textarea rows={3} placeholder=
                                    "Discription"  backgroundColor="aliceblue"></textarea>
                                    <br></br>
                                <select id="dropdown" maxManuHeight={20}>
                                    <option value="N/A">Category</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                <Button variant="contained" color="primary" onClick={() => { this.login() }}>
                                Update QUIZ
                            </Button>
                            </FormControl>
                            
                        </Grid>
                    </Paper >
                </Grid>
            </div>

        </div>
        </>
    );
}
export default UpdateQuiz
