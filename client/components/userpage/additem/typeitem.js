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
  },

  setAccessories: function() {
    this.setState({ descriptionShow: "accessories" });
    $("#type-accessories").addClass("inventory-typeItem-clicked");
    $("#type-accessories-text").addClass("inventory-typeItem-clicked-text");

    $("#type-clothes").removeClass("inventory-typeItem-clicked");
    $("#type-clothes-text").removeClass("inventory-typeItem-clicked-text");

    $("#type-shoes").removeClass("inventory-typeItem-clicked");
    $("#type-shoes-text").removeClass("inventory-typeItem-clicked-text");
  },

  setShoes: function() {
    this.setState({ descriptionShow: "shoes" });
    $("#type-shoes").addClass("inventory-typeItem-clicked");
    $("#type-shoes-text").addClass("inventory-typeItem-clicked-text");

    $("#type-accessories").removeClass("inventory-typeItem-clicked");
    $("#type-accessories-text").removeClass("inventory-typeItem-clicked-text");

    $("#type-clothes").removeClass("inventory-typeItem-clicked");
    $("#type-clothes-text").removeClass("inventory-typeItem-clicked-text");
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
      <div>
        <div className="row">
          <div id="type-clothes" className="inventory-type col-md-4" onClick={this.setClothes}>
            <div id="type-clothes-text" className="inventory-type-title">Clothes</div>
          </div>
          <div id="type-accessories" className="inventory-type col-md-4" onClick={this.setAccessories}>
            <div id="type-accessories-text" className="inventory-type-title">Accessories</div>
          </div>
          <div id="type-shoes" className="inventory-type-lastbox col-md-4" onClick={this.setShoes}>
            <div id="type-shoes-text" className="inventory-type-title">Shoes</div>
          </div>
        </div>
        <div className="inventory-typeItem-small-description">
          {typeDescription}
        </div>
      </div>
    )
  }
});

module.exports = TypeItem;