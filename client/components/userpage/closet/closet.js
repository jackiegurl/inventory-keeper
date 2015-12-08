var React = require('react');
var ReactDOM = require('react-dom');
var ClosetTable = require('./closet-table');
var ClosetImage = require('./closet-image');
var ClosetHeader = React.createClass({

  //automatically shows the viewStyle as image view
  //the inventory is passed on from the parent
  getInitialState: function() {
    return {
      viewStyle: "image",
      items: this.props.data
    }
  },

  //after mounted, it sets keys as SKU numbers
  componentWillMount: function() {
    var keyIndex = 0;
    var localInventory = window.localStorage.getItem("inventory");

    if(JSON.parse(localInventory)) {
      this.setState({ items: JSON.parse(localInventory) }, function() {
        for(var key in this.state.items) {
          this.state.items[key]['key'] = keyIndex;
          keyIndex++; 
        }
      });
    } else {
      for(var key in this.state.items) {
        this.state.items[key]['key'] = keyIndex;
        keyIndex++; 
      }
    }
  },

  //changes view to table view
  changeToTable: function() {
    this.setState({ viewStyle: "table" });
  },

  //changes view to image view
  changeToImage: function() {
    this.setState({ viewStyle: "image" });
  },

  //uses a switch case to determine which view to render

  //data is passed into ClosetTable without a .map because it
  //needs to map over each row so that each data rendered is a row
  //and not an entire table

  //data is passed in through a .map for ClosetImage because it can
  //immediately take in data information to render each item since
  //they are all stored in div elements
  render: function() {
  var pageView;

  if(this.state.items) {
    switch(this.state.viewStyle) {
      case "table":
        pageView = <ClosetTable data={this.state.items} />;
        break;
      case "image":
        pageView = this.state.items.map(function(item, i) {
          return <ClosetImage data={item} key={i} />;
        });
        break;
    }
  }

  return (
    <div>
      <div className="closet-header-container">
        <div>
          <a className="closet-header-links" onClick={this.changeToTable}>
            Table View
          </a>
          <a className="closet-header-links" onClick={this.changeToImage}>
            Image View
          </a>
        </div>
      </div>
      <div className="pageview-container">
        <div className="pageview-padding">
          {pageView}
        </div>
      </div>
    </div>
  )
 }

});

module.exports = ClosetHeader;
