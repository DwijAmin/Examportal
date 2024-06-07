import React, { useState } from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List, Divider,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";
import './App.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "190px"
  },
  roots: {
    width: '80%',
    maxWidth: 300,
    backgroundColor: "LighSteelBlue",
    // position: 'relative',
    overflow: 'auto',
    maxHeight: 500,

    position: 'absolute'




  },
  listSection: {
    backgroundColor: 'inherit',
  },
  grid : {
    minheight: "200px"
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  root: {
    flexGrow: 1, display: 'flex',
    flexWrap: 'wrap',
    padding: 7, width: '690px', margin: "450px", height: "200px", marginLeft: "430px",
    marginTop: "30px", top: '400px',
    left: 8, right: 40,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center', top: "90px", padding: 30, height: "60px",

  },
}));

const UserSidebar = props => {
  const [A, setA] = useState([]);
  const [Quiz, setQuiz] = useState([])
  
  const history = useHistory();
  const redirect_ = (b)=>{
    history.push({pathname: "/User_Quiz", state : b});
  }
  useEffect(() => {
    let logintoken = JSON.parse(localStorage.getItem('login'));
    console.log(logintoken)
    
  const items = JSON.parse(localStorage.getItem('id'));
  console.log(items)

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
  function Ab(states) {
    
  
    
     
      console.log(states);
      let logintoken = JSON.parse(localStorage.getItem('login'));
      console.log(logintoken.token)
      axios.get('http://localhost:8080//question/Cat/' + states, {
        headers: {
          'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${logintoken.token}`
        },
      }
  
      ).then(response => {
        {
  console.log(response.data)
  
  
          // If request is good...
          //  console.log(response.data);
          setQuiz(response.data);
  console.log("hii")
          //
          //console.log(JSON.stringify(response.data.user_role[0].role.rolename));
          // setuserrole(response.data.user_role[0].role.rolename);
          // this.setState({ login: true })
          // this.setState({userrole : JSON.stringify(response.data.user_role[0].role.rolename)})
          //   console.log(this.state.userrole)
  
          // console.log(JSON.stringify(userrole))
  
  
          //   this.props.history.push('/Deshboard')
  
        }
      }
      )
        .catch((error) => {
          console.log('error ' + error);
        });
  
  
  
  
      // this.setstate({ login: true })
  
  
    
  
  
  }
 
  const paperStyle = {

    width: '80%',
    maxWidth: 300,
    backgroundColor: "lightgrey",
    // position: 'relative',
    overflow: 'auto',
    maxHeight: 500,
    left: 20,
    position: 'absolute',
    margin: "40px auto",

  }

  const classes = useStyles();
 
  function Sum(title,id) {
    
    const history = useHistory();
    history.push({pathname:`/UserQuiz`, state : id})
  }
  const itemsList = [

    {
      text: "LogOut",
      icon: <InboxIcon />,
      onClick: () => history.push("/")
    }


  ];

  return (

    <div  >
      <Navbar></Navbar>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='left'>
          <h2 align='center' >MENU</h2>
          <List>
            {A.map((item) => {
              
              return (
                <ListItem button key={item.title} onClick={()=>redirect_(item.cid)}>

                  <ListItemText primary={item.title} />
                  <Divider />
                </ListItem>

              );
            })}
          </List>
          <List>
            {itemsList.map((item, index) => {
              const { text, icon, onClick } = item;
              return (
                <ListItem button key={text} onClick={onClick}>
                 
                  <ListItemText primary={text} />
                  <Divider />
                </ListItem>

              );
            })}
          </List>

        </Grid>
      </Paper>
   
    </div>
  );
};

export default (UserSidebar);