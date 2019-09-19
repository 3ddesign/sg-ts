import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(resp => {
    const todo = resp.data;
    const ID = todo.id;
    const title = todo.title;
    const finished = todo.finished;

    console.log(`
    The todo id: ${ID} 
    The todo title: ${title} 
    Finished: ${finished} 
    `);
});