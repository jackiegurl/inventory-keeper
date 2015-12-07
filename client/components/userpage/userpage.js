var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header.js');
var ClosetHeader = require('./closet/closet-header.js');
var Product = require('./closet/product.js');
var AddItem = require('./additem/additem.js');

var Userpage = React.createClass({

  getInitialState: function() {
    //there are true and false statements on each component so the page knows which one to render
    return {
      pageKey: "closet",
      items: []
    }
  },

  toggleStates: function() {
    //switches on and off width add item and closet
    this.setState({ 
      goToCloset: !this.state.goToCloset, 
      goToAddItem: !this.state.goToCloset 
    });
  },

  removeToken: function() {
    //removes the current token and redirects to homepage
    window.localStorage.clear();
    this.props.tokenRemoval();
  },

  handleClosetOnClick: function() {
    this.setState({ pageKey: "closet" });
  },

  handleAddItemOnClick: function() {
    this.setState({ pageKey: "addItem" });
  },

  handleSubmission: function(input) {
    this.setState({ 
      items: this.state.items.concat([input]),
      pageKey: "closet" 
    }, function() { this.forceUpdate(); });
  },

  render: function() {
    var closetStructure = this.state.items.map(function(item, i) {
      return <Product data={item} key={i} />
    });

    var pageRender;
    var pageHeader;

    switch (this.state.pageKey) {
      case "closet":
        pageHeader = <ClosetHeader />;
        pageRender = closetStructure;
        break;
      case "addItem":
        pageRender = <AddItem getSubmission={this.handleSubmission} />;
        break;
    }
    
    return (
      <div>
        <div className="userpage-topbar">
          <div className="homepage-header-content">
            <Header goCloset={this.handleClosetOnClick} goAddItem={this.handleAddItemOnClick} tokenRemoval={this.removeToken} />
          </div>
        </div>

        <div className="userpage-main-content">
          {pageHeader}
          {pageRender}
        </div>
      </div>
    )
  }

});

module.exports = Userpage;
