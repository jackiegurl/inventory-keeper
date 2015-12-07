var React = require('react');
var ReactDOM = require('react-dom');
var Homepage = require('../homepage/homepage.js')
var Userpage = require('../userpage/userpage.js')

var Main = React.createClass({

  getInitialState: function() {
    return {
      hasToken: false,
      userName: null
    }
  },

  checkToken: function(input, username) {
    var jwt = window.localStorage.getItem('access_token');
    this.setState({ userName: username }, function() {
      jwt ? this.setState({ hasToken: true }) : this.setState({ hasToken: false });
    });
  },

  componentWillMount: function() {
    this.checkToken();
  },

  render: function() {
    //the main page is used to check which view to display
    //depending on whether or not there is a token in local storage
    return (
      <div>
        {this.state.hasToken ? <Userpage data={this.state.username} tokenRemoval={this.checkToken} /> : <Homepage tokenCreated={this.checkToken} />}
      </div>
    )
  }

});

ReactDOM.render(<Main />, document.getElementById('app'));