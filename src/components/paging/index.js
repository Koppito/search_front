import React, {Component} from "react";


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
            <div>
                <button disabled={this.state.currentPage === 1} onClick={() => this.changePage(-1)}> {"<-"} </button>
                Page: {this.state.currentPage}
                <button disabled={this.state.currentPage * 20 > this.state.paging().total} onClick={() => this.changePage(1)}> {"->"} </button>
            </div>
        );
    }
}


export default Paging;