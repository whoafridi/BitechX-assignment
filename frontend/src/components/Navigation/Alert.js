import React,{useEffect, useState} from 'react'
import {Row, Col, Button} from 'react-bootstrap'

const Alert = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlogType, setSelectedBlogType] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:5000/blogs"
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const selectedBlogs = blogs.filter((blog) => blog.type === selectedBlogType);
  console.log(blogs);
  console.log(selectedBlogs);

  let old ={};
  for (let key in blogs) { 
    let value;

    // get the value
    value = blogs[key];
    if(value.datetime.slice(0,4) === '2020' || value.datetime.slice(0,4) === '2021'){
      old += value 
    
    }
} 
console.log(old);

  return (
    <>
  
<div className="card mb-3 d-flex flex-col" >
  <div className="row g-0">
    <div className="col-md-2">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-3">
      {
        blogs.map((a) => <p>{console.log(a.datetime.slice(0,4) === '2020')}</p>)
      }
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div className="col-md-2 ms-2">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-3">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Alert