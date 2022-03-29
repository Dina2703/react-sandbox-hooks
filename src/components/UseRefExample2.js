import { useState, useRef, useEffect } from "react";

function useRefExample2() {
  const renders = useRef(1);
  const prevName = useRef("");
  const [name, setname] = useState("");

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);
  return (
    <div>
      <h3>➡️ Example 2. useRef to get previous state of a component.</h3>
      <p>Renders: {renders.current}</p>
      <p>Previous name state: {prevName.current}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        className="form-control mb-3x"
      />
    </div>
  );
}

export default useRefExample2;
