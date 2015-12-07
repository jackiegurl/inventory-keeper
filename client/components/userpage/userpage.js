var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header.js');
var Closet = require('./closet/closet.js');
var AddItem = require('./additem/additem.js');

var Userpage = React.createClass({

  getInitialState: function() {
    //there are true and false statements on each component so the page knows which one to render
    var dummyData1 = {
      type: "clothes",
      condition: "new",
      image: "http://www.patagonia.com/tsimages/25455_WDCR.fpx?wid=750&hei=750&bgcolor=FFFFFF&ftr=6&cvt=jpeg",
      brand: "Patagonia",
      headline: "Snap-T Pullover",
      color: "Red",
      price: "70.00"
    };

    var dummyData2 = {
      type: "acessories",
      condition: "like new",
      image: "http://media.tiffany.com/is/image/Tiffany/EcomItemL2/atlasopen-hinged-bangle-30480562_926301_ED_M.jpg",
      brand: "Tiffany & Co",
      headline: "Atlas Hinted Bangle",
      color: "Rose Gold",
      price: "50.00"
    };

    var dummyData3 = {
      type: "shoes",
      condition: "gently worn",
      image: "http://d3pfrs3be80x9y.cloudfront.net/media/catalog/product/cache/7/image/x900/17f82f742ffe127f42dca9de82fb58b1/1/E/1EX113-900_A_54377_3_2.jpg",
      brand: "Acne Studios",
      headline: "High Heel Boots",
      color: "Black",
      price: "100.00"
    }

    var dummyData4 = {
      type: "accessories",
      condition: "like new",
      image: "http://thecarry.com/wp-content/uploads/2013/12/EmbossedLeatherLineZipWalletBlackPatternB3_1024x1024.jpg",
      brand: "Commes Des Garcons",
      headline: "Leather Zip Wallet",
      color: "Black",
      price: "70.00"
    }

    return {
      pageKey: "closet",
      items: [dummyData1, dummyData2, dummyData3, dummyData4]
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
      <div>
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
