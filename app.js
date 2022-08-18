var component = React.createElement;

var Morning = React.createClass({
  render: function() {
    return (
      component('h1', { className: 'morning' }, 'Morning')
    );
  }
});

var Afternoon = React.createClass({
  render: function() {
    return (
      component('h1', { className: 'afternoon' }, 'Afternoon')
    );
  }
});

var Clock = React.createClass({
  render: function() {
    return (
      this.props.hour < 12 ? component(Morning) : component(Afternoon) 
    );
  }
});

var hour = (new Date).getHours();

var Greeting = React.createClass({
  render: function() {
    return (
      component('h1', null, 'Hello, world!')
    );
  }
});

window.addEventListener('load', function() {
  React.render(
    component(Clock, { hour: hour }),
    document.body
  );
});
