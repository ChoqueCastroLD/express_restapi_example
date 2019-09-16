module.exports = {
    mysql: {
        host     : '127.0.0.1',
        database : 'databaseName',
        connectionLimit: 10,
        user     : 'me',
        password : 'secretPassword',
    },
    externalKeys: {
        google   : 'myGoogleAPIkey',
        youtube  : 'myYoutubeAPIkey'
    },
    app: {
        port     : process.env.PORT || 3000,
        logFormat  : 'dev' // dev | combined | common | short | tiny
    }
}