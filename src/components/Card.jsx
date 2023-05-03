import React from "react";

import Info from  "./Info";
import Avatar from "./Avatar";


function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <Avatar  src={props.img}/>
            </div>
            <div className="bottom">
                <Info info={props.tel}/>
                <Info info={props.email}/>
            </div>
        </div>
    );
}

export default Card;
