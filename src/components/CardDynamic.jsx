import React from "react";

const CardDynamic = (props) => {

    return(
        <div className="card">
            <h2>{props.heading}</h2>
            <div>
                <p>{props.description}</p>
                <a href="ssps.cz">{props.link}</a>
            </div>
        </div>
    )
}

export default CardDynamic;