var Greeting = React.createClass({
  render: function() {
    return (
      React.createElement('h1', null, this.props.name)
    );
  }
});

window.addEventListener('load', function() {
  React.render(
    React.createElement(Greeting, { name: 'world' }),
    document.body
  );
});
