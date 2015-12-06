var React = require('react');
var ReactDOM = require('react-dom');

var TypeItem = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <div className="inventory-type col-md-4">
            Clothes
          </div>
          <div className="inventory-type col-md-4">
            Accessories
          </div>
          <div className="inventory-type col-md-4">
            Shoes
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TypeItem;