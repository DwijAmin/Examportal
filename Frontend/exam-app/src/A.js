import React from "react";
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

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Navbar from "./Navbar";
const useStyles = makeStyles({
  drawer: {
    width: "190px"
  },
  root: {
    width: '80%',
    maxWidth: 300,
    backgroundColor: "lightgrey",
    // position: 'relative',
    overflow: 'auto',
    maxHeight: 500,

    position: 'absolute'




  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  }
});

const A = props => {
  const { history } = props;
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
  const itemsList = [

    {
      text: "Category",
      icon: <InboxIcon />,
      onClick: () => history.push("/Category")
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
      onClick: () => history.push("/")
    }


  ];
  return (
    <>
 <Navbar />
    <Grid  >
      <Paper elevation={20} style={paperStyle}>
        <Grid align='left'>
          <h2 align='center'>DETAILS</h2>
          <List>
            {itemsList.map((item, index) => {
              const { text, icon, onClick } = item;
              return (
                <ListItem button key={text} onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                  <Divider />
                </ListItem>

              );
            })}
          </List>

        </Grid>
      </Paper>
    </Grid>
    </>
  );
};

export default withRouter(A);