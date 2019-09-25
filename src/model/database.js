const mysql = require('mysql');
const config = require('../config/config.js');

const pool  = mysql.createPool(config.mysql);

module.exports = {

    query(queryString = '', inputData = []){
        return new Promise( (resolve, reject) => {
            pool.query(queryString, inputData, function (error, results) {
                if (error) return reject({errno: error.errno, code: error.code});
                else return resolve(results);
            } );
        })
    }

}