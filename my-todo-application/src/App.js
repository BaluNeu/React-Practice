import React from 'react';
import './App.scss';
import ToDoList from './ToDoList/ToDoList';

class App extends React.Component {
 
  render() {

    return (
  
      <div className='App'>
        <h1>Todo-App
    
        </h1>
    <ToDoList></ToDoList>
    </div>);
  }
}

export default App;
