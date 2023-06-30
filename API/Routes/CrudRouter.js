const express = require('express')
const userController = require("./../Controllers/userController");
class Router{
    constructor(collectionDB){
        this.collectionDB = collectionDB;
        this.router = express.Router();
        this.userController = require('./../Controllers/userController');
        this.userCont = new userController(collectionDB)
        this.router.route("/").get(this.userCont.getAllUsers);
        this.router.route("/").post(this.userCont.createUser);
        this.router.route("/").delete(this.userCont.deleteUser);
    }
    
}

module.exports = Router;