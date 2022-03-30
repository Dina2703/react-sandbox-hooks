import useLocalStorage from "../hooks/useLocalStorage";

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };

  return (
    <div className="my-5 ">
      <h3>Custom Hook example #2. UseLocalStorage</h3>
      <form className="w-50" onSubmit={onSubmit}>
        <div className="md-3">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <input
            id="task"
            className="form-control"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button className="btn btn-success mt-3" type="submit">
          Submit
        </button>
      </form>
      <hr />
      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </div>
  );
}

export default CustomHookExample2;
