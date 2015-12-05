var React = require('react');
var ReactDOM = require('react-dom');

var AddItem = React.createClass({

  render: function() {
    return (
      <div>
        <div className="inventory-content">
          <ol className="inventory-steps">
            <li>
              <span className="inventory-steps-number">1</span>
              <span className="inventory-steps-title">Type</span>
            </li>
          </ol>
          <div className="userpage-header">Add an Item to your Inventory</div>
        </div>
      </div>
    )
  }
});

module.exports = AddItem;
