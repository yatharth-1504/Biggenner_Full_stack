import BlogList from "../components/BlogList";
import useFetch from "../hooks/fetch";

const Home = ({ refresh }) => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blog/getblogs", refresh);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && blogs.length && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
