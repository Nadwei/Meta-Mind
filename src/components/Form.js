import React, { useCallback } from "react";
import ErrorBoundary from "./ErrorBoundary";





export default function Form({ handleExitClick, 
                               formData,
                               handleFormSubmit,
                               handleInputChange }) {



  return (
<ErrorBoundary componentName="Form">
    <form id="form" onSubmit={handleFormSubmit}>

      <div className="form-top"> 
        <h2 className="form-title">New Item</h2>
        <i className="exit fa-regular fa-rectangle-xmark"
          onClick={handleExitClick}></i>
      </div>
      <label className="all-labels item-type-label" htmlFor="itemType-id">
        Item Type:
        <select id="itemType-id" name="itemType" value={formData.itemType} onChange={handleInputChange}>
          <option value="goal">Goal</option>
          <option value="task">Task</option>
          <option value="habit">Habit</option>
          <option value="note">Note</option>
        </select>
      </label>
      <label className="all-labels title-label" htmlFor="title-id">
        Title:
        <input
          id="title-id"
          name="title"
          type="text"
          placeholder="Add a title"
          value={formData.title}
          onChange={handleInputChange}
        ></input>
      </label>
      <label className="all-labels description-label" htmlFor="description-id">
        Description:
      </label>
      <textarea
        id="description-id"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Add a description"
      />

      <button id="submit-btn" type="submit">
        Create item!
      </button>
    </form>
    </ErrorBoundary>
  ) //end of return statement
} //end of Form component
