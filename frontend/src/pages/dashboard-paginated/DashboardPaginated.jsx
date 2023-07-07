import ReactPaginate from "react-paginate";
import Todos from "../../components/list/todos/Todos";
import Block from "../../components/shared/block/Block";

import "./dashboard-paginated.css";

function DashboardPaginated() {
  const todos = [];
  return (
    <Block text="Mis tareas">
      {todos.length > 0 ? (
        <Todos todos={todos} removeTodo={() => {}} changeStateTodo={() => {}} />
      ) : (
        <p className="empty-state">Aún no tienes ninguna tarea creada.</p>
      )}
      <div className="pagination-container">
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel="Siguiente"
          onPageChange={(e) => console.log(e)}
          pageRangeDisplayed={3}
          pageCount={10}
          previousLabel="Anterior"
          renderOnZeroPageCount={null}
        />
      </div>
    </Block>
  );
}

export default DashboardPaginated;
