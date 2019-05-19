import React, {Component} from "react";
import SearchBar from "../../components/search-bar";
import DocumentList from "../../components/document-list";
import Paging from "../../components/paging";
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

        this.search = this.search.bind(this);
        this.getPagingInfo = this.getPagingInfo.bind(this);
    }

    componentWillMount() {
        this.search(0);
    }

    search(offset) {
        let base = process.env.NODE_ENV == "production" ? "http://localhost:8081" : "";
        let endpoint = `/back/search?offset=${offset}&q=${this.state.query.replace(/\s+/g, '+').toLowerCase()}`;

        console.log(base + endpoint);

        fetch(base + endpoint)
            .then(response => response.json())
            .then(data => {
                console.log("Paging recieved ", data.paging);
                this.setState({
                    results: data.results,
                    paging: data.paging,
                })
            })
            .finally(this.setState({ loading: false }));
    }

    getPagingInfo() {
        return this.state.paging;
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
                    <small style={{textAlign: "left", width: 500}}>
                        Total: {this.state.paging.total}
                    </small>
                    { this.state.loading ? <LoadingIcon /> : <DocumentList documents={this.state.results} /> } 
                </div>
                <div className="search-paging">
                    {this.state.loading ? <LoadingIcon /> : <Paging searchCallback={this.search} paging={this.getPagingInfo} />} 
                </div>
            </div>
        );
    }
}

export default Search;
