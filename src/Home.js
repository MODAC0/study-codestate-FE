import BlogList from "./blogComponent/BlogList";
import Loading from "./component/Loading";

const Home = ({blogs, isPending}) => {
    return (
      <div className="home">
        {isPending && <Loading />}
        {blogs && <BlogList blogs={blogs} />}
      </div>
    );
}
  
export default Home; 