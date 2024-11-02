import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTodoForm({ createTodo }) {
  const INIT_VALUE = {
    text: "",
    priority: "",
  };

  const [formData, setFormData] = useState(INIT_VALUE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((tForm) => ({ ...tForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(`${formData.text}, prioLevel: ${formData.priority}`);
    createTodo({ ...formData, id: uuid() });
    setFormData(INIT_VALUE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text"></label>
      <input
        type="text"
        name="text"
        placeholder="What's your plan today?"
        value={formData.text}
        onChange={handleChange}
      />
      <label htmlFor="priority"></label>
      <input
        type="text"
        placeholder="lvl of priority (1: lowest, 3: highest) : "
        name="priority"
        value={formData.priority}
        onChange={handleChange}
      />

      <button>Add Todo!</button>
    </form>
  );
}

export default NewTodoForm;
