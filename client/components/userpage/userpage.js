var React = require("react");
var ReactDOM = require("react-dom");
var Header = require("./header.js");
var Closet = require("./closet/closet.js");
var AddItem = require("./additem/additem.js");
var DummyData = require("../../utils/dummydata.js");
var jwtName = window.localStorage.getItem('access_token');

var Userpage = React.createClass({


  getInitialState: function() {
    //there are true and false statements on each component so the page knows which one to render\
    var inventory = window.localStorage.getItem("inventory");
    if(!JSON.parse(inventory)) {
      window.localStorage.setItem("inventory", JSON.stringify(DummyData));
    } else if(JSON.parse(inventory)) {
      inventory = JSON.parse(inventory);
    }

    return {
      pageKey: "closet",
      items: inventory
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
    console.log(this.state.items, 'thisstate')
    window.localStorage.setItem("inventory", JSON.stringify(this.state.items.concat([input])));
    var setStorage = window.localStorage.getItem("inventory");

    this.setState({ 
      items: JSON.parse(setStorage),
      pageKey: "closet" 
    }, function() { 
      window.localStorage.setItem("inventory", JSON.stringify(this.state.items));
    });
  },

  render: function() {
    var pageRender;

    switch (this.state.pageKey) {
      case "closet":
        pageRender = <Closet data={this.state.items} />;
        break;
      case "addItem":
        pageRender = <AddItem getSubmission={this.handleSubmission} />;
        break;
    }
    
    return (
      <div onFocus={this.loadCloset}>
        <div className="userpage-topbar">
          <div className="homepage-header-content">
            <Header goCloset={this.handleClosetOnClick} goAddItem={this.handleAddItemOnClick} tokenRemoval={this.removeToken} />
          </div>
        </div>

        <div className="userpage-main-content">
          {pageRender}
        </div>
      </div>
    )
  }
  
});

module.exports = Userpage;
