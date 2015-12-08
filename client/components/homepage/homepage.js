var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('./modal.js')

var Homepage = React.createClass({

  //popUp is used to toggle on and off when the signup button is clicked
  //tokenCreation is originally set to false but turns true as soon as a user signs up 
  getInitialState: function() {
    return {
      popUp: false,
      tokenCreation: false,
    }
  },

  //toggles view when signup button is clicked
  letsGetToken: function() {
    this.setState({ popUp: !this.state.popUp });
  },

  //after the modal has been filled out by the user, it calls the parent
  //on getNameCreateToken, where it will use the username to store the
  //local storage access token
  
  //homepage will then bubble up to its parent "main", where it will
  //tell its parent that there is a token
  getNameCreateToken: function(input) {
    window.localStorage.setItem("access_token", input);

    this.setState({ 
      tokenCreation: true
    }, function() {
      this.props.tokenCreated();
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