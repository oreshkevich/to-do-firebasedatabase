function ToDo({ todo, toggleTask, deleteNote }) {
  const dataChange = () => {
    toggleTask(todo.idTime, todo.id);
  };
  const buttonClick = () => {
    deleteNote(todo.id);
  };
  return (
    <div key={todo.id} className="item-todo">
      <button className="item-delete" onClick={buttonClick}>
        X
      </button>
      <div
        className={todo.complete ? 'item-text strike' : 'item-text'}
        onClick={dataChange}
      >
        <div>
          <span>Название: </span>
          {todo.nameTask}
        </div>

        <div>
          <span>Описание: </span>
          {todo.descriptionTask}
        </div>
        <div>
          <span>Дата: </span>
          {todo.completionDate}
        </div>
        <div>
          <span>Документ: </span>
          {todo.image}
        </div>
      </div>
    </div>
  );
}

export default ToDo;

