import React from "react";
import Typed from "react-typed";
function Text() {
  const intro = "I am ";
  return (
    <div
    className="col-12 col-md-8"
      style={{whiteSpace: "break-spaces",border:"solid red 0px" }}
    >
      <div className="container">
        
      <p style={{fontSize:"2em"}}>Hello!</p>
      
      <p style={{fontSize:"2.5em"}}><b>Chintan Here,</b></p>
      
      <p style={{fontSize:"1.5em"}}>
        {intro}
        <Typed
          strings={["student.", "sofware developer.", "researcher."]}
          typeSpeed={50}

          loop={true}
        ></Typed>
        
      </p>
      </div>
    </div>
  );
}

export default Text;
