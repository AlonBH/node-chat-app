const socket = io();
 
socket.on('connect', () => {
  console.log('Connected to server');

  socket.emit('createMessage', {
    to: 'jen', 
    text: 'Hey! This is Alon.'
  }); 
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('newMessage', (message) => {
  console.log('New message', message);
}); 