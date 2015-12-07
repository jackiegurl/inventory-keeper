var React = require('react');
var ReactDOM = require('react-dom');

var ClosetImage = React.createClass({

  render: function() {
    var backgroundImage = {
      "backgroundImage": "url(" + this.props.data.image + ")",
      "backgroundPosition": "center",
      "backgroundSize": "85%",
      "backgroundRepeat": "no-repeat"
    };

    return (
      <div className="closet-image-view-container">
        <div className="closet-image-view-boxsize" style={backgroundImage}>
          <div className="closet-image-view-info">
            <span className="closet-image-view-info-text">
              <div className="closet-image-container">
                <div className="closet-image-text">
                  {this.props.data.brand}
                </div>
                <div className="closet-image-text">
                  {this.props.data.headline}
                </div>

                <div className="padding-between"> </div>

                <div className="closet-image-text">
                  {this.props.data.color}
                </div>
                <div className="closet-image-text">
                  {this.props.data.condition} / SKU #{this.props.data.key}
                </div>
                <div className="closet-image-text">
                  {this.props.data.type}
                </div>
                <div className="closet-image-text">
                  {this.props.data.price}
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ClosetImage;
