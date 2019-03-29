import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./styles/main.css"

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "query": this.props.query,
        }

        this.updateQuery = this.updateQuery.bind(this);
        this.search = this.search.bind(this);
    }

    updateQuery(e) {
        this.setState({
            "query": e.target.value,
        })
    }

    search(e) {
        if (e.keyCode === 13 && this.state.query) {
            const { history } = this.props;
            history.replace("/search?q=" + this.state.query);
        }
    }

    render() {
        return (
            <div className="search-bar">
                <input className="search-text" type="text" onChange={this.updateQuery} onKeyDown={this.search}></input>
                <button disabled={!this.state.query} className="search-button">Search</button>
            </div>
        );
    }
}

export default withRouter(SearchBar);