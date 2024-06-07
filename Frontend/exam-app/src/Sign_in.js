import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Avatar } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import LogOut from './LogOut';
import Deshboard from './Deshboard';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from "react-router-dom";
import axios from 'axios';
import NavBar from './Navbar';
import A from './A';
import App from './App';
import { useHistory } from "react-router-dom";
function Sign_in() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [token, settoken] = useState("");
    const login = () => {
        {
            const postdate = { username, password };
            console.log(postdate)

            /*  fetch("http://localhost:8080/authenticate", {
                  method: 'post',
                  body: JSON.stringify(postdate),
                  headers: {
                      'Content-Type': 'application/json; charset=utf-8'
                  }
              })
              */

            fetch("http://localhost:8080/authenticate", {
                method: 'post',
                body: JSON.stringify(postdate),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            })

                .then((resp) => {
                    //  setredirect("false")
                   // console.log(redirect);
                    //  <Redirect to='/Deshboard'  />
                    console.log(resp);
                  
              // rolebase_redirect(redirect);
                    

                    //  history.push('/Deshboard')
                    resp.json().then((result) => {
                        settoken(result.token);
                       
                      // 
                        localStorage.setItem('login', JSON.stringify({
                            login: true,
                            token: result.token,

                        })
                        )
                      
                   //     getdata( localStorage.getItem('login').token)
                        //  this.setState({ login: true })

                    })

                })

            }
    }
    const paperStyle = {
        padding: 30, height: '65vh', width: 340, margin: "30px auto", backgroundColor: "aliceblue",
    }

    const AvatarStyle = { backgroundColor: "blue" }
    const GridStyle = { backgroundColor: "midnightblue" }
    return (

        <div>
            <A />
            <NavBar></NavBar>
            <Grid  >
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={GridStyle} >
                            <LockTwoToneIcon />
                        </Avatar>
                        <div>
                            <h1>Sign In</h1>
                        </div>
                        <br></br>
                        <div>
                            <TextField id="outlined-basic" label="UserName" variant="outlined" required fullWidth onChange={(event) => { setusername(event.target.value) }} />

                        </div>
                        <br></br>
                        <div>
                            <TextField id="outlined-basic" label="Password" variant="outlined" required fullWidth onChange={(event) => { setpassword(event.target.value) }} />

                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div>
                            <Button variant="contained" color="primary" onClick={login} >

                                SignIn
                            </Button>
                            <div>{token}</div>
                        </div>

                    </Grid>

                </Paper>
            </Grid>
        </div>
    )
}


export default Sign_in
