import React, {useState} from 'react'
import './App.css';
import Todo from './components/Todo'

function App() {
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if(newTodo.length === 0) {
      return;
    }  

    const todoItem = {
      text : newTodo,
      complete : false
    }

    setTodos([...todos, todoItem]);
    setNewTodo("");
  }

  const handleDelete = (delIdx) => {
      const filteredTodos = todos.filter((todo, i) => {
        return i !== delIdx;
      })
      setTodos(filteredTodos)
  }

  const handleToggleComplete = (idx) => {
    const updateTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
        // const updateTodo = {...todo, complete: !todo.complete}
        // return updateTodo;
      }
      return todo;
    })

    setTodos(updateTodos)
  }
  return (
    <div>
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event)
      }}>
        <input type="text" value={newTodo} onChange={(event) => {
          setNewTodo(event.target.value) 
        }}/>
        <div>
          <button>Add</button>
        </div>
      </form>
      <hr />
      {
        todos.map((todo, i) => {
          return (
            <Todo
              key={i} 
              todo={todo} 
              handleToggleComplete={handleToggleComplete} 
              handleDelete={handleDelete}
              i={i}
            />
          )
        })
      }
    </div>
  );
}

export default App;
