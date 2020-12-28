import React, { useEffect, useState } from "react";
import PostService from "../../../Shared/PostService";
import JournalForm from "../Components/JournalForm";
import Post from "../Components/Post";

export default function Journal() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [posts, setPosts] = useState(null);
  const postService = new PostService();

  useEffect(() => {
    if (!hasLoaded) {
      refreshPosts();
    }
  });

  const refreshPosts = () => {
    postService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.reverse());
        setHasLoaded(true);
      }
    });
  };

  const createPost = (text) => {
    postService.createPost("text", text).then(() => {
      refreshPosts();
    });
  };

  const deletePost = (postId) => {
    postService.deletePost(postId).then(() => {
      refreshPosts();
    });
  };

  return (
    <div>
      <JournalForm createPost={createPost} />
      {posts && posts.length > 0
        ? posts.map((post) => <Post data={post} deletePost={deletePost} />)
        : null}
    </div>
  );
}
