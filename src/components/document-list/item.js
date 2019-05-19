import React from "react";
import { Link } from "react-router-dom";
import "./styles/main.css";

const Item = ({data}) => {
    return (
        <Link to={"/documents/"+data.id} style={{textDecoration: "none", color: "black"}}>
            <div className="item">
                <span className="colored-bar" />
                <h1>{data.id}</h1>
                <p className="item-content">
                    {data.text}
                </p>
            </div>
        </Link>
    )
}

export default Item;