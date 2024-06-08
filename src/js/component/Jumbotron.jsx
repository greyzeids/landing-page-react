import React from "react";

const Jumbotron = (props) => {
    const jumbotronStyle = {
        backgroundImage: `url(${props.imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div className="p-5 text-white rounded-2" style={jumbotronStyle}>
            <div className="row position-relative">
                {" "}
                <div className="col-md-12">
                    <h1 className="display-5 fw-bold">{props.title}</h1>
                </div>
                <div className="col-md-8">
                    <p className="fs-4">{props.description}</p>
                </div>
                <div className="col-md-12">
                    <a href={props.link} className="btn btn-primary">
                        {props.button}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;
