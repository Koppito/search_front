import React from "react";
import { Link } from "react-router-dom";

const Item = ({data}) => {
    return (
        <div>
            <Link to="/document">
                <h1>{data}</h1>
            </Link>
        </div>
    )
}

export default Item;