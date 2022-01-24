import React from "react";
import profile from "./profile_photo_1.png";
// import blob from "./blob.png";

export default function Image() {
  return (
      <div className="container col-6 col-md-4" style={{border: "solid red 0px"}}>
          <img className="center" src={profile} alt="my"  style={{ maxHeight:"70vmin", border: "solid red 0px" }} ></img>      
      </div>
  );
}
// <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  // <path fill="#FC9E5A" d="M43.6,-20.2C53.2,-8.4,55.6,12.6,47.2,32.1C38.7,51.6,19.3,69.6,-2.3,71C-23.9,72.3,-47.7,56.8,-61.9,34C-76.1,11.2,-80.5,-18.9,-68.6,-32.1C-56.6,-45.2,-28.3,-41.4,-5.7,-38.1C16.9,-34.8,33.9,-32.1,43.6,-20.2Z" transform="translate(100 100)" />
  // </svg>