var React = require('react');
var ReactDOM = require('react-dom');
var TypeItem = require('./typeitem.js');
var TypeBrand = require('./typebrand.js');
var TypeColor = require('./typecolor.js');
var TypeCondition = require('./typecondition.js')

var AddItem = React.createClass({

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
                  <TypeItem />
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
                  <TypeBrand />
                </div>
              </div>
            </div>

            <div className="inventory-col-padding row">
              <div className="col-md-4">
                <div className="inventory-leftcol-text">
                  Item Description
                </div>
              </div>

              <div className="col-md-8">
                <div className="inventory-rightcol-text">
                  description of item goes here
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
                  <TypeColor />
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
                  <TypeCondition />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
});

module.exports = AddItem;
