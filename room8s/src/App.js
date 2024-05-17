import React from "react";
import Signup from "./components/Singnup";



var isSingnedUp = false;


function App() {
  return (
    <div>
      {/* isSingnedUp ? <Signup /> : <login /> */}
      <Signup />
    </div>
  );
}


export default App;
