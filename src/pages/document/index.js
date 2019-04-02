import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import LoadingIcon from "../../components/loading-icon";
import "./styles/main.css";

class Document extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "documentID": this.props.match.params.id,
            "document": null,
            "loading": true,
        }
    }

    // TODO: Implement getting document
    componentWillMount() {
        fetch("/documents/" + this.props.match.params.id)
            .then(response => response.json())
            .then(data => this.setState({document: data}))
            .catch(this.setState({loading: false}));
    }

    render() {
        return (
            <div>
                <div className="document-top-bar">
                    <span className="document-back-button" onClick={this.props.history.goBack}>
                        <span className="arrow left" />
                    </span>
                    <h1>{this.state.document ? this.state.document.id : ""}</h1>
                </div>
                <div className="document-content">
                    <pre>
                        {
                            this.state.loading ?
                                <LoadingIcon /> 
                            :
                                this.state.document ? this.state.document.text : ""
                        }
                    </pre>
                </div>
            </div>
        );
    }
}

export default withRouter(Document);
