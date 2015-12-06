var React = require('react');
var ReactDOM = require('react-dom');

var TypeCondition = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <div className="inventory-type col-md-4">
            <div className="inventory-type-title">New</div>
          </div>
          <div className="inventory-type col-md-4">
            <div className="inventory-type-title">Like New</div>
          </div>
          <div className="inventory-type-lastbox col-md-4">
            <div className="inventory-type-title">Gently Used</div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TypeCondition;