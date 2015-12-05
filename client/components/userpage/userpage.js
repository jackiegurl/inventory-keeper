var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header.js');
var Closet = require('./closet.js');
var AddItem = require('./additem.js')

var Userpage = React.createClass({

  getInitialState: function() {
    return {
      goToCloset: true,
      goToAddItem: false
    }
  },

  toggleStates: function() {
    this.setState({ goToCloset: !this.state.goToCloset, goToAddItem: !this.state.goToCloset })
    console.log(this.state.goToCloset, this.state.goToAddItem);
  },

  removeToken: function() {
    window.localStorage.clear();
    this.props.tokenRemoval();
  },

  render: function() {
    return (
      <div>
        <div className="userpage-topbar">
          <div className="homepage-header-content">
            <Header goCloset={this.toggleStates} tokenRemoval={this.removeToken} />
          </div>
        </div>

        <div className="userpage-main-content">
          {this.state.goToCloset ? <Closet /> : <AddItem />}
        </div>
      </div>
    )
  }
});

module.exports = Userpage;
