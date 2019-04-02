import React from "react";
import { Link } from "react-router-dom";
import "./styles/main.css";

const Item = ({data}) => {
    return (
        // TODO: Change link
        <Link to="/documents/test" style={{textDecoration: "none", color: "black"}}>
            <div className="item">
                <span className="colored-bar" />
                <h1>{data}</h1>
                <p className="item-content">
                    asjdajisasdjioajoidjaoijdiojadoijaojdspioajdsfpoajsdpofijasiopdfjaoisjfipaosjfpioajspodifjasdfjpaoisjdfpoiasjdfopiajsdiofjaopij
                    asjdajisasdjioajoidjaoijdiojadoijaojdspioajdsfpoajsdpofijasiopdfjaoisjfipaosjfpioajspodifjasdfjpaoisjdfpoiasjdfopiajsdiofjaopij
                    asjdajisasdjioajoidjaoijdiojadoijaojdspioajdsfpoajsdpofijasiopdfjaoisjfipaosjfpioajspodifjasdfjpaoisjdfpoiasjdfopiajsdiofjaopij
                    asjdajisasdjioajoidjaoijdiojadoijaojdspioajdsfpoajsdpofijasiopdfjaoisjfipaosjfpioajspodifjasdfjpaoisjdfpoiasjdfopiajsdiofjaopij
                    asjdajisasdjioajoidjaoijdiojadoijaojdspioajdsfpoajsdpofijasiopdfjaoisjfipaosjfpioajspodifjasdfjpaoisjdfpoiasjdfopiajsdiofjaopij
                    asjdajisasdjioajoidjaoijdiojadoijaojdspioajdsfpoajsdpofijasiopdfjaoisjfipaosjfpioajspodifjasdfjpaoisjdfpoiasjdfopiajsdiofjaopij
                </p>
            </div>
        </Link>
    )
}

export default Item;