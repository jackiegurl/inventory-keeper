var React = require('react');
var ReactDOM = require('react-dom');

var ClosetImage = React.createClass({

  render: function() {
    return (
      <div className="closet-image-view-container">
        <div className="closet-image-view-boxsize">
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
    )
  }
});

module.exports = ClosetImage;
