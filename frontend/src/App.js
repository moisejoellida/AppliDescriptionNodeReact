import React, { Fragment } from 'react';
import './App.css';

//import des composants
import InputTodo from './components/inputTodos';
import ListTodo from './components/listTodos';

function App() {
  return( 
  <Fragment>
    <div className="container">
      <InputTodo/>
      <ListTodo/>
    </div>
  </Fragment>
)};

export default App;
