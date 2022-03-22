import { useState } from "react";
import { useBlog } from "../../hooks/useBlog";
import Long from "../Long/Long";
import Recent from "../Recent/Recent";
import Short from "../Short/Short";

const Blog = () => {
  const [old, setOld] = useState("2022");

  const [recentData] = useBlog();
  const selectedBlogs = recentData.filter(
    (blog) => blog.datetime.slice(0, 4) === old
  );
  const selectBlogs = recentData.filter(
    (blog) => blog.datetime.slice(0, 4) !== old
  );
  console.log("////", selectBlogs, selectedBlogs);

  return (
    <div class="container mt-5">
      <h2 className="text-white fw-bold">Recent</h2>
      <div class="row">
        {selectedBlogs
          .sort()
          .reverse()
          .map((data) => (
            <Recent key={data._id} data={data}></Recent>
          ))}
      </div>
      <h2 className="fw-bold text-white">Old</h2>
      <div class="row">
        {selectBlogs
          .sort()
          .reverse()
          .map((data) => (
            <Recent key={data._id} data={data}></Recent>
          ))}
      </div>

      {/* {
        shortstories && (
          <>
          <h2 className="fw-bold text-white">Short</h2>
      <div class="row">
        {selectedRecentBlogs
          .sort()
          .reverse()
          .map((data) => (
            <Short key={data._id} data={data}></Short>
          ))}
      </div> 
          </>
        )
      }

     {
       longstories && (
         <>
         <h2 className="fw-bold text-white">Long</h2>
      <div class="row">
        {selectOldBlogs
          .sort()
          .reverse()
          .map((data) => (
            <Long key={data._id} data={data}></Long>
          ))}
      </div>
    
         </>
       )
     } */}
    </div>
  );
};

export default Blog;
