var Clock = React.createClass({
  render: function() {
    var time = this.props.hour < 12 ? 'Morning' : 'Afternoon';
    return (
      React.createElement('h1', null, time)
    );
  }
});

var hour = (new Date).getHours();

var Greeting = React.createClass({
  render: function() {
    return (
      React.createElement('h1', null, 'Hello, world!')
    );
  }
});

window.addEventListener('load', function() {
  React.render(
    React.createElement(Clock, { hour: hour }),
    document.body
  );
});
