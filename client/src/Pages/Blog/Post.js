import React, { useState, useEffect } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import "./Blog.css";
import "../../Styles/Buttons.css";

export default function Posts({ post, deletePost, editable }) {
  return (
    <div className="post marginY">
      <div className="content">{post.content}</div>
      <div style={{ display: "flex" }}>
        <button className="postIconButton" onClick={() => deletePost(post._id)}>
          <BiTrash />
        </button>
        <button className="postIconButton">
          <BiEdit />
        </button>
      </div>
    </div>
  );
}
