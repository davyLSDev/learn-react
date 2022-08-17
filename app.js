var Morning = React.createClass({
  render: function() {
    return (
      React.createElement('h1', { className: 'morning' }, 'Morning')
    );
  }
});

var Afternoon = React.createClass({
  render: function() {
    return (
      React.createElement('h1', { className: 'afternoon' }, 'Aternoon')
    );
  }
});

var Clock = React.createClass({
  render: function() {
    return (
      this.props.hour < 12 ? React.createElement(Morning) : React.createElement(Afternoon) 
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
