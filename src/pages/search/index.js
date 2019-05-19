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
            "paging": {},
            "loading": true,
        }
    }

    componentWillMount() {
        let base = process.env.NODE_ENV == "production" ? "http://localhost:8081" : "";
        let endpoint = "/back/search?q=" + this.state.query.replace(/\s+/g, '-').toLowerCase();

        console.log(base+endpoint);

        fetch(base + endpoint)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    results: data.results,
                    paging: data.paging,
                })
            })
            .finally(this.setState({ loading: false }))
            .catch(this.setState({ loading: false }));
        
        console.log(this.state.results);
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
                    { this.state.loading ? <LoadingIcon /> : <DocumentList documents={this.state.results} /> } 
                </div>
                <div className="search-paging">
                    Pagination
                </div>
            </div>
        );
    }
}

export default Search;
