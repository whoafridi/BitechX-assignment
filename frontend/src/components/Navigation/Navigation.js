import React, { useState } from "react";
import { useBlog } from "../../hooks/useBlog";
import "./Navigation.css";

const Navigation = () => {
  const [recentData] = useBlog();
  const [old, setOld] = useState("short");

  const selectedBlogs = recentData.filter((blog) => blog.type === old);
  const selectBlogs = recentData.filter((blog) => blog.type !== old);

  const [blog, setBlog] = useState([]);

  // DELETE AN USER
  const handleDeleteOrder = () => {
    const url = `http:localhost:5000/blogs`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  };

  return (
    <div className="container mt-5 NavBody">
      <nav className="navbar navbar-expand-lg NavBody">
        <div className="container-fluid NavBody">
          <h1 className="navbar-brand  NavBody ms-3 text-white" href="#">
            Blog
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  NavBody"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav  NavBody">
              <button
                className=" NavBody border NavBody rounded-pill  text-danger ms-3"
                onClick={handleDeleteOrder}
              >
                Delete all
              </button>

              <h5 className=" navColor ms-3 text-white  NavBody">
                <span class="badge rounded-pill bg-dark">
                  {selectBlogs.length}
                </span>{" "}
                Long stories
              </h5>
              <label className="label ms-3 NavBody">
                <input type="checkbox" className="label__input" />

                {/* <!-- Circle --> */}
                <div className="label__circle"></div>
              </label>
              <h5 className=" navColor ms-3 text-white  NavBody">
                <span class="badge rounded-pill bg-dark">
                  {selectedBlogs.length}
                </span>{" "}
                Short stories
              </h5>
              <label className="label ms-3">
                <input type="checkbox" className="label__input" />

                {/* <!-- Circle --> */}
                <div className="label__circle"></div>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
