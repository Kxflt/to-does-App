import { array, func } from "prop-types";
import classnames from "classnames";
import "./todos.css";

function Todos({ todos, removeTodo, changeStateTodo }) {
  return (
    <div className="todos-container">
      {todos.map((item) => {
        return (
          <div key={item.id} className="todo-item">
            <p
              className={classnames("todo-text", {
                "todo-text-done": item.state === "done",
              })}
            >
              {item.content}
            </p>
            <div className="todo-actions">
              <input
                type="checkbox"
                onChange={(e) => changeStateTodo(e.target.checked, item.id)}
                checked={item.state === "done"}
              />
              <button onClick={() => removeTodo(item.id)}>
                <img src="src/assets/basura.png" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Todos.propTypes = {
  todos: array,
  removeTodo: func,
  changeStateTodo: func,
};

export default Todos;
