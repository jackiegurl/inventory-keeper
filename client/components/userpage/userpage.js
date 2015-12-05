var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header.js');
var Closet = require('./closet.js');

var Userpage = React.createClass({

  removeToken: function() {
    window.localStorage.clear();
    this.props.tokenRemoval();
  },

  render: function() {
    return (
      <div>
        <div className="userpage-topbar">
          <div className="homepage-header-content">
            <Header tokenRemoval={this.removeToken} />
          </div>
        </div>

        <div className="userpage-main-content">
          <Closet />
        </div>
      </div>
    )
  }
});

module.exports = Userpage;
