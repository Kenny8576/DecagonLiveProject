// import React  from "react";

// function Input(prop)
// {
//     return <input className="input" type={prop.type} placeholder={prop.placeholder}/>
    
// }

// export default Input;

// Input.js

import React from "react";

function Input({ type, placeholder, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input placeholder-left ${className}`}
    />
  );
}

export default Input;
