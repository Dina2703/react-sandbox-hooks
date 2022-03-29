import useFetch from "../hooks/useFetch";

function CustomHookExample() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    {}
  );

  // console.log(data);

  if (loading) {
    <h3>Loading...</h3>;
  }
  return (
    <div>
      <h3>➡️ Custom Hook example. Custom useFetch()</h3>
      {data && data.map((post) => <h5 key={post.id}>{post.title}</h5>)}
    </div>
  );
}

export default CustomHookExample;
