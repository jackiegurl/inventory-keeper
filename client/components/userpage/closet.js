var React = require('react');
var ReactDOM = require('react-dom');

var Closet = React.createClass({

  componentDidMount: function() {
    console.log(this.props.data, "from closet");
  },

  render: function() {
    return (
      <div className='container'>
        hey there
      </div>
    )
  }
});

module.exports = Closet;
