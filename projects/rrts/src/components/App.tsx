import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
    todos: Todo[];
    fetchTodos(): any;
    delete: typeof deleteTodo;
}

interface AppState {
    fetching: boolean;
}

export class _App extends React.Component<AppProps> {
    constructor(props: AppProps) { 
        super(props)

        this.state = { fetching: false}
    }

    componentDidUpdate(prevProps: AppProps): void {
        if (!prevProps.todos && this.props.todos.length) {
         this.state = { fetching: false}
        }
    }

    onButtonClick = (): void => {
        this.props.fetchTodos();
        this.setState({ fetching: true })
    }

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
             return <div key={todo.id}>{todo.title}</div>
        });
    }

    render() {
        return (
        <div>
            <button onClick={this.onButtonClick}>Fetch</button>
            { this.state.fetching ? 'LOADING' : null}
            {this.renderList()}
        </div>
        );
    }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[]} => {
    return { todos  };
};

export const App = connect(
    mapStateToProps,
    { fetchTodos }
)(_App);