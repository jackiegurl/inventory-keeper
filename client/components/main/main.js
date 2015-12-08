var React = require('react');
var ReactDOM = require('react-dom');
var Homepage = require('../homepage/homepage.js');
var Userpage = require('../userpage/userpage.js');
var FireBaseUtils = require('../../utils/helpers.js');


window.React = React;

var Main = React.createClass({
  getInitialState: function() {
    return {
      hasToken: false,
      userName: null
    }
  },

  toggleLog: function() {
    var jwt = window.localStorage.getItem("access_token");
    if(jwt) {
      this.setState({ hasToken: true });
    } else {
      this.setState({ hasToken: false });
    }
  },

  componentWillMount: function() {
    this.toggleLog();
  },

  render: function() {
    //the main page is used to check which view to display
    //depending on whether or not there is a token in local storage
    return (
      <div>
        {this.state.hasToken ? <Userpage data={this.state.username} tokenRemoval={this.toggleLog} /> : <Homepage tokenCreated={this.toggleLog} />}
      </div>
    )
  }

});

ReactDOM.render(<Main />, document.getElementById('app'));