import React from "react";

function Task({tasks, onDelete}) {

  function handleDeletedTask(){
    onDelete(tasks)
  }
  return (
    <div className="task">
      <div className="label">{tasks.category}</div>
      <div className="text">{tasks.text}</div>
      <button onClick={handleDeletedTask} className="delete">X</button>
    </div>
  );
}

export default Task;
