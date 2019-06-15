var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', () => {
	console.log('Socket conectado');
});

socket.on('disconnect', () => {
	console.log('Socket desconectado');
});

socket.on('estadoActual', (resp) => {
	label.text(resp.actual);
});

$('button').on('click', () => {
	socket.emit('siguienteTicket', null, function(siguienteTicket){
		label.text(siguienteTicket);
	});
});