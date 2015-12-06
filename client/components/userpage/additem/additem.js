var React = require('react');
var ReactDOM = require('react-dom');
var TypeItem = require('./typeitem.js');
var TypeCondition = require('./typecondition.js')

var AddItem = React.createClass({

  getInitialState: function() {
    return {
      type: '',
      brand: '',
      image: '',
      headline: '',
      description: '',
      color: '',
      condition: '',
      price: 0
    }
  },

  submitItemInfo: function() {
    this.state.brand = this.refs.itemBrand.value;
    this.state.image = this.refs.itemImage.value;
    this.state.headline = this.refs.itemHeadline.value;
    this.state.description = this.refs.itemDescription.value;
    this.state.color = this.refs.itemColor.value;
    this.state.price = this.refs.itemPrice.value;

    this.setState({
      brand: this.state.brand,
      image: this.state.image,
      headline: this.state.headline,
      description: this.state.description,
      color: this.state.color,
      price: this.state.price
    });

    console.log(this.state)
  },

  itemConditionSelection: function(conditionInput) {
    this.setState({ condition: conditionInput });
  },

  itemTypeSelection: function(typeInput) {
    this.setState({ type: typeInput });
  },

  render: function() {
    return ( 
      <div>
        <div className="inventory-content">
          <div className="userpage-header">Add an Item to your Closet</div>
          <div className="inventory-input-box">

            <div className="inventory-col-padding row">
              <div className="col-md-4">
                <div className="inventory-leftcol-text">
                  Type Of Item
                </div>
              </div>

              <div className="col-md-8">
                <div className="inventory-rightcol-text">
                  <TypeItem itemTypeSelection={this.itemTypeSelection} />
                </div>
              </div>
            </div>

            <div className="inventory-col-padding row">
              <div className="col-md-4">
                <div className="inventory-leftcol-text">
                  Item Image
                </div>
              </div>

              <div className="col-md-8">
                <div className="inventory-rightcol-text">
                  <input type="file" name="pic" accept="image/*"
                  ref="itemImage"/>
                </div>
              </div>
            </div>

            <div className="inventory-col-padding row">
              <div className="col-md-4">
                <div className="inventory-leftcol-text">
                  Item Brand
                </div>
              </div>

              <div className="col-md-8">
                <div className="inventory-rightcol-text">
                  <input type="text" className="inventory-text-price"
                  ref="itemBrand"/>
                </div>
              </div>
            </div>

            <div className="inventory-col-padding row">
              <div className="col-md-4">
                <div className="inventory-leftcol-text">
                  Item Headline
                  <div className="inventory-type-small-description">
                    i.e
                    Leather Jacket with Vintage Patches,
                    Belt with a Britney Spears signature
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="inventory-rightcol-text">
                  <textarea type="text" 
                  className="inventory-textarea" ref="itemHeadline"/>
                </div>
              </div>
            </div>

            <div className="inventory-col-padding row">
              <div className="col-md-4">
                <div className="inventory-leftcol-text">
                  Item Description
                  <div className="inventory-type-small-description">
                    i.e. Great dress with normal
                    wear; perfect for a sunday morning outing
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="inventory-rightcol-text">
                  <textarea type="text" 
                  className="inventory-textarea-description"
                  ref="itemDescription"/>
                </div>
              </div>
            </div>

            <div className="inventory-col-padding row">
              <div className="col-md-4">
                <div className="inventory-leftcol-text">
                  Item Color
                </div> 
              </div>

              <div className="col-md-8">
                <div className="inventory-rightcol-text">
                  <input type="text" className="inventory-text-price" ref="itemColor"/>
                </div>
              </div>
            </div>

            <div className="inventory-col-padding row">
              <div className="col-md-4">
                <div className="inventory-leftcol-text">
                  Item Condition
                </div>
              </div>

              <div className="col-md-8">
                <div className="inventory-rightcol-text">
                  <TypeCondition itemConditionSelection=
                  {this.itemConditionSelection} />
                </div>
              </div>
            </div>

            <div className="inventory-col-padding row">
              <div className="col-md-4">
                <div className="inventory-leftcol-text">
                  Item Price
                </div>
              </div>

              <div className="col-md-8">
                <div className="inventory-rightcol-text">
                  <input type="number" min="0.01" max="9999" step="0.01" className="inventory-text-price" ref="itemPrice" required/>
                </div>
              </div>
            </div>

            <button className="inventory-submit" onClick=
            {this.submitItemInfo}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = AddItem;
