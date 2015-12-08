var React = require('react');
var ReactDOM = require('react-dom');

var TableItem = React.createClass({

  getInitialState: function() {
    return {
      data: this.props.data,
      showItem: true
    }
  },

  editItem: function() {

  },

  removeItem: function() {
    var checkStorage = JSON.parse(window.localStorage.getItem("inventory"));

    for(var i = 0; i < checkStorage.length; i++) {
      if(this.state.data.brand == checkStorage[i].brand
        && this.state.data.color == checkStorage[i].color
        && this.state.data.condition == checkStorage[i].condition
        && this.state.data.headline == checkStorage[i].headline
        && this.state.data.image == checkStorage[i].image
        && this.state.data.price == checkStorage[i].price
        && this.state.data.type == checkStorage[i].type) {
        checkStorage.splice(i,1);
      }
    }

    window.localStorage.setItem("inventory", JSON.stringify(checkStorage));
    this.setState({ data: '', showItem: false });
  },

  render: function() {
    var tableItemImage = "" + this.props.data.image;

    return (
        <tbody>
          {this.state.showItem ? 
          <tr>
            <td>
              <i className="table-i fa fa-times" onClick={this.removeItem}></i> 
              <i className="table-i fa fa-cog" onClick={this.editItem}></i>
            </td>
            <td>{this.state.data.key}</td>
            <td className="center-icon">
              <i className="fa fa-picture-o"></i>
              <span className="show-item-picture">
                <img src={tableItemImage} className="show-item-picture-properties"/>
              </span>
            </td>
            <td>{this.state.data.type}</td>
            <td>{this.state.data.brand}</td>
            <td>{this.state.data.headline}</td>
            <td>{this.state.data.color}</td>
            <td>{this.state.data.condition}</td>
            <td>{this.state.data.price}</td> 
          </tr> : null}
        </tbody>
    )
  }
});

module.exports = TableItem;
