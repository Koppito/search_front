import React, { Component } from "react";
import "./styles/main.css"

class NotFound extends Component {
    render() {
        let gifs = [
            "https://media1.tenor.com/images/a828888852e708d9afaaad06c7f9513f/tenor.gif?itemid=10251428",
            "https://media1.tenor.com/images/6307b147cf0fe46e0301546e6d899204/tenor.gif?itemid=5795307",
            "https://media1.tenor.com/images/8a40d7ff9079cbedea85029121e9e3d0/tenor.gif?itemid=8006360",
            "https://media.giphy.com/media/gKsJUddjnpPG0/giphy.gif",
            "https://media.tenor.com/images/c1bf39cca74afeddee2e0f4408a45c74/tenor.gif",            
        ]
        let rand = gifs[Math.floor(Math.random() * gifs.length)];

        return (
            <div className="center">
                <div style={{maxWidth: 200}}>
                    <div style={{display: "block", textAlign: "center", marginBottom: 50}}>
                        <h1 style={{ color: "#ff7f50" }}>404</h1>
                        <h2>No encontramos la pagina :(</h2>
                    </div>
                    
                    <div style={{display: "block", textAlign: "center", width: "100%"}}>
                        <img
                            src={rand}
                            style={{
                                width: 300,
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;