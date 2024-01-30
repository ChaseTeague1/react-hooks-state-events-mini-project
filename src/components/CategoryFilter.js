import React from "react";

function CategoryFilter({categories, onCategoryChange, selectCategory}) {

  function handleClick(category){
    onCategoryChange(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        categories.map(category => (
          <button className={category === selectCategory ? 'selected' : ''} onClick={() => handleClick(category)} key={category}>{category}</button>
        ))
      }
    </div>
  );
}

export default CategoryFilter;