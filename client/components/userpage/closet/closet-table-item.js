var React = require('react');
var ReactDOM = require('react-dom');

var TableItem = React.createClass({

  //the parent passes each data in the .map and it stores
  //it in as a state to have a truth value when editing and removing
  //showItem starts off as true so that it can render its view, but
  //it turns off when its deleted so that it renders empty
  //showEdit toggles input text on and off when the edit icon is clicked
  getInitialState: function() {
    return {
      data: this.props.data,
      showItem: true,
      showEdit: true
    }
  },

  //toggles the input text view for editing when clicked
  editItem: function() {
    this.setState({ showEdit: !this.state.showEdit });
  },

  //makeChanges use the old value and the new value to check the local storage
  //and see which index it should store the new changes
  //it then re-sets the data state so that it could immediately propagate
  makeChanges: function() {
    this.setState({ show: !this.state.show });

    var updateData = {
      brand: ((this.refs.itemBrand.value).length > 1 ? this.refs.itemBrand.value : this.state.data.brand),
      color: ((this.refs.itemColor.value).length > 1 ? this.refs.itemColor.value : this.state.data.color),
      condition: ((this.refs.itemCondition.value).length > 1 ? this.refs.itemCondition.value : this.state.data.condition),
      headline: ((this.refs.itemHeadline.value).length > 1 ? this.refs.itemHeadline.value : this.state.data.headline),
      image: ((this.refs.itemImage.value).length > 1 ? this.refs.itemImage.value : this.state.data.image),
      price: ((this.refs.itemPrice.value).length > 1 ? this.refs.itemPrice.value : this.state.data.price),
      type: ((this.refs.itemType.value).length > 1 ? this.refs.itemType.value : this.state.data.type)
    }

    var checkStorage = JSON.parse(window.localStorage.getItem("inventory"));

    for(var i = 0; i < checkStorage.length; i++) {
      if(this.state.data.brand == checkStorage[i].brand
        && this.state.data.color == checkStorage[i].color
        && this.state.data.condition == checkStorage[i].condition
        && this.state.data.headline == checkStorage[i].headline
        && this.state.data.image == checkStorage[i].image
        && this.state.data.price == checkStorage[i].price
        && this.state.data.type == checkStorage[i].type) {
        checkStorage[i] = updateData;
      }
    }

    window.localStorage.setItem("inventory", JSON.stringify(checkStorage));
    this.setState({ data: updateData, showEdit: true });
  },

  //remove input looks into the storage, finds the old data that
  //is stored inside, and removes it, and also changing showItem
  //to false so that it renders empty
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

  //tableImage uses the image property to put it into a string 
  //so it could be put into an img tag
  render: function() {
    var tableItemImage = "" + this.props.data.image;

    return (
        <tbody>
          {this.state.showItem ? 
          <tr>
            <td>
              <i className="table-i fa fa-times" onClick={this.removeItem}></i> 
              <i className="table-i fa fa-cog" onClick={this.editItem}></i>
              {this.state.showEdit ? <div></div> : 
                <button onClick={this.makeChanges} id="submit-changes-t" 
                className="closet-image-text">Submit</button>
              }
            </td>
            <td>{this.state.data.key}</td>
            <td className="center-icon">
              {this.state.showEdit ? <i className="fa fa-picture-o"></i> : 
                <input type="text" className="edit-item-t" ref="itemImage"
                 placeholder={this.state.data.image} />
              }
              <span className="show-item-picture">
                <img src={tableItemImage} className="show-item-picture-properties"/>
              </span>
            </td>
            <td> {this.state.showEdit ? this.state.data.type : 
              <input type="text" className="edit-item-t" ref="itemType"
              placeholder={this.state.data.type} />} </td>
            <td> {this.state.showEdit ? this.state.data.brand : 
              <input type="text" className="edit-item-t" ref="itemBrand"
              placeholder={this.state.data.brand} />} </td>
            <td> {this.state.showEdit ? this.state.data.headline : 
              <input type="text" className="edit-item-t" ref="itemHeadline"
              placeholder={this.state.data.headline} />} </td>
            <td> {this.state.showEdit ? this.state.data.color : 
              <input type="text" className="edit-item-t" ref="itemColor"
              placeholder={this.state.data.color} />} </td>
            <td> {this.state.showEdit ? this.state.data.condition : 
              <input type="text" className="edit-item-t" ref="itemCondition"
              placeholder={this.state.data.condition} />} </td>
            <td> {this.state.showEdit ? this.state.data.price : 
              <input type="text" className="edit-item-t" ref="itemPrice"
              placeholder={this.state.data.price} />} </td> 
          </tr> : null}
        </tbody>
    )
  }
});

module.exports = TableItem;
