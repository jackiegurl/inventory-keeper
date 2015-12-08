var React = require('react');
var ReactDOM = require('react-dom');
var Homepage = require('../homepage/homepage.js');
var Userpage = require('../userpage/userpage.js');

var Main = React.createClass({

  //if the user has a token, then render userpage
  //if the user does not have a token, render homepage
  getInitialState: function() {
    return {
      hasToken: falseg
    }
  },

  //toggles whether or not to show homepage or userpage
  //by checking to see if there is an access token in local storage
  toggleLog: function() {
    var jwt = window.localStorage.getItem("access_token");
    if(jwt) {
      this.setState({ hasToken: true });
    } else {
      this.setState({ hasToken: false });
    }
  },

  //after mounting, immediately checks to see if the user has a token or not
  componentWillMount: function() {
    this.toggleLog();
  },

  //uses ternary to decide which view to display
  render: function() {
    return (
      <div>
        {this.state.hasToken ? <Userpage data={this.state.username} tokenRemoval={this.toggleLog} /> : <Homepage tokenCreated={this.toggleLog} />}
      </div>
    )
  }

});

ReactDOM.render(<Main />, document.getElementById('app'));