import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useEffect } from 'react';
import A from './A';
import axios from 'axios';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
       padding: 30 , height: '65vh', width: 340, margin: "30px auto",marginTop:"30px"
    },
  }));
  
  
function Category(props) {
  const classes = useStyles();
  const [Quiz, setQuiz] = useState([])

  
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
          setQuiz(response.data);
  console.log(response.data)
 
        }
      }
      )
        .catch((error) => {
          console.log('error ' + error);
        });
    
     
   }, [])
  
    return (
      <>
      <A />
        <List component="nav" className={classes.root} aria-label="mailbox folders">
     
        {
            Quiz.map((e)=>(
              <>
                <ListItem >
              <ListItemText primary={e.title} />
             
            </ListItem>
             <Divider></Divider>
              </>
            
         
            ))
          }
     
     
      
  
      </List>
     </>
    );
     
    
}

export default Category
