var React = require('react');
var ReactDOM = require('react-dom');

var ClosetImage = React.createClass({

  getInfoOnViewSwitch: function(input) {
    console.log(input, "on ClosetImage");
  },

  componentDidMount: function() {
    console.log(this.props.data, "in closetImage")
  }, 

  render: function() {
    return (
      <div passInfo={this.getInfoOnViewSwitch}>
        <div className="inventory-col-padding">
          <div className="inventory-leftcol-text">
          CLOSET Image
            {this.props.data.brand}
            {this.props.data.image}
            {this.props.data.headline}
            {this.props.data.description}
            {this.props.data.color}
            {this.props.data.condition}
            {this.props.data.type}
            {this.props.data.price}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ClosetImage;
