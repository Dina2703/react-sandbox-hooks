import { useState, useEffect, useRef, useMemo } from "react";

function UseMemoExample() {
  const [number, setnumber] = useState(1);
  const [increment, setincrement] = useState(0);
  const renders = useRef(1);

  // const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setincrement((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  return (
    <div className="my-5">
      <h4>➡️ Example with useMemo() hook</h4>
      <input
        type="number"
        value={number}
        onChange={(e) => setnumber(e.target.value)}
        className="form-control w-25"
      />
      <h5>Renders: {renders.current}</h5>
      <h3 className="mt-3">
        The square root of {number} is {sqrt}
      </h3>
      <button onClick={onClick} className="btn btn-primary">
        Re-render
      </button>
    </div>
  );
}

function getSqrt(number) {
  for (let i = 0; i <= 10000; i++) {
    console.log("Expensive function called!");
  }
  return Math.sqrt(number);
}

export default UseMemoExample;
