import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import { blog } from "../../assets/data/data";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineClockCircle, AiOutlineDelete } from "react-icons/ai";

export const Details = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id));

    if (blogs) {
      setBlogs(blogs);
    }
  });
  return (
    <>
      {blogs ? (
        <section className="singlePost">
          <div className="coverPhoto">
            <img src={blogs.cover} alt="" />
          </div>

          <div className="postBody">
            <div className="tags">
              {blogs.category.map((category, index) => (
                <div className="tag" key={index}>
                  <a href="">{category}</a>
                </div>
              ))}
            </div>
            <h1>{blogs.title}</h1>
            <div className="date">
              <AiOutlineClockCircle className="icon" />
              <label htmlFor="">{blogs.date}</label>
            </div>
            <p>{blogs.desc}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      ) : null}
    </>
  );
};
