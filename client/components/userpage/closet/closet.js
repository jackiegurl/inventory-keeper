var React = require('react');
var ReactDOM = require('react-dom');
var ClosetTable = require('./closet-table');
var ClosetImage = require('./closet-image');
var DummyData = require("../../../utils/dummydata.js");
var ClosetHeader = React.createClass({

  getInitialState: function() {
    return {
      viewStyle: "image",
      items: this.props.data
    }
  },

  componentWillMount: function() {
    var keyIndex = 0;
    var localInventory = window.localStorage.getItem("inventory");

    for(var key in this.state.items) {
      this.state.items[key]['key'] = keyIndex;
      keyIndex++; 
    }

    if(JSON.parse(localInventory)) {
      this.setState({ items: JSON.parse(localInventory) });
    }
  },

  changeToTable: function() {
    this.setState({ viewStyle: "table" });
  },

  changeToImage: function() {
    this.setState({ viewStyle: "image" });
  },

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
