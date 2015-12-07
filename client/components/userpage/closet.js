var React = require('react');
var ReactDOM = require('react-dom');

var Closet = React.createClass({

  render: function() {
    return (
      <div className='container'>
        <div className='item-name'>
          {this.props.data}
        </div>
        
        <div className='item-brand'>
        </div>
      </div>
    )
  }
});

module.exports = Closet;
