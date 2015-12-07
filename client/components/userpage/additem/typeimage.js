var React = require('react');
var ReactDOM = require('react-dom');

var TypeImage = React.createClass({

  render: function() {
    return (
      <form encType="multipart/form-data" method="POST" action="repost.asp" onSubmit={this.props.handleImage}>
          <input id="myfilefield" type="file" ref="itemPic"
          accept="image/*" required />
      </form>
    )
  }
});

module.exports = TypeImage;