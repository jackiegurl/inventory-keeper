var React = require('react');
var ReactDOM = require('react-dom');

var TypeCondition = React.createClass({

  //initially sets the value to null so none is clicked at initial view
  getInitialState: function() {
    return {
      wornDescriptionShow: null
    }
  },

  //setNew, setLikeNew, setGentlyWorn aim to only highlight
  //the one that is clicked and deslects the ones that have
  //not been clicked, and sends the state to its parent additem
  setNew: function() {
    var typeConditionState = "New";

    $("#type-new").addClass("inventory-typeItem-clicked");
    $("#type-new-text").addClass("inventory-typeItem-clicked-text");

    $("#type-likeNew").removeClass("inventory-typeItem-clicked");
    $("#type-likeNew-text").removeClass("inventory-typeItem-clicked-text");

    $("#type-gentlyWorn").removeClass("inventory-typeItem-clicked");
    $("#type-gentlyWorn-text").removeClass("inventory-typeItem-clicked-text");

    this.sendToParent(typeConditionState);
  },

  setLikeNew: function() {
    var typeConditionState = "Like New";

    $("#type-likeNew").addClass("inventory-typeItem-clicked");
    $("#type-likeNew-text").addClass("inventory-typeItem-clicked-text");

    $("#type-new").removeClass("inventory-typeItem-clicked");
    $("#type-new-text").removeClass("inventory-typeItem-clicked-text");

    $("#type-gentlyWorn").removeClass("inventory-typeItem-clicked");
    $("#type-gentlyWorn-text").removeClass("inventory-typeItem-clicked-text");

    this.sendToParent(typeConditionState);
  },

  setGentlyWorn: function() {
    var typeConditionState = "Gently Worn";

    $("#type-gentlyWorn").addClass("inventory-typeItem-clicked");
    $("#type-gentlyWorn-text").addClass("inventory-typeItem-clicked-text");

    $("#type-likeNew").removeClass("inventory-typeItem-clicked");
    $("#type-likeNew-text").removeClass("inventory-typeItem-clicked-text");

    $("#type-new").removeClass("inventory-typeItem-clicked");
    $("#type-new-text").removeClass("inventory-typeItem-clicked-text");

   this.sendToParent(typeConditionState);
  },

  sendToParent: function(input) {
    this.setState({ wornDescriptionShow: input }, function() {
      this.props.itemConditionSelection(this.state.wornDescriptionShow);
    });
  },

  render: function() {
    return (
      <div onChange={this.props.itemConditionSelection}>
        <table className="inventory-table">
          <tbody>
            <tr>
              <td className="inventory-table-td">
                <div id="type-new" onClick={this.setNew}>
                  <div id="type-new-text" className="inventory-type-title"><a>New</a></div>
                </div>
              </td>
              <td className="inventory-table-td">
                <div id="type-likeNew" className="inventory-type" onClick={this.setLikeNew}>
                  <div id="type-likeNew-text" className="inventory-type-title"><a>Like New</a></div>
                </div>
              </td>
              <td className="inventory-table-td">
                <div id="type-gentlyWorn" className="inventory-type-lastbox" onClick={this.setGentlyWorn}>
                  <div id="type-gentlyWorn-text" className="inventory-type-title"><a>Gently Worn</a></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
});

module.exports = TypeCondition;