var React = require('react');
var ReactDOM = require('react-dom');

var Product = React.createClass({

  render: function() {
    return (
      <div>
        <div className="inventory-col-padding">
          <div className="inventory-leftcol-text">
            {this.props.data.brand}
            {this.props.data.image}
            {this.props.data.headline}
            {this.props.data.description}
            {this.props.data.color}
            {this.props.data.condition}
            {this.props.data.type}
            {this.props.data.price}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Product;
