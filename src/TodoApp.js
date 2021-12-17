import React, { useReducer, useState } from 'react'

const types = {
  add:      "add",
  update:   "update",
  delete:   "delete",
};

const initialTodos = [
  {id: 1, title: "Titulo 1"},
  {id: 2, title: "Titulo 2"},
];

const reducer = (state, action) => {

    switch (action.type) {
      case types.delete:
        return state.filter((todo) => todo.id !== action.payload);
        break;
      case types.add:
        return [...state, action.payload];
        break;
      case types.update:{
          const todoEdit = action.payload;
          return state.map( todo => todo.id === todoEdit.id ? todoEdit : todo );
      }
      break;
      default:
        return state;
      break;
    }
}

const TodoApp = () => {

    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = { id: Date.now(), title: text }
        dispatch({
          type: types.add,
          payload: newTodo,
        });
    };

    return (
      <div>
        <h2>Lista</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <button
                onClick={() =>
                  dispatch({
                    type: types.delete,
                    payload: todo.id,
                  })
                }
              >
                Eliminar
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: types.update,
                    payload: {
                        ...todo, title:text
                    },
                  })
                }
              >
                Actualizar
              </button>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nueva Tarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </div>
    );
}

export default TodoApp
