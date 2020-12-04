import React, { useState, useEffect } from "react";
import PostService from "../../Shared/PostService";
import { BiEdit, BiTrash } from "react-icons/bi";
import PostFeed from "./PostFeed";
import "./Blog.css";
import "../../Styles/Buttons.css";

export default function Posts() {
  const [postInput, setPostInput] = useState("");
  const [postId, setPostId] = useState(null);
  const [posts, setPosts] = useState(null);
  const [postsFetched, setPostsFetched] = useState(false);

  const postService = new PostService();

  const submitPost = async (e) => {
    e.preventDefault();
    await postService.createPost({ content: postInput }).then((response) => {
      if (response) {
        getPosts();
      }
    });
  };
  const getPosts = async () => {
    await postService.getPosts().then((posts) => {
      setPosts(posts.reverse());
      setPostsFetched(true);
    });
  };
  const editPost = () => {};
  const deletePost = (id) => {
    postService.deletePost(id).then(() => {
      getPosts();
    });
  };

  const write = (e) => {
    setPostInput(e.target.value);
  };

  useEffect(() => {
    if (!postsFetched) {
      getPosts();
    }
  });

  return (
    <div className="postScroll">
      <form className="post marginY" onSubmit={submitPost}>
        <textarea
          onBlur={write}
          placeholder="Capture a Feeling, Articulate a Thought..."
        ></textarea>
        {/* <div className="post inputDisplay">{input}</div> */}
        <button id="postButton" className="altButton">
          Publish
        </button>
      </form>
      <PostFeed posts={posts} deletePost={deletePost} />
    </div>
  );
}
