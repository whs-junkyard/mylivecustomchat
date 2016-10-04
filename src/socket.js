import io from 'socket.io-client';

const server = 'http://chat.socket.mylive.in.th';

export default (authen) => {
	if(typeof authen === 'string'){
		authen = {user: '', token: '', room: authen};
	}

	let socket = io(server);
	socket.on('connect', () => {
		socket.emit('authen', authen);
	});

	return socket;
};
