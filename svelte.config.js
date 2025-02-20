import adapter from '@sveltejs/adapter-auto';
import 'bootstrap/dist/css/bootstrap.min.css';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			optimizeDeps: {
				include: ['bootstrap/dist/css/bootstrap.min.css']
			}
		}
	}
};

export default config;
