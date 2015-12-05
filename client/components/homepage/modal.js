var React = require('react');
var ReactDOM = require('react-dom');

var Modal = React.createClass({
  
  handleSubmit: function(e) {
    e.preventDefault();
    //grabs the input value
    var userName = this.refs.inputName.value
    //bubbles it to the parent
    this.props.getUserName(userName);
    //clears the input text on submission
    this.refs.inputName.value = '';
  },

  render: function () {
    return (
     <div className='signup-input'>
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="inputName" className="input-text-username"
        placeholder="create a username" onSubmit={this.props.getUserName} />
      </form>
     </div>
    )
  }
})

module.exports = Modal;