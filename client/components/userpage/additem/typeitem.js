var React = require('react');
var ReactDOM = require('react-dom');

var TypeItem = React.createClass({

  getInitialState: function() {
    return {
      descriptionShow: null
    }
  },

  setClothes: function() {
    var itemType = "Clothes";

    $("#type-clothes").addClass("inventory-typeItem-clicked");
    $("#type-clothes-text").addClass("inventory-typeItem-clicked-text");

    $("#type-accessories").removeClass("inventory-typeItem-clicked");
    $("#type-accessories-text").removeClass("inventory-typeItem-clicked-text");

    $("#type-shoes").removeClass("inventory-typeItem-clicked");
    $("#type-shoes-text").removeClass("inventory-typeItem-clicked-text");

    this.sendToParent(itemType);
  },

  setAccessories: function() {
    var itemType = "Accessories";

    $("#type-accessories").addClass("inventory-typeItem-clicked");
    $("#type-accessories-text").addClass("inventory-typeItem-clicked-text");

    $("#type-clothes").removeClass("inventory-typeItem-clicked");
    $("#type-clothes-text").removeClass("inventory-typeItem-clicked-text");

    $("#type-shoes").removeClass("inventory-typeItem-clicked");
    $("#type-shoes-text").removeClass("inventory-typeItem-clicked-text");

    this.sendToParent(itemType);
  },

  setShoes: function() {
    var itemType = "Shoes";

    $("#type-shoes").addClass("inventory-typeItem-clicked");
    $("#type-shoes-text").addClass("inventory-typeItem-clicked-text");

    $("#type-accessories").removeClass("inventory-typeItem-clicked");
    $("#type-accessories-text").removeClass("inventory-typeItem-clicked-text");

    $("#type-clothes").removeClass("inventory-typeItem-clicked");
    $("#type-clothes-text").removeClass("inventory-typeItem-clicked-text");

    this.sendToParent(itemType);
  },

  sendToParent: function(input) {
    this.setState({ descriptionShow: input }, function() {
      this.props.itemTypeSelection(this.state.descriptionShow);
    })
  },

  render: function() {
    var typeDescription;
    switch(this.state.descriptionShow) {
      case "Clothes":
        typeDescription = "tops, shirts, tanktops, bottoms, jackets, outerwear";
        break;
      case "Accessories":
        typeDescription = "bags, necklaces, earrings, bracelets, hats, wallets";
        break;
      case "Shoes":
        typeDescription = "boots, high heels, sneakers, flats, sandals";
        break;
    }

    return (
      <div onChange={this.props.itemTypeSelection}>
        <table className="inventory-table">
          <tbody>
            <tr>
              <td className="inventory-table-td">
                <div id="type-clothes" onClick={this.setClothes}>
                  <div id="type-clothes-text" className="inventory-type-title"><a>Clothes</a></div>
                </div>
              </td>
              <td className="inventory-table-td">
                <div id="type-accessories" className="inventory-type" onClick={this.setAccessories}>
                  <div id="type-accessories-text" className="inventory-type-title"><a>Accessories</a></div>
                </div>
              </td>
              <td className="inventory-table-td">
                <div id="type-shoes" className="inventory-type-lastbox" onClick={this.setShoes}>
                  <div id="type-shoes-text" className="inventory-type-title"><a>Shoes</a></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="inventory-typeItem-small-description">
          {typeDescription}
        </div>
      </div>
    )
  }
});

module.exports = TypeItem;