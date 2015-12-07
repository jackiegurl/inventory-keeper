var React = require('react');
var ReactDOM = require('react-dom');

var Product = React.createClass({

  render: function() {
    return (
      <div>
        <span>Table View</span>
        <span>Image View</span>
      </div>
    )
  }
});

module.exports = Product;
