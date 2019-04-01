import React, {Component} from "react";
import SearchBar from "../../components/search-bar";
import DocumentList from "../../components/document-list";
import LoadingIcon from "../../components/loading-icon";
import { Link } from "react-router-dom";
import "./styles/main.css"

// TODO: Change backend url when it's created
// const searchBackend = "http://localhost:80801/search?q=heyheyhey";

class Search extends Component {
    constructor(props) {
        super(props);
        const query = new URLSearchParams(props.location.search).get("q"); 

        this.state = {
            "query": query,
            "results": [{}],
            "loading": true,
        }
    }

    componentWillMount() {
        // TODO: Implement backend hit
        this.setState({ loading: false, });
        // setTimeout(() => {
        // }, 2000);
    }

    render() {    
        return (
            <div>
                <div className="search-top-bar">
                    <Link to="/" style={{textDecoration: "none"}}>
                        <h1 style={{ marginRight: 20, color: "#CAD3C8"}}>SE</h1>
                    </Link>
                    <SearchBar query={this.state.query}/>
                </div>
                <div className="search-content">
                    { this.state.loading ? <LoadingIcon /> : <DocumentList /> } 
                </div>
                <div className="search-paging">
                    Pagination
                </div>
            </div>
        );
    }
}

export default Search;
