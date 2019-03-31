import React, {Component} from "react";
import SearchBar from "../../components/search-bar";
import { Link } from "react-router-dom";
import "./styles/main.css"
import { NONAME } from "dns";

class Search extends Component {
    constructor(props) {
        super(props);
        const query = new URLSearchParams(props.location.search); 

        this.state = {
            "query": query.get("q"),
        }
    }

    render() {    
        return (
            <div>
                <div className="top-bar">
                    <Link to="/" style={{textDecoration: "none"}}>
                        <h1 style={{ marginRight: 20, color: "#CAD3C8"}}>SE</h1>
                    </Link>
                    <SearchBar query={this.state.query}/>
                </div>
                <div className="content">
                    <Link to="/document">
                        {this.state.query}
                    </Link>
                </div>
                <div className="paging">
                    Pagination
                </div>
            </div>
        );
    }
}

export default Search;
