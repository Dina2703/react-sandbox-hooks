import { useState } from "react";
import Todo from "./Todo";

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true);
  return (
    <div>
      <h3 className="mt-4">➡️ Example 3. useRef for memory leak error fix</h3>
      {showTodo && <Todo />}
      <button
        className="btn btn-primary"
        onClick={() => {
          setShowTodo(!showTodo);
        }}
      >
        Toggle Todo
      </button>
    </div>
  );
}

export default UseRefExample3;
