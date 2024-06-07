import React from 'react'
import { useHistory } from 'react-router-dom';
import { History } from 'history';

import A from './A';

localStorage.removeItem('rolename');
// console.log(consol.token);
function LogOut(props) {

    
   
    return (
        <div>
           <h1> Logout </h1> 
           <button onClick ={()=> localStorage.removeItem('rolename')}> button</button>
        </div>
    )
}

export default LogOut
