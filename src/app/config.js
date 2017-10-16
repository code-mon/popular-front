const config = {
	development: {
		DB_HOST: 'http://localhost:3000'
	},
	production: {
		DB_HOST: ''
	}
}

export default config[process.env.NODE_ENV]