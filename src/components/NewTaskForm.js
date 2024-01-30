import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [details, setDetails] = useState('');
  const [category, setCategory] = useState(categories[0])

  function handleDetailChange(event){
    setDetails(event.target.value);
  }

function handleCategoryChange(event){
  setCategory(event.target.value)
}

  function handleSubmit(event){
    event.preventDefault();
    const newTask = {text: details, category : category}
    onTaskFormSubmit(newTask);
    setDetails('');
    setCategory('Code')
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailChange} value={details}/>
      </label>
      <label>
        Category
        <select value={category} onChange={handleCategoryChange} name="category">
          {/* render <option> elements for each category here */}
          {
            categories.filter(category => category !== 'All').map(category => (
              <option key={category} value={category} >{category}</option>
            ))
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
