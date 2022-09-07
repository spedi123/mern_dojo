const Todo = (props) => {
    const {todo, i, handleDelete, handleToggleComplete} = props;
    const todoClasses = ["bold", "italic"]

    if (todo.complete) {
        todoClasses.push("line-through")
    }
    return (
        <div>
            <span className={todoClasses.join(" ")}>{todo.text}</span>
            <input onChange={(event) => {
            handleToggleComplete(i)
            }} checked={todo.complete} type="checkbox" />
            <button onClick={(event) => {
            handleDelete(i);
            }}>Delete</button>
        </div>
  )
}

export default Todo;