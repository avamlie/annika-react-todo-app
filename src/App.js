import logo from './logo.svg';
import './styles.css';
import React, { Component } from 'react';
import Form from './components/Form'
import Header from "./components/Header";
import TODOHero from "./components/TODOHero";
import TODOList from "./components/TODOList";
//import crypto from 'crypto';


function Home() {
    //todos holds current value of state, setTodos is used to update the state
    const [todos, setTodos] = React.useState([]);
    //get the todos that are already completed
    const todos_completed = todos.filter(
      (todo) => todo.is_completed === true
    ).length;
    const total_todos = todos.length;
    return(
      <div className="wrapper">
        <Header />
        <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
        <Form setTodos={setTodos}/>
        <TODOList todos={todos} setTodos={setTodos} />
      </div>
    );
}
export default Home;