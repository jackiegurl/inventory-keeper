var React = require('react');
var ReactDOM = require('react-dom');

var TypeCondition = React.createClass({

  getInitialState: function() {
    return {
      wornDescriptionShow: "new"
    }
  },

  setNew: function() {
    this.setState({ wornDescriptionShow: "new" });
    $("#type-new").addClass("inventory-typeItem-clicked");
    $("#type-new-text").addClass("inventory-typeItem-clicked-text");

    $("#type-likeNew").removeClass("inventory-typeItem-clicked");
    $("#type-likeNew-text").removeClass("inventory-typeItem-clicked-text");

    $("#type-gentlyWorn").removeClass("inventory-typeItem-clicked");
    $("#type-gentlyWorn-text").removeClass("inventory-typeItem-clicked-text");
  },

  setLikeNew: function() {
    this.setState({ wornDescriptionShow: "like new" });
    $("#type-likeNew").addClass("inventory-typeItem-clicked");
    $("#type-likeNew-text").addClass("inventory-typeItem-clicked-text");

    $("#type-new").removeClass("inventory-typeItem-clicked");
    $("#type-new-text").removeClass("inventory-typeItem-clicked-text");

    $("#type-gentlyWorn").removeClass("inventory-typeItem-clicked");
    $("#type-gentlyWorn-text").removeClass("inventory-typeItem-clicked-text");
  },

  setGentlyWorn: function() {
    this.setState({ wornDescriptionShow: "gently worn" });
    $("#type-gentlyWorn").addClass("inventory-typeItem-clicked");
    $("#type-gentlyWorn-text").addClass("inventory-typeItem-clicked-text");

    $("#type-likeNew").removeClass("inventory-typeItem-clicked");
    $("#type-likeNew-text").removeClass("inventory-typeItem-clicked-text");

    $("#type-new").removeClass("inventory-typeItem-clicked");
    $("#type-new-text").removeClass("inventory-typeItem-clicked-text");
  },

  render: function() {
    return (
      <table className="inventory-table">
        <tr>
          <td className="inventory-table-td">
            <div id="type-new" onClick={this.setNew}>
              <div id="type-new-text" className="inventory-type-title">New</div>
            </div>
          </td>
          <td className="inventory-table-td">
            <div id="type-likeNew" className="inventory-type" onClick={this.setLikeNew}>
              <div id="type-likeNew-text" className="inventory-type-title">Like New</div>
            </div>
          </td>
          <td className="inventory-table-td">
            <div id="type-gentlyWorn" className="inventory-type-lastbox" onClick={this.setGentlyWorn}>
              <div id="type-gentlyWorn-text" className="inventory-type-title">Gently Worn</div>
            </div>
          </td>
        </tr>
      </table>
    )
  }
});

module.exports = TypeCondition;