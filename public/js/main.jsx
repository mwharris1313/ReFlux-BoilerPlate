console.log('main.jsx Loading...');

var socket = io();
socket.emit('ping', 'PING');
socket.on('pong', function(data){
  console.log('DATA', data);
});

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
