import React, {Component} from "react";
import "./styles/main.css";

class Document extends Component {
    constructor(props) {
        super(props);
        let documentID = this.props.match.params.id;

        this.state = {
            "document": {
                "title": documentID,
            }
        }
    }

    render() {
        return (
            <div>
                <div className="document-top-bar">
                    <h1>{this.state.document.title}</h1>
                </div>
                <div className="document-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus lectus, mollis eu lorem vel, pretium rutrum magna. Praesent libero massa, vestibulum ac semper vestibulum, convallis quis eros. Fusce tempor, lacus nec porta aliquet, eros libero placerat orci, ut interdum magna lectus et nisl. Phasellus suscipit sapien non ante efficitur, id venenatis neque maximus. Duis ut dictum massa, id efficitur nisl. Etiam tincidunt porta scelerisque. Praesent fringilla, diam eu interdum accumsan, sapien nulla euismod sem, id tincidunt nisl arcu quis turpis. Phasellus eget nisl quis enim accumsan efficitur. Pellentesque lacinia massa et ante tempor, a porta ligula pretium. Nulla facilisi.

                        Duis vitae facilisis odio. Pellentesque id tempor tortor. Donec luctus, ex eu facilisis volutpat, leo justo tincidunt sem, nec convallis nisi justo ut velit. Curabitur malesuada consectetur dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam ut risus aliquam dolor consequat sodales. Proin neque mauris, tempus sed tristique ac, tincidunt non nibh. Aenean dictum velit sagittis lobortis commodo. Phasellus non lorem sed lacus tincidunt malesuada. Morbi odio dolor, interdum ut tincidunt id, eleifend feugiat dolor. Proin tortor metus, tincidunt vitae dolor in, hendrerit venenatis turpis. In eu nisl finibus, finibus nulla et, suscipit dolor. Curabitur diam nibh, gravida non luctus ut, dictum a massa. Proin egestas dolor nec diam cursus, quis rutrum nunc efficitur. Nulla ullamcorper ex est, vel laoreet nisl volutpat eget. Sed nec suscipit urna.

                        Etiam id risus quam. Sed ultrices ultrices lacus eget cursus. Quisque tempus, diam eu dignissim vulputate, justo diam venenatis nisi, sit amet viverra mi ligula vel dui. Duis id mauris at orci lacinia pellentesque vel a leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ante massa, aliquet sed ultrices eget, molestie vitae nisl. Integer varius finibus metus id dignissim. Phasellus semper semper nibh, nec porta massa euismod sed. Integer gravida imperdiet arcu sit amet pulvinar. Vestibulum non tortor et metus volutpat semper. Vestibulum ultrices, felis vel viverra vulputate, nisl quam tincidunt dolor, at volutpat arcu lorem sed dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut porta ex. Aenean magna tortor, tincidunt in purus sit amet, maximus aliquet lorem. Sed erat justo, convallis id turpis at, vestibulum gravida turpis. In at lacus neque.

                        Sed vestibulum neque ex, ac posuere nibh convallis eu. Fusce vel sodales quam, nec bibendum mi. Donec molestie leo posuere, lacinia nunc ac, pretium felis. Sed libero diam, dictum id magna eu, scelerisque congue neque. Donec id semper erat. Sed vitae massa lobortis, ultrices massa in, iaculis neque. Duis congue neque libero, ut suscipit lorem laoreet eget. Aenean molestie ante vel nisi bibendum sodales. Cras at nisi feugiat, cursus justo quis, facilisis tellus. Ut quam augue, rutrum quis vestibulum ut, sodales commodo dolor. Donec luctus nibh purus, quis accumsan urna efficitur tempus.

                        Pellentesque sollicitudin dui at nisi ultricies mollis. Vestibulum fermentum mi vitae nunc tincidunt viverra. Fusce nec augue vestibulum, auctor lorem ac, sagittis nunc. Nam et nunc eget ligula accumsan fermentum sit amet sit amet urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare velit in ante placerat, a ultricies leo aliquam. Vestibulum eget egestas lacus. Vivamus sodales vehicula tortor, id porttitor odio sollicitudin et. Donec ut aliquet metus, eget efficitur arcu. Suspendisse efficitur finibus vehicula. 
                    </p>
                </div>
            </div>
        );
    }
}

export default Document;
