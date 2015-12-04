var React = require('react');
var ReactDOM = require('react-dom');

var Homepage = React.createClass({
  getInitialState: function() {
    return {
      popUp: false
    }
  },

  showPopUp: function() {
    this.setState({
      popUp: true
    })
  },

  createToken: function(input) {

  },

  render: function() {
   return (
    <div>
      <div className="homepage-background-content">
        <div className="homepage-header">
          <div className="homepage-header-content">
            <div className="tradesy-logo">Tradesy</div>
            <span className="homepage-header-right-links">
              <a className="homepage-links" href="/login">Login</a>
              <a className="homepage-links" id="signup" onClick={this.showPopUp}>Sign Up</a>
            </span>
          </div>
        </div>

        {this.state.popUp ? <div>Hey</div> : null}

        <div className="homepage-main-content">
          <div className="homepage-main-content-text">
            <div id="closet-cash">Turn Your Closet Into Cash</div>
            <div id="closet-headline">Selling is Safe and Simple</div>
            <button id="start-selling">Start Selling</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
});

module.exports = Homepage;