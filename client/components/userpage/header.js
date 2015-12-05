var React = require('react');
var ReactDOM = require('react-dom');

var Userpage = React.createClass({

  render: function() {
    return (
      <div className="homepage-header">
        <div className="tradesy-logo">Tradesy</div>
        <span className="homepage-header-right-links">
          <a onClick={this.props.goCloset} className="homepage-links">My Closet</a>
          <a onClick={this.props.goCloset} className="homepage-links">Add Item</a>
          <a onClick={this.props.tokenRemoval} className="homepage-links">Log Out</a>
        </span>
      </div>
    )
  }
});

module.exports = Userpage;
