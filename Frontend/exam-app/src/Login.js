import React, { Component, PureComponent } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Avatar } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Deshboard from './Deshboard';
import {  Link , Switch, Redirect ,  withRouter } from "react-router-dom";
import axios from 'axios';
import NavBar from './Navbar';
import { createHashHistory } from 'history'
import UserSidebar from './UserSidebar';
export class Login extends PureComponent {
    
  
  
    constructor() {
        super();
        this.state = {
            username: null,
            password: null,
            login: false,
            token: null,
            store: null, userrole: null

        }
    }

     name(params) {
        
    }
   
    
    //eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkd2lqIiwiZXhwIjoxNjMwNTcwMjg3LCJpYXQiOjE2MzA1MzQyODd9.6P101J-xyYrhSb3k0yJuRfSZpOHjz1B4T7fTFKbtItw"
   
        login = () =>{
            
            fetch("http://localhost:8080/authenticate", {
                method: 'post',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }).then((resp) => {
               // <Redirect to='/Deshboard'  />
              
              
               
              
               // this.props.history.push('/Deshboard')
                resp.json().then((result) => {
                    console.log(result);
                   
                    localStorage.setItem('login', JSON.stringify({
                        login: true,
                        token: result.token,
    
                    })
                    )
                   
    
                    this.setState({ login: true })
                    this.setState({token : (result.token)})
                    console.log("Bearer " +this.state.token)
    
                })
                
            })  
            let logintoken = JSON.parse(localStorage.getItem('login'));
            axios.get('http://localhost:8080/user/'+this.state.username,  {
               
                headers: {
                    'Content-Type': 'application/json','Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${logintoken.token}`
                },      
            }
          
                    ).then(response => {
                        // If request is good...
                        console.log(response.data.id);
                        console.log(response.data);
                         const  b = JSON.stringify(response.data.user_role[0].role.rolename);
                        // setRole(b)
                       // this.setState({ login: true })
                        this.setState({userrole : JSON.stringify(response.data.user_role[0].role.rolename)})
                        console.log(this.state.userrole)
                       const userroles = this.state.userrole;
                       this.rolebase_redirect(userroles);
                       console.log(response.data.user_role[0].role.id)
                     //   rolebase_redirect(userroles)
                        localStorage.setItem('rolename', JSON.stringify({
                           
                            userrole : response.data.user_role[0].role.rolename
                        }))
                        localStorage.setItem('id', JSON.stringify({
                           
                            id : response.data.id
                        }))
                     //   this.props.history.push('/Deshboard')
                     
                    })  
                    .catch((error) => {
                        console.log('error ' + error);
                    });

                  
                       
                    

                    
                }
               
         
               rolebase_redirect = (userroles) => {
                   console.log("hii"+userroles)
                   let a = userroles
                   a ='Normal' ? this.props.history.push("/UserSidebar") : this.props.history.push("/Deshboard");
                        
                       
                    }
                    
            
                

    render() {
        const paperStyle = {
         top:85,   position:"absolute",padding: 30, height: '65vh', width: 340, margin: "30px auto", backgroundColor: "aliceblue",left:'750px'
        }
         const history = createHashHistory()
        const AvatarStyle = { backgroundColor: "blue" }
        const GridStyle = { backgroundColor: "midnightblue" }
        return (

            <div>
              
             
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
                                <TextField id="outlined-basic" label="UserName" variant="outlined" required fullWidth onChange={(event) => { this.setState({ username: event.target.value }) }} />

                            </div>
                            <br></br>
                            <div>
                                <TextField id="outlined-basic" label="Password" variant="outlined" required fullWidth onChange={(event) => { this.setState({ password: event.target.value }) }} />

                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div>
                                <Button variant="contained" color="primary" onClick={() => { this.login() }}>
                               
                                
                                    SignIn
                                </Button>
                                
                            </div>

                        </Grid>

                    </Paper>
                </Grid>
            </div>
        )

    }
}

export default withRouter(Login)
