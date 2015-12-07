var React = require('react');
var ReactDOM = require('react-dom');
var ClosetTable = require('./closet-table');
var ClosetImage = require('./closet-image');

var ClosetHeader = React.createClass({

  getInitialState: function() {
    return {
      viewStyle: "image",
      items: this.props.data
    }
  },

  componentWillMount: function() {
    var keyIndex = 0;

    for(var key in this.state.items) {
      this.state.items[key]['key'] = keyIndex;
      keyIndex++; 
    }

    this.setState({ items: this.state.items });
  },

  changeToTable: function() {
    this.setState({ viewStyle: "table" });
  },

  changeToImage: function() {
    this.setState({ viewStyle: "image" });
  },

  render: function() {
  var pageView;

  switch(this.state.viewStyle) {
    case "table":
      pageView = <ClosetTable data={this.state.items} />
      break;
    case "image":
      pageView = this.state.items.map(function(item, i) {
        return <ClosetImage data={item} key={i} />;
      });
      break;
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
