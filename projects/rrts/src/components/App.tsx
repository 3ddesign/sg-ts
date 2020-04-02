import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
    todos: Todo[];
    fetchTodos(): any;

}

export class _App extends React.Component<AppProps> {
    render() {
        this.props.fetchTodos
        return <div>Test!</div>
    }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[]} => {
    return { todos  };
};

export const App = connect(
    mapStateToProps,
    { fetchTodos }
)(_App);