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
    $("#type-clothes").css({
      "background-color": "#ff8187"
    });
    $("#type-clothes-text").css({
      "color": "#fff"
    });
  },

  setAccessories: function() {
    this.setState({ descriptionShow: "accessories" });
    $("#type-accessories").css({
      "background-color": "#ff8187"
    });
    $("#type-accessories-text").css({
      "color": "#fff"
    });
  },

  setShoes: function() {
    this.setState({ descriptionShow: "shoes" });
    $("#type-shoes").css({
      "background-color": "#ff8187"
    });
    $("#type-shoes-text").css({
      "color": "#fff"
    });
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