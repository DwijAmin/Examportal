import React from 'react'
import { BrowserRouter , Route, Link , Switch, Redirect } from "react-router-dom";
import NavBar from './Navbar';
import ReactDOM from 'react-dom';
import Login from './Login';
import {  makeStyles } from '@material-ui/core/styles'
import A from './A';
import { AppBar } from '@material-ui/core';
import Quiz from './Quiz';
import Profile from './Profile';
import Category from './Category';
import AddCategory from './AddCategory';
import AddQuiz from './AddQuiz';
import LogOut from './LogOut';
import UpdateQuiz from './UpdateQuiz';
import Addquestions from './Addquestions';
import './App.css';
import UpdateQuestion from './UpdateQuestion';
import GetQuiz_Question from './GetQuiz_Question';
import { withRouter } from "react-router-dom";
function Deshboard(props) {
    return (
        <div className="App" >
           
    
      <A/>
     
    


        
      
      

        </div>
    )
}

export default Deshboard
