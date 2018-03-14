import socketIO from 'socket.io';

export default (server) => {
  const io = socketIO.listen(server);
  io.on('connection', (socket) => {
    console.log('A new user is connected');
  });
};
