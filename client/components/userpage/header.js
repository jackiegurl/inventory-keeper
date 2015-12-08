var React = require('react');
var ReactDOM = require('react-dom');

var Userpage = React.createClass({

  //the header on top of the user page listens on click functionality
  //and passes it to its parent, userpage to tell it to call a function
  render: function() {
    return (
      <div className="homepage-header">
        <div className="tradesy-logo-user">Tradesy</div>
        <span className="homepage-header-right-links-user">
          <a onClick={this.props.goCloset} className="homepage-links">My Closet</a>
          <a onClick={this.props.goAddItem} className="homepage-links">Add Item</a>
          <a onClick={this.props.tokenRemoval} className="homepage-links">Log Out</a>
        </span>
      </div>
    )
  }
});

module.exports = Userpage;
