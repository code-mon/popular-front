const config = {
    development: {
        DB_HOST: 'http://localhost:3000',
        API_KEY: '2ae29cc0870029d6246318d7ae859e55'
    },
    production: {
        DB_HOST: 'https://final-project-popular-movie.herokuapp.com',
        API_KEY: '2ae29cc0870029d6246318d7ae859e55'
    }
}

export default config[process.env.NODE_ENV]
