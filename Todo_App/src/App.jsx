import { useState } from "react";
import "./App.css"
const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState([]);

  //AddTODO function
  const addTodo = (event) => {
    event.preventDefault();

    const obj = {
      title,
      description,
      id: Date.now(),
    };

    setTodo([...todo, obj]);
    setTitle("");
    setDescription("");
  };
  //Updation
  const updateTodo = (action, index) => {
    if (action === "delete") {
      const updated = [...todo];
      updated.splice(index, 1);
      setTodo(updated);
    } else {
      const updatedTitle = prompt("Enter updated title", todo[index].title);
      const updated = [...todo];
      updated[index].title = updatedTitle;
      setTodo(updated);
    }
  };

  return (
    <>
    <div className="app-container">
      <h1 className="heading">✨ Todo App</h1>

      <form className="form" onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button className="btn-add" type="submit">
          ➕ Add Todo
        </button>
      </form>

      <div className="todo-container">
        {todo.length > 0 ? (
          todo.map((item, index) => (
            <div className="card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="actions">
                <button
                  className="btn delete"
                  onClick={() => updateTodo("delete", index)}
                >
                  ❌
                </button>
                <button
                  className="btn edit"
                  onClick={() => updateTodo("update", index)}
                >
                  ✏️
                </button>
              </div>
            </div>
          ))
        ) : (
          <h3 className="empty">No todo found</h3>
        )}
      </div>
    </div>
    </>
  )
}







export default App