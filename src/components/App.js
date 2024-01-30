import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectCategory, setSelectCategory] = useState('All');

 const handleDelete = (deleteTask) => {
  const updatedTasks = tasks.filter(task => task.text !== deleteTask.text)
  setTasks(updatedTasks)
 }

 function handleCategoryClick(category){
  setSelectCategory(category)
 }

 function handleTaskSubmit(newTask){
  setTasks([...tasks, newTask])
 }

const filteredTask = selectCategory === 'All' ? tasks : tasks.filter(task => task.category === selectCategory)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectCategory={selectCategory} onCategoryChange={handleCategoryClick} categories={categories}/>
      <NewTaskForm onTaskFormSubmit={handleTaskSubmit} categories={categories}/>
      <TaskList onDelete={handleDelete} tasks={filteredTask}/>
    </div>
  );
}

export default App;
