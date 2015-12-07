var React = require('react');
var ReactDOM = require('react-dom');

var TableItem = React.createClass({

  render: function() {
    var tableItemImage = "url(" + this.props.data.image + ")"

    return (
      <tr>
        <td>{this.props.data.length}</td>
        <td>{this.props.data.type}</td>
        <td>{this.props.data.brand}</td>
        <td>{this.props.data.headline}</td>
        <td>{this.props.data.color}</td>
        <td>{this.props.data.condition}</td>
        <td>{this.props.data.price}</td>
      </tr>
    )
  }
});

module.exports = TableItem;
