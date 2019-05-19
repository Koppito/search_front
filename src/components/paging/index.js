import React, {Component, Fragment} from "react";
import "./styles/main.css";

class Paging extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            "searchCallback": props.searchCallback,
            "paging": props.paging,
            "currentPage": 1,
        }

        this.changePage = this.changePage.bind(this);
    }

    changePage(n) {
        this.setState({
            currentPage: this.state.currentPage += n,
        })

        this.state.searchCallback(20 * (this.state.currentPage-1));
    }

    render() {
        console.log("This paging info: ",  this.state.paging());
        console.log((this.state.currentPage * 20) > this.state.paging().total);
        return (
            <Fragment>
                <button 
                    disabled={this.state.currentPage === 1} onClick={() => this.changePage(-1)}
                    className="move-button-paging">
                    <span className="arrow-pagging left-paging" />
                </button>
                <p>
                    Page: {this.state.currentPage}
                </p>
                <button
                    disabled={this.state.currentPage * 20 > this.state.paging().total} onClick={() => this.changePage(1)}
                    className="move-button-paging">
                    <span className="arrow-pagging right-paging" />
                </button>
            </Fragment>
        );
    }
}


export default Paging;