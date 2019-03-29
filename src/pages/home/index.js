import React, {Component} from "react";
import "./styles/main.css";

class Home extends Component {
    render() {
        return (
            <div className="search-center">
                <div className="search-container">
                    <div className="search-title">
                        <h1>yet another <span style={{ color: "#ff7f50", fontWeight: "bold"}}>Search Engine</span></h1>
                    </div>
                    <div className="search-bar">
                        <input className="search-text" type="text"></input>
                        <button className="search-button">Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
