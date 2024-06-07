import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from "react";
import './App.css';
import axios from 'axios';
import UserQuizategory from './UserQuizategory';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    backgroundColor: "SlateGray"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

 function NavBar(props) {
  const { history } = props;
  const classes = useStyles();
  const [A, setA] = useState([]);
  useEffect(() => {
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


        setA(response.data);
        // If request is good...
        console.log((response.data))
        //
        //console.log(JSON.stringify(response.data.user_role[0].role.rolename));
        // setuserrole(response.data.user_role[0].role.rolename);
        // this.setState({ login: true })
        // this.setState({userrole : JSON.stringify(response.data.user_role[0].role.rolename)})
        //   console.log(this.state.userrole)

        //  console.log(JSON.stringify(userrole))

        /*localStorage.setItem('rolename', JSON.stringify({
 
            userrole: response.data.user_role[0].role.rolename
        }))
        //   this.props.history.push('/Deshboard')
        rolebase_redirect();
        */
      }
    }
    )
      .catch((error) => {
        console.log('error ' + error);
      });



  }, [])
  const itemsList = [

    {
      text: "Category",
      icon: <InboxIcon />,
      onClick: () => history.push("/Category")
    },
    {
      text: "Profile",
      icon: <InboxIcon />,
      onClick: () => history.push("/profile")
    },

    {
      text: "Quiz",
      icon: <InboxIcon />,
      onClick: () => history.push("/Quiz")
    },

    {
      text: "AddQuiz",
      icon: <InboxIcon />,
      onClick: () => history.push("/AddQuiz")
    },
    {
      text: "AddCategory",
      icon: <InboxIcon />,
      onClick: () => history.push("/AddCategory")
    }
    ,
    {
      text: "LogOut",
      icon: <InboxIcon />,
      onClick: () => history.push("/UserSidebar")
    }


  ];
  
  function Sum(title,id) {
    console.log(id)
    history.push({pathname:`/UserQuizategory`, state : id})
  }
  return (
    <>
   
    <div className={classes.root}>
      <AppBar className={classes.root} position="static">
        <Toolbar>
        {A.map((item) => {
             // const { text, icon, onClick } = item;
              return (
                <button label={item.title} key={item.cid} onClick={() =>{Sum(item.title,item.cid)}}>
                
                {item.title}
                </button>

              );
            })}
          
        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}
export default withRouter(NavBar);