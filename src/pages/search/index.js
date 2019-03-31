import React, {Component} from "react";
import SearchBar from "../../components/search-bar";


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
                <SearchBar query={this.state.query}/>
            </div>
        );
    }
}

export default Search;
