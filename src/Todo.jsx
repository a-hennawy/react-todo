import React, { useState } from "react";

function Todo({ id, text, priority = "white" }) {
  const prioLevel =
    priority === "2" ? "yellow" : priority === "3" ? "red" : "white";

  return (
    <li>
      <div className="todo" style={{ border: `5px ${prioLevel} solid` }}>
        {text}
      </div>
    </li>
  );
}

export default Todo;
