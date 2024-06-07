import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar';
import A from './A';
import UserSidebar from './UserSidebar';
import UserQuizategory from './UserQuizategory';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, display: 'flex',
        flexWrap: 'wrap',
        padding: 7, width: '690px', margin: "450px",height:"200px",marginLeft:"430px",
        marginTop: "30px",top:'400px',
        left: 8,right:40,
      },
      paper: {
        padding: theme.spacing(4),
        textAlign: 'center',top:"90px",padding: 30,height:"60px",
        
      },
    }));
function UserDeshboard() {
    const classes = useStyles();

   
    
      return (
          <>
           <Navbar></Navbar>
           
    
        
       <UserSidebar></UserSidebar>
        
       
        </>
      );
    }

export default UserDeshboard
