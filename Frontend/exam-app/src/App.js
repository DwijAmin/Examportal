import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Link, Switch, Redirect} from "react-router-dom";
import NavBar from './Navbar';
import ReactDOM from 'react-dom';
import Login from './Login';
import { makeStyles } from '@material-ui/core/styles'
import A from './A';
import {IndexRoute, Route} from 'react-router';
import { AppBar } from '@material-ui/core';
import Quiz from './Quiz';
import Profile from './Profile';
import Category from './Category';
import AddCategory from './AddCategory';
import AddQuiz from './AddQuiz';
import LogOut from './LogOut';
import UpdateQuiz from './UpdateQuiz';
import Addquestions from './Addquestions';
import UpdateQuestion from './UpdateQuestion';
import GetQuiz_Question from './GetQuiz_Question';
import Deshboard from './Deshboard';
import UserDeshboard from './UserDeshboard';
import Logins from './Logins';
import Sign_in from './Sign_in';
import ShowQuestions from './ShowQuestions';
import UserQuizategory from './UserQuizategory';
import UserSidebar from './UserSidebar';
import B from './B';
import User_Quiz from './User_Quiz';
import Start_Quiz from './Start_Quiz';
import Navbar from './Navbar';
function App(props) {
  // localStorage.removeItem('rolename');
  //let userrole = JSON.parse(localStorage.getItem('rolename'));
  //let logintoken = JSON.parse(localStorage.getItem('login'));
  //console.log(logintoken.token);
  //console.log(userrole.userrole)




  return (
    <div className="App"   >
     
      <BrowserRouter>
      
      
      
     
      <Switch>
        
      <Route exact path="/ShowQuestions" component={ShowQuestions}  />
         
      <Route exact path="/B" component={B}  />
       
      <Route exact path="/User_Quiz" component={User_Quiz}  />
      <Route exact path="/Start_Quiz" component={Start_Quiz}  />
      
      <Route exact path="/UserQuizategory" component={UserQuizategory}  />
      <Route exact path="/UpdateQuiz" component={UpdateQuiz}  />
      <Route exact path="/" component={Login}  />
      <Route exact path="/Deshboard" component={Deshboard} />
      <Route exact path="/Quiz" component={Quiz} />
      <Route exact path="/Category" component={Category} />
      <Route exact path="/LogOut" component={LogOut} />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/UserDeshboard" component={UserDeshboard} />
      <Route exact path="/UserSidebar" component={UserSidebar} />
      <Route exact path="/Addquestions" component={Addquestions} />
      <Route exact path="/UpdateQuestion" component={ UpdateQuestion} />
      <Route exact path="/GetQuiz_Question" component={GetQuiz_Question} />
      <Route exact path="/AddQuiz" component={AddQuiz} />

      <Route exact path="/AddCategory" component={AddCategory} />

     
      
        </Switch>
     


        
      </BrowserRouter>
      

    </div>


  );

}


export default App;
