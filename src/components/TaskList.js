import React from "react";
import Task from './Task'

function TaskList({tasks, onDelete}) {

  return (
    <div className="tasks">
      {
        tasks.map(task => (
          <Task onDelete={onDelete} key={task.text} tasks={task}/>
        ))
      }
    </div>
  );
}

export default TaskList;
