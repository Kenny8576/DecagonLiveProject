import React from "react";
import 'boxicons' 



function GoogleSignUp (prop){
    return <button className="google-btn" type={prop.text}>
          <box-icon type='logo' name='google'></box-icon>
      {prop.placeholder}
    </button>
}

function RegisterSignup(prop){
    return <button className="btn" type={prop.type}>{prop.text}</button>
}


export {GoogleSignUp, RegisterSignup};