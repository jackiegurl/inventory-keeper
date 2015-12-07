var React = require('react');
var ReactDOM = require('react-dom');

var ClosetTable = React.createClass({

  render: function() {
    return (
      <table className="table table-striped table-hover">
        <tbody>
          <tr>
            <th>SKU</th>
            <th>Type</th>
            <th>Image</th>
            <th>Brand</th>
            <th>Headline</th>
            <th>Color</th>
            <th>Condition</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>{this.props.data.length}</td>
            <td>{this.props.data.type}</td>
            <td>{this.props.data.image}</td>
            <td>{this.props.data.brand}</td>
            <td>{this.props.data.headline}</td>
            <td>{this.props.data.color}</td>
            <td>{this.props.data.condition}</td>
            <td>{this.props.data.price}</td>
          </tr>
        </tbody>
      </table>
    )
  }
});

module.exports = ClosetTable;
