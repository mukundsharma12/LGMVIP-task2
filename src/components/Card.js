import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">
            {props.fname} {props.lname}
          </h2>

          <img className="circle-img" src={props.avatar} alt="avatar_img" />
        </div>
        <div className="bottom">
          <div className="info">
            <h3>About Me :</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h3>Email :</h3>
            <p>{props.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
