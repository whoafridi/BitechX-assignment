import React from "react";
import "./Recent.css";

const Recent = (props) => {
  const { title, body, image, datetime } = props.data;

  return (
    <>
      {image === "NULL" ? (
        <div className="col-lg-6">
          <div className="card recentBody mb-3">
            <div className="row g-0 recentBody">
              <div className="">
                <div className="card-body recentBody">
                  <p className="card-text text-white recentBody">{body.slice(0, 150)}</p>
                  <p className="card-text text-white recentBody">{datetime.slice(0, 10)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-6">
          <div className="card border-0 recentBody mb-3">
            <div className="row g-0">
              <div className="col-md-9">
                <div className="card-body recentBody">
                  <h5 className="card-title TitleColor recentBody">{title}</h5>
                  <p className="card-text text-white recentBody">{body.slice(0, 100)}</p>
                  <p className="card-text text-white recentBody">{datetime.slice(0, 10)}</p>
                </div>
              </div>

              <div className="col-md-3 d-flex justify-content-center align-items-center recentBody">
                  <div className="text-center recentBody">
                  <img
                  className="img-fluid rounded-start"
                  src={image}
                  alt="img not load"
                />
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Recent;
