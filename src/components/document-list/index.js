import React from "react";
import Item from "./item";

const DocumentList = () => {
    let documents = [];

    for (let i = 0; i < 20; i++) {
        documents.push("document " + (i + 1));
    }

    return (
        <div>
            { documents.map((x, i) => (
                < Item key={i} data={x} />
            ))}
        </div>
    );
}

export default DocumentList;