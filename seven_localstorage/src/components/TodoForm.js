import React, { useState } from "react";
import {
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Container
} from "reactstrap";

import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
    const [todoString, setTodoString] = useState("")

    const handelSubmit = e => {
        e.preventDefault();

        if (todoString === "") return console.error("Todo is empty");

        const todo = {
            todoString,
            id: v4()
        }

        addTodos(todo);

        setTodoString("");
    }
    return (
        <Form onSubmit={handelSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input type="text" id="todo" name="todo" placeholder="Enter a todo"
                        value={todoString} onChange={e => setTodoString(e.target.value)} />
                    <InputGroupAddon addonType="prepend">
                        <Button color="success">
                            Add Todo
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;