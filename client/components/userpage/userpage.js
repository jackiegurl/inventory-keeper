var React = require("react");
var ReactDOM = require("react-dom");
var Header = require("./header.js");
var Closet = require("./closet/closet.js");
var AddItem = require("./additem/additem.js");
var DummyData = require("../../utils/dummydata.js");
var jwtName = window.localStorage.getItem('access_token');

var Userpage = React.createClass({


  //checks to see if inventory already exists in the local storage
  //if it exists, then use it as reference to the inventory
  //if not, then create the inventory with dummy data

  //pageKey references to which page to render
  getInitialState: function() {
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

  //switches on and off the view of additem and closet
  toggleStates: function() {
    this.setState({ 
      goToCloset: !this.state.goToCloset, 
      goToAddItem: !this.state.goToCloset 
    });
  },

  //is called by the child: header on logOut, removes the localStorage
  //calls the parent "main" to render to the homepage
  removeToken: function() {
    window.localStorage.clear();
    this.props.tokenRemoval();
  },

  //tells it to render the closet view
  handleClosetOnClick: function() {
    this.setState({ pageKey: "closet" });
  },

  //tells it to render the addItem view
  handleAddItemOnClick: function() {
    this.setState({ pageKey: "addItem" });
  },

  //the child addItem collects submission data and sends it to
  //the parent, userpage, so that it could contact it with the
  //current local storage inventory
  handleSubmission: function(input) {
    var addItem = JSON.parse(originalStorage).concat([input]);

    window.localStorage.setItem("inventory", JSON.stringify(addItem));

    this.setState({ 
      items: addItem,
      pageKey: "closet" 
    }, function() { 
      window.localStorage.setItem("inventory", JSON.stringify(this.state.items));
    });
  },

  //render uses a switch to determine which view to render
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
