var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('./modal.js')

var Homepage = React.createClass({
  getInitialState: function() {
    return {
      popUp: false,
      tokenCreation: false,
      userName: null
    }
  },

  letsGetToken: function() {
    this.setState({ popUp: !this.state.popUp });
  },

  getNameCreateToken: function(input) {
    //store session 
    window.localStorage.setItem("access_token", input);
    //bubbles up to the parent to tell it that a token has been created
    this.setState({ 
      tokenCreation: true,
      userName: input 
    }, function() {
      this.props.tokenCreated(this.state.tokenCreation, input);
    });
  },

  render: function() {
   return (
    <div onSubmit={this.props.tokenCreated}>
      <div className="homepage-background-content">
        <div className="homepage-header">
          <div className="homepage-header-content">
            <div className="tradesy-logo">Tradesy</div>
            <span className="homepage-header-right-links">
              <a className="homepage-links">Login</a>
              <a id="homepage-links-signup" className="homepage-links" onClick={this.letsGetToken}>Sign Up</a>
            </span>
          </div>
        </div>

        <div className="homepage-main-content">
          <div className="homepage-main-content-text">
            <div className="closet-cash">Turn Your Closet Into Cash</div>
            <div className="closet-headline">Selling is Safe and Simple</div>
            <button className="start-selling" onClick={this.letsGetToken}>Start Selling</button>
              {this.state.popUp ? <Modal className="homepage-links" getUserName={this.getNameCreateToken} /> : null}
          </div>
        </div>
      </div>
    </div>
    )
  }
});

module.exports = Homepage;