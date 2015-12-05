var React = require('react');
var ReactDOM = require('react-dom');

var Userpage = React.createClass({

  logOut: function() {
    window.localStorage.clearStorage();
    this.props.tokenRemoval();
  },

  render: function() {
    return (
      <div>
        You have a token
        <button onClick={this.props.tokenRemoval}>Log Out</button>
      </div>
    )
  }
});

module.exports = Userpage;
