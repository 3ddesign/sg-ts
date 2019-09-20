import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number,
    title: string,
    completed: boolean
}

axios.get(url).then(resp => {
    const todo = resp.data as Todo;
    const ID = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(`
    The todo id: ${ID} 
    The todo title: ${title} 
    Finished: ${completed} 
    `);
});