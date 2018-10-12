import io from 'socket.io-client';

let url = '';
if(process.env.NODE_ENV === 'development') url = 'http://localhost:8080/';

const socket = io.connect(url);

export default socket;