var React = require('react');
var ReactDOM = require('react-dom');
var Homepage = require('./homepage/homepage.js')
var Userpage = require('./userpage/userpage.js')

var Main = React.createClass({

  getInitialState: function() {
    return {
      hasToken: false
    }
  },

  render: function() {
    //the main page is used to check which view to display
    //depending on whether or not there is a token in local storage
    return (
      <div>
        {this.state.hasToken} ? <Userpage /> : <Homepage />
      </div>
    )
  }

});

ReactDOM.render(<Main />, document.getElementById('app'));