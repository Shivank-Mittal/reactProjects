import React from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Todo from "./components/Todos";
import TodoForms from "./components/TodoForms";

import { Provider } from 'react-redux';
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Container fluid>
        <Todo />
        <TodoForms />
      </Container>
    </Provider>
  );
}

export default App;
