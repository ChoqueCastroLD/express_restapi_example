const usersModel = require('../model/usersModel.js');
const httpStatus = require('http-status')
module.exports = {
    getUserById(req, res){
        const { id } = req.params;

        if(id)
            usersModel.getUserById(id)
            .then(data => {
                if(data)
                    res.json({msg: 'User found, returning data', data});
                else
                    res.json({msg: 'User not found'});
            })
            .catch( err => {
                res.status(httpStatus.CONFLICT)
                .json({msg: 'Sometimes things go wrong :(', err});
            })
        else
            res.status(httpStatus.BAD_REQUEST)
            .json({msg: 'You did not specified all needed parameters'});
    },
    getUsers(req, res){        
        usersModel.getUsers()
        .then(data => {
            if(data.length > 0)
                res.json({msg: 'Users found, returning data', data});
            else
                res.json({msg: 'There are no users', data});
        })
        .catch( err => {
            res.status(httpStatus.CONFLICT)
            .json({msg: 'Sometimes things go wrong :(', err});
        })
    },
    newUser(req, res){
        const { name, email } = req.body;
        
        if(name && email)
            usersModel.addUser(name, email)
            .then(data => {
                if(data.insertedId > 0)
                    res.json({msg: 'Users added, returning added user id', data: data.insertedId});
                else
                    res.json({msg: 'Something is clearly wrong', data});
            })
            .catch( err => {
                res.status(httpStatus.CONFLICT)
                .json({msg: 'User could not be added :(', err});
            })
        else
            res.status(httpStatus.BAD_REQUEST)
            .json({msg: 'You did not specified all needed parameters'});
    },
    updateUser(req, res){
        const { id, name, email } = req.body;
        
        if(id && name && email)
            usersModel.updateUser(id, name, email)
            .then(data => {
                res.json({msg: 'User updated successfully', data});
            })
            .catch( err => {
                res.status(httpStatus.CONFLICT)
                .json({msg: 'Could not update user', err});
            })
        else
            res.status(httpStatus.BAD_REQUEST)
            .json({msg: 'You did not specified all needed parameters'});
    },
    deleteUser(req, res){
        const { id } = req.body;

        if(id)
            usersModel.deleteUser(id)
            .then(data => {
                res.json({msg: 'User deleted', data});
            })
            .catch( err => {
                res.status(httpStatus.CONFLICT)
                .json({msg: 'Sometimes things go wrong :(', err});
            })
        else
            res.status(httpStatus.BAD_REQUEST)
            .json({msg: 'You did not specified all needed parameters'});
    }
}