import "./App.css";
import UseMemoExample from "./components/UseMemoExample";
import UseRefExample1 from "./components/UseRefExample";
import UseRefExample2 from "./components/UseRefExample2";
import UseRefExample3 from "./components/UseRefExample3";

function App() {
  return (
    <div className="container mt-5">
      <UseRefExample1 />
      <UseRefExample2 />
      <UseRefExample3 />
      <UseMemoExample />
    </div>
  );
}

export default App;
