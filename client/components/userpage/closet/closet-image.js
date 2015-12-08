var React = require('react');
var ReactDOM = require('react-dom');

var ClosetImage = React.createClass({

  //the parent passes each data in the .map and it stores
  //it in as a state to have a truth value when editing and removing
  //showChange toggles input text on off when clicking the edit icon
  //showItem turns off when the data is removed so it renders empty
  getInitialState: function() {
    return {
      showChange: true,
      data: this.props.data,
      showItem: true
    }
  },

  //toggles view for innventory button
  editInput: function() {
    this.setState({ showChange: !this.state.showChange });
  },

  //makeChanges use the old value and the new value to check the local storage
  //and see which index it should store the new changes
  //it then re-sets the data state so that it could immediately propagate
  makeChanges: function(event) {
    event.preventDefault();
    this.setState({ showChange: !this.state.showChange });

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
    this.setState({ data: updateData });
  },

  //remove input looks into the storage, finds the old data that
  //is stored inside, and removes it, and also changing showItem
  //to false so that it renders empty
  removeInput: function() {
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

  //each element renders this box, and to target the background
  //image, backgroundImage is set as the style for each box
  render: function() {
    var backgroundImage = {
      "backgroundImage": "url(" + this.state.data.image + ")",
      "backgroundPosition": "center",
      "backgroundSize": "85%",
      "backgroundRepeat": "no-repeat"
    };

    return (
      <div>
      {this.state.showItem ? <div className="closet-image-view-container">
        <div className="closet-image-view-boxsize" style={backgroundImage}>
          <div className="closet-image-view-info">
              <div id="icon-topright" className="closet-image-text" onClick={this.removeInput}>
                <i className="fa fa-times"></i>
              </div>
              <div id="icon-topright" className="closet-image-text" onClick={this.editInput}>
                <i className="fa fa-cog"></i>
              </div>
            <span className="closet-image-view-info-text">
              <div className="closet-image-container">
                <form onSubmit={this.makeChanges}>
                  <div className="closet-image-text">
                    {this.state.showChange ? <div></div> : <input type="text" className="edit-item" ref="itemImage" placeholder={this.state.data.image} />}
                  </div>
                  <div className="closet-image-text">
                    {this.state.showChange ? this.state.data.brand : <input type="text" className="edit-item" ref="itemBrand" placeholder={this.state.data.brand} />}
                  </div>
                  <div className="closet-image-text">
                    {this.state.showChange ? this.state.data.headline : <input type="text" className="edit-item" ref="itemHeadline" placeholder={this.state.data.headline} />}
                  </div>
                  <div className="closet-image-text">
                    {this.state.showChange ? this.state.data.color : <input type="text" className="edit-item" ref="itemColor" placeholder={this.state.data.color} />}
                  </div>
                  <div className="closet-image-text">
                    {this.state.showChange ? this.state.data.condition : <input type="text" className="edit-item" ref="itemCondition" placeholder={this.state.data.condition} />}
                  </div>
                  <div className="closet-image-text">
                    {this.state.showChange ? this.state.data.type : <input type="text" className="edit-item" ref="itemType" placeholder={this.state.data.type} />}
                  </div>
                  <div className="closet-image-text">
                    {this.state.showChange ? this.state.data.price : <input type="text" className="edit-item" ref="itemPrice" placeholder={this.state.data.price} />}
                  </div>
                  {this.state.showChange ? <div></div> : <button onClick={this.makeChanges} id="submit-changes" className="closet-image-text">Submit</button>}
                </form>
              </div>
            </span>
          </div>
        </div>
      </div> : null }
      </div>
    )
  }
});

module.exports = ClosetImage;
