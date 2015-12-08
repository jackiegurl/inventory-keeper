var React = require('react');
var ReactDOM = require('react-dom');
var TableItem = require('./closet-table-item');

var ClosetTable = React.createClass({

  render: function() {
    var tableItemStructure = this.props.data.map(function(item, i) {
      return <TableItem data={item} key={i} />;
    });

    return (
      <table className="table table-striped table-hover">
        <tbody className="table-font-size">
          <tr className="tableItem-column-names">
            <th>Edit</th>
            <th>SKU</th>
            <th>Image</th>
            <th>Type</th>
            <th>Brand</th>
            <th>Headline</th>
            <th>Color</th>
            <th>Condition</th>
            <th>Price</th>
          </tr>
            {tableItemStructure}
        </tbody>
      </table>
    )
  }
});

module.exports = ClosetTable;
