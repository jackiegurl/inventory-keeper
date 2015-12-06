var React = require('react');
var ReactDOM = require('react-dom');

var TypeItem = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <div className="inventory-type col-md-4">
            <div className="inventory-type-title">Clothes</div>
          </div>
          <div className="inventory-type col-md-4">
            <div className="inventory-type-title">Accessories</div>
          </div>
          <div className="inventory-type-lastbox col-md-4">
            <div className="inventory-type-title">Shoes</div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TypeItem;