import React, { useState } from 'react'
import Navbar from './Navbar';
import { useEffect } from 'react';
import UserSidebar from './UserSidebar';
import './User_Quiz.css'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
function User_Quiz(props) {
    const { state } = props.history.location;
    const [first, setfirst] = useState([])
    console.log(state);
    
    useEffect(() => {


        //  const { state } = props.history.location;
        // console.log(state);
        let logintoken = JSON.parse(localStorage.getItem('login'));
        let logintoken_ = JSON.parse(localStorage.getItem('id'));
        console.log(logintoken_)
        axios.get('http://localhost:8080/Quiz/Cat/'+state, {
            headers: {
                'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${logintoken.token}`
            },
        }

        ).then(response => {
            
               setfirst(response.data);
                console.log(response.data)

            
        }
        )
            .catch((error) => {
                console.log('error ' + error);
            });


    }, [])
    const history = useHistory();
    const handle = (b) =>{

        console.log(first)
        history.push({pathname: "/Start_Quiz", state : b});
    }
    return (
        <>
        <UserSidebar></UserSidebar>
            <div className="data">
               {
                   first.map((e)=>(
                    <div className="info">
                    <h1 style={{ color: "grey", marginTop: "-26px", marginLeft: "-13px" }}>{e.title}</h1>
                    <h1 style={{ color: "black", marginTop: "5px", marginLeft: "-13px" }}>{e.description}</h1>
                    <Button variant="outlined" color="primary"  onClick={()=>handle(e.qid)}>
                            START QUIZ
                        </Button>
                </div>
                   ))
               }
               
               
            </div>
        </>
    )
}

export default User_Quiz