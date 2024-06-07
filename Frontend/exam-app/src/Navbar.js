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
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    backgroundColor: "hsl(240, 75%, 10%)",
    height : '40px'
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
  return (
    <div >
        
      <AppBar className={classes.root} position="static">
    
        <Toolbar>
         
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(NavBar);