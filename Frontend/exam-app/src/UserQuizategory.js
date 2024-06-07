import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar';
import A from './A';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import UserSidebar from './UserSidebar';
import { colors } from '@material-ui/core';
import UserNavbar from './UserNavbar';
const useStyles = makeStyles((theme) => ({
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


function UserQuizategory(props) {
  const classes = useStyles();
  const [Quiz, setQuiz] = useState([])
  const { state } = props.history.location;
 useEffect(() => {
   
  {
    const { state } = props.history.location;
    console.log(state);
    let logintoken = JSON.parse(localStorage.getItem('login'));
    console.log(logintoken.token)
    axios.get('http://localhost:8080/Cat/' + state, {
      headers: {
        'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${logintoken.token}`
      },
    }

    ).then(response => {
      {



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
   
 }, [])

  console.log(Quiz)

console.log(Quiz)


  return (
  
    <>
  
      <div className={classes.root}>
        <Grid container spacing={2}>

          <Grid container item xs={12} spacing={2}>

            <React.Fragment>
              {Quiz.map((item) => {
                return (
                  <Grid  item xs={6}>

                    <Paper className={classes.paper}>
                    <p2>{item.title}</p2><br /> < br />
                      <Button>Primary</Button>
                      <Button disabled>Disabled</Button>
                      <Button href="#text-buttons">Link</Button>
                    </Paper>

                  </Grid>
                );
              })}

            </React.Fragment>
          </Grid>
        </Grid>
      </div>


    </>
  );

}

export default UserQuizategory
