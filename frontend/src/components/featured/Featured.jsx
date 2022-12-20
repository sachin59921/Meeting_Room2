import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  console.log("dfsdsd")
  const {data,loading, error} = useFetch("hotels/countByCity?cities=neemuch,mumbai,london");

  return (
    <div className="featured">
      {
      loading ? ("Loading please wait") : (
          <>
          <div className="featuredItem">
          <img
            src="https://images.unsplash.com/photo-1572025442811-aa5146a780fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>lin</h1>
            <h2>{data[0]}</h2>
          </div>
        </div>
        
        <div className="featuredItem">
          <img
            src="https://images.unsplash.com/photo-1605610973140-02080d1905ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Reno</h1>
            <h2>533 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://images.unsplash.com/photo-1595736965532-831085afd0e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="featuredImg"
            />
          <div className="featuredTitles">
            <h1>Austin</h1>
            <h2>532 properties</h2>
          </div>
        </div>
      </>
    )
      }
    </div>
  );
};

export default Featured;
