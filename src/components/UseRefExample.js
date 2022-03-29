import { useRef } from "react";
function UseRefExample1() {
  const inputRef = useRef();
  const h4Ref = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.style.background = "gray";
    h4Ref.current.innerText = "Goodbye";
  };
  return (
    <div>
      <h3>➡️ Example 1. useRef() hook to access/manipulate DOM elements </h3>
      <h4 className="container text-danger" ref={h4Ref}>
        Hello
      </h4>
      <p>Click 'Submit' changes 'Hello' to 'Bye'</p>
      <p onClick={() => inputRef.current.focus()}>Click me to focus on input</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UseRefExample1;
