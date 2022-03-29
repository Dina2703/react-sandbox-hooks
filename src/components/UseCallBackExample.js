import React, { useState, useCallback } from "react";

function UseCallBackExample() {
  const [tasks, settasks] = useState([]);

  const addTask = useCallback(() => {
    settasks((prevState) => [...prevState, "Some Task"]);
  }, [settasks]);

  return (
    <div className="my-5">
      <h3>➡️ UseCallBack Example</h3>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
}

const Button = React.memo(({ addTask }) => {
  console.log("Button rendered");
  return (
    <button className="btn btn-warning" onClick={addTask}>
      Add Task
    </button>
  );
});

export default UseCallBackExample;
