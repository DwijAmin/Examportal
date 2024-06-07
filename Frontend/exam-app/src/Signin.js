import React from 'react'

function Signin() {
    const { state } = props.history.location;
    return (
        <div>
            { 
    console.log(state)}
        </div>
    )
}

export default Signin
