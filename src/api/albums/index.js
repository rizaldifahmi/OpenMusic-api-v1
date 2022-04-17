const AlbumsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
	name: 'albums',
	version: '1.0.0',
	async register(server, {service, validator}) {
		const albumsHandler = new AlbumsHandler(service, validator);
		server.route(routes(albumsHandler));
	},
};
