import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {
    render() {
        const list = this.props.items;
        const elements = list.map((element, i) => (
            <li key={i}>
                {<Todo
                        text={element.text}
                        dueDate={element.dueDate}
                        priority={element.priority}
                    />}
            </li>
        ));
        return <ul>{elements}</ul>
    }
}
