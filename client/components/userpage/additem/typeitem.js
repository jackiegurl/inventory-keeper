var React = require('react');
var ReactDOM = require('react-dom');

var TypeItem = React.createClass({

  getInitialState: function() {
    return {
      descriptionShow: "clothes"
    }
  },

  setClothes: function() {
    this.setState({ descriptionShow: "clothes" });
    $("#type-clothes").addClass("inventory-typeItem-clicked");
    $("#type-clothes-text").addClass("inventory-typeItem-clicked-text");

    $("#type-accessories").removeClass("inventory-typeItem-clicked");
    $("#type-accessories-text").removeClass("inventory-typeItem-clicked-text");

    $("#type-shoes").removeClass("inventory-typeItem-clicked");
    $("#type-shoes-text").removeClass("inventory-typeItem-clicked-text");

    this.props.itemTypeSelection("clothes");
  },

  setAccessories: function() {
    this.setState({ descriptionShow: "accessories" });
    $("#type-accessories").addClass("inventory-typeItem-clicked");
    $("#type-accessories-text").addClass("inventory-typeItem-clicked-text");

    $("#type-clothes").removeClass("inventory-typeItem-clicked");
    $("#type-clothes-text").removeClass("inventory-typeItem-clicked-text");

    $("#type-shoes").removeClass("inventory-typeItem-clicked");
    $("#type-shoes-text").removeClass("inventory-typeItem-clicked-text");

    this.props.itemTypeSelection("accessories");
  },

  setShoes: function() {
    this.setState({ descriptionShow: "shoes" });
    $("#type-shoes").addClass("inventory-typeItem-clicked");
    $("#type-shoes-text").addClass("inventory-typeItem-clicked-text");

    $("#type-accessories").removeClass("inventory-typeItem-clicked");
    $("#type-accessories-text").removeClass("inventory-typeItem-clicked-text");

    $("#type-clothes").removeClass("inventory-typeItem-clicked");
    $("#type-clothes-text").removeClass("inventory-typeItem-clicked-text");

    this.props.itemTypeSelection("shoes");
  },

  render: function() {
    var typeDescription;
    switch(this.state.descriptionShow) {
      case "clothes":
        typeDescription = "tops, shirts, tanktops, bottoms, jackets, outerwear";
        break;
      case "accessories":
        typeDescription = "bags, necklaces, earrings, bracelets, hats, wallets";
        break;
      case "shoes":
        typeDescription = "boots, high heels, sneakers, flats, sandals";
        break;
    }

    return (
      <div onChange={this.props.itemTypeSelection}>
        <table className="inventory-table">
          <tr>
            <td className="inventory-table-td">
              <div id="type-clothes" onClick={this.setClothes}>
                <div id="type-clothes-text" className="inventory-type-title">Clothes</div>
              </div>
            </td>
            <td className="inventory-table-td">
              <div id="type-accessories" className="inventory-type" onClick={this.setAccessories}>
                <div id="type-accessories-text" className="inventory-type-title">Accessories</div>
              </div>
            </td>
            <td className="inventory-table-td">
              <div id="type-shoes" className="inventory-type-lastbox" onClick={this.setShoes}>
                <div id="type-shoes-text" className="inventory-type-title">Shoes</div>
              </div>
            </td>
          </tr>
        </table>
        <div className="inventory-typeItem-small-description">
          {typeDescription}
        </div>
      </div>
    )
  }
});

module.exports = TypeItem;