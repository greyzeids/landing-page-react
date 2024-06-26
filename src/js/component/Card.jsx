import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.imgSrc} className="card-img-top fixed-height-img" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} className="btn btn-primary">
                    {props.button}
                </a>
            </div>
        </div>
    );
};

export default Card;
