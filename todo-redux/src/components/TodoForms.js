import React, { useState } from 'react';
import { v4 } from "uuid";
import {
    Container,
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap"

import { connect } from "react-redux";
import { addtodo } from "../actions/todo";

const TodoForm = ({ addtodo }) => {
    const [title, setTitle] = useState('');


    const handelSubmit = e => {
        e.preventDefault();
        console.log(title)
        if (title === "") { return alert("Its empty") };

        const todo = {
            title,
            id: v4()
        }

        addtodo(todo);

        setTitle("");
    }
    return (
        <Form onSubmit={handelSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Enter the text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend" />
                    <Button color="primary" onClick={handelSubmit} > ADD</Button>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    addtodo: todo => {
        dispatch(addtodo(todo));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);