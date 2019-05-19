import React from "react";
import Item from "./item";

const DocumentList = ({documents}) => {
    return (
        <div>
            { documents ? documents.map((x, i) => (
                < Item key={i} data={x} />
            )) : ""}
        </div>
    );
}

export default DocumentList;