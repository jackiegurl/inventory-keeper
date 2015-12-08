var React = require('react');
var ReactDOM = require('react-dom');
var TypeItem = require('./typeitem.js');
var TypeCondition = require('./typecondition.js');
var DummyData = require("../../../utils/dummydata.js");

var AddItem = React.createClass({

  //sets initial values to null so that it knows when a value 
  //has not been inputted 
  getInitialState: function() {
    return {
      type: null,
      brand: null,
      image: null,
      headline: null,
      color: null,
      condition: null,
      price: 0
    }
  },

  //if the input is less than 1, it shines a gray background
  //to let the user know that it's not a proper input
  checkInput: function(event) {
    var eventValue = event.target.value;
    var eventId = event.target.id;

    if(eventValue.length < 1) {
      $("#" + eventId).css({ "background-color": "#666" });
      $("#" + eventId).append()
    } else if (eventValue.length > 2) {
      $("#" + eventId).css({ "background-color": "transparent" });
    }
  },

  //submits the item info to its parent, userpage
  submitItemInfo: function(event) {
    event.preventDefault();

    this.setState({
      brand: this.refs.itemBrand.value,
      image: this.refs.itemImage.value,
      headline: this.refs.itemHeadline.value,
      color: this.refs.itemColor.value,
      condition: this.state.condition,
      type: this.state.type,
      price: this.refs.itemPrice.value
    }, function() {
      var itemDetails = {
        brand: this.state.brand,
        image: this.state.image,
        headline: this.state.headline,
        condition: this.state.condition,
        type: this.state.type,
        color: this.state.color,
        price: this.state.price
      }

      this.props.getSubmission(itemDetails);
    });
  },

  //condition & type, the children, sends the user which one
  //has been clicked because they're in div elements
  itemConditionSelection: function(conditionInput) {
    this.setState({ condition: conditionInput });
  },

  itemTypeSelection: function(typeInput) {
    this.setState({ type: typeInput });
  },

  render: function() {
    return ( 
      <div>
        <form onSubmit={this.props.getSubmission}>
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
                    Item Image URL
                    <div className="inventory-type-small-description">
                    White backgrounds look the best :)
                    </div>
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="inventory-rightcol-text">
                    <input type="text" 
                    className="inventory-textarea-input" ref="itemImage" required/>
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
                    id="inv-brand" onChange={this.checkInput} ref="itemBrand" required/>
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
                    className="inventory-textarea" ref="itemHeadline" 
                    id="inv-headline" onChange={this.checkInput} required/>
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
                    <input type="text" id="inv-color" className="inventory-text-price" ref="itemColor" onChange={this.checkInput} required/>
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
                    <input type="number" id="inv-number" min="0.01" max="9999" step="0.01" className="inventory-text-price" ref="itemPrice" onChange={this.checkInput} required/>
                  </div>
                </div>
              </div>
            <button id="submit-to-check" className="inventory-submit"
            onClick={this.submitItemInfo}>Submit</button>
          </div>
        </div>
      </form>
    </div>
    )
  }
});

module.exports = AddItem;
