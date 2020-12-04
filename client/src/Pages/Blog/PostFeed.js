import React, { useState, useEffect } from "react";
import PostService from "../../Shared/PostService";
import Modal from "../../Components/Modal";
import { BiEdit, BiTrash } from "react-icons/bi";
import "./Blog.css";
import "../../Styles/Buttons.css";

export default function Posts({ deletePost, posts }) {
  const [postId, setPostId] = useState(null);

  return (
    <>
      {posts
        ? posts.map((post) => {
            return (
              <div className="post marginY">
                <div className="content">{post.content}</div>
                <div style={{ display: "flex" }}>
                  <button
                    className="postIconButton"
                    onClick={() => deletePost(post._id)}
                  >
                    <BiTrash />
                  </button>
                  <button className="postIconButton">
                    <BiEdit />
                  </button>
                </div>
              </div>
            );
          })
        : null}
      {/* <Modal visible={true}>
        <div className="post marginY">
          <div className="content">"modalic"</div>
          <div style={{ display: "flex" }}>
            <button className="postIconButton">
              <BiEdit />
            </button>
          </div>
        </div>
      </Modal> */}
    </>
  );
}
