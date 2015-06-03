console.log('main.jsx Loading...');

var TestApp = React.createClass({
  render: function() {
    var message = 'HelloWorld';
    return <span style={{color:'#f00'}}>{message}</span>;
  }
});

React.render(
  <TestApp />,
  document.getElementById('reactContainer')
);
