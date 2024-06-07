import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import A from './A';
import axios from 'axios';

import Paper from '@material-ui/core/Paper';
import './App.css';

const useStyles = makeStyles({
    root: {
      Width: 345,
      alignItems: "center",
     justifyContent : "center"
    
    },
    media: {
      height: 250,
      
      alignItems:"center",
      justifyContent : "center"
    },
  });
 
  const logins = ()  => {
         
   
      let header= new Headers();
      header.append('Content-Type', 'application/json');
      header.append('Accept', 'application/json');
    
      header.append('Access-Control-Allow-Origin', '*');
      header.append('Access-Control-Allow-Credentials', 'include');
     
    
      header.append('mode','cors');
     // header.append('credentials','');
       
      header.append('Authorization', 'Bearer' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkd2lqIiwiZXhwIjoxNjMwNTcwMjg3LCJpYXQiOjE2MzA1MzQyODd9.6P101J-xyYrhSb3k0yJuRfSZpOHjz1B4T7fTFKbtItw');
          
      axios.get('http://localhost:8080/user/dwij',  {
          headers: {
              'Content-Type': 'application/json','Access-Control-Allow-Origin': '*',
              'Authorization': 'Bearer '+'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkd2lqIiwiZXhwIjoxNjMwNjIxNzg2LCJpYXQiOjE2MzA1ODU3ODZ9.T3IkvQramAikBVrMcvfCRXVykf4jCgpoUTAvokTtSm0'
          },      
      }
              ).then(response => {
                  // If request is good...
                  console.log(response.data);
              })
              .catch((error) => {
                  console.log('error ' + error);
              });
          }
  function Profile() {
    const classes = useStyles();
    const paperStyle = {
        padding: 18 , height: '75vh', width: 370, margin: "42px auto", backgroundColor: "aliceblue",
    }
    
    return (
        < >
         <A />

             <Paper elevation={10} style={paperStyle}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary" onClick={logins}>
              Learn More
            </Button>
          </CardActions>
        </Card>
        </Paper>
        </>
      );
  }


  export default Profile;