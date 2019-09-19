"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (resp) {
    const todo = resp.data;
    const ID: todo.id;
    const title: todo.title;
    const finished: todo.finished;

    console.log(`
    The todo id: ${ID} 
    The todo title: ${title} 
    Finished: ${finished} 
    `);
});
