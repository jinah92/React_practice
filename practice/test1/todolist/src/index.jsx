import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";
import ToDoList from './ToDoList';


ReactDOM.render(
    <ToDoList />,
    document.querySelector('#container')
);

export default ToDoList;