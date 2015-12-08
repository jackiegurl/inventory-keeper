var React = require('react');
var ReactDOM = require('react-dom');

var Modal = React.createClass({
  
  //the modal is responsible for getting the username input
  //after it has the username input, it sends it to the parent
  //homepage, where it will create a token out of the username
  //it also clears the submission after
  handleSubmit: function(e) {
    e.preventDefault();
    var userName = this.refs.inputName.value;
    this.props.getUserName(userName);
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