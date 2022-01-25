const { equal } = require("assert");
var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/", function (req, res, next) {

    try {
        const jsonString = fs.readFileSync(require('path').resolve(
            __dirname, '..',
            'todoListStore.json'), "utf-8");
        const data = JSON.parse(jsonString);
        res.send(data);
    }
    catch (ex) {
        res.statusCode = 400;
        res.send(ex.message);
    }
});

router.post("/save", function (req, res) {
    try {
        fs.writeFileSync(require('path').resolve(
            __dirname, '..',
            'todoListStore.json'), JSON.stringify(req.body));
        res.send();
    }
    catch (ex) {
        res.statusCode = 400;
        res.send(ex.message);
    }
});

module.exports = router; 