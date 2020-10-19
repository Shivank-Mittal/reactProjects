import React from "react";

import { ListGroup, ListGroupItem } from "reactstrap"
import { FaCross } from 'react-icons/fa';


const Todo = ({ todos, markComplete }) => {

    return (
        <ListGroup className="mt-5 mb-2 items">
            {todos.map(todo => (
                <ListGroupItem Key={todo.id}>
                    {todo.todoString}
                    <span className="float-right"
                        onClick={() => markComplete(todo.id)}
                    > <FaCross /> </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Todo