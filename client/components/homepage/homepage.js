var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('./homepage-modal.js')

var Homepage = React.createClass({
  getInitialState: function() {
    return {
      popUp: false,
      tokenCreation: false
    }
  },

  letsGetToken: function() {
    this.setState({
      popUp: !this.state.popUp
    });
  },

  getNameCreateToken: function(input) {
    //store the token in input with access_token as the reference
    window.localStorage.setItem('access_token', input);
    this.setState({ tokenCreation: false });
    this.props.tokenCreated();
  },

  render: function() {
   return (
    <div onSubmit={this.props.tokenCreated}>
      <div className="homepage-background-content">
        <div className="homepage-header">
          <div className="homepage-header-content">
            <div className="tradesy-logo">Tradesy</div>
            <span className="homepage-header-right-links">
              <a className="homepage-links" href="/login">Login</a>
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