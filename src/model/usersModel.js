const db = require('./database.js');

module.exports = {
    async getUsers(){
        let users = await db.query('SELECT id, name, email FROM users');

        return users;
    },
    async getUserById(userId){
        let users = await db.query('SELECT id, name, email FROM users WHERE id = ?', userId);

        return users[0];
    },
    async addUser(name, email){
        let res = await db.query('INSERT INTO users (id, name, email) VALUES (0, ?, ?)', [name, email]);

        return res;
    },
    async updateUser(id, name, email){
        let res = await db.query('UPDATE users SET name = ? email = ? WHERE id = ?', [name, email, id]);

        return res;
    },
    async deleteUser(userId){
        let res = await db.query('DELETE FROM users WHERE id = ?', [userId]);

        return res;
    }
}