var React = require('react');
var ReactDOM = require('react-dom');

var ClosetHeader = React.createClass({

  getInitialState: function() {
    return {
      viewStyle: "image"
    }
  },

  toggleView: function() {
    this.setState({ viewStyle: !this.state.viewStyle });
  },

  render: function() {
    return (
      <div className="closet-header-container">
        <span className="closet-header-links" onClick={this.toggleView}>
          Table View
        </span>
        <span className="closet-header-links" onClick={this.toggleView}>
          Image View
        </span>
      </div>
    )
  }
});

module.exports = ClosetHeader;
