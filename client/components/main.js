var React = require('react');
var ReactDOM = require('react-dom');
var Homepage = require('./homepage/homepage.js')

var Main = React.createClass({

  render: function() {
    return (
      <div>
        <Homepage />
      </div>
    )
  }

});

ReactDOM.render(<Main />, document.getElementById('app'));