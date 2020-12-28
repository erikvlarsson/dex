import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostService from "../../../Shared/PostService";
import AddPostButton from "../../../Components/AddPostButton";
import Spinner from "../../../Components/Loading/Spinner";

export default function Posts({ filter, applyFilter }) {
  const [posts, setPosts] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const postService = new PostService();
  useEffect(() => {
    if (!hasLoaded) {
      postService.getPosts().then((posts) => {
        setPosts(posts);
        setHasLoaded(true);
      });
    }
  });
  const updateFilter = (e) => {
    applyFilter(e.target.value);
    alert(filter);
  };
  return (
    <div className="postColumn">
      <header>
        <div className="newPost">
          <Link to="/feel">
            <AddPostButton />
          </Link>
        </div>
        <select onChange={updateFilter}>
          <option>All</option>
          <option>Energy</option>
          <option>Lethargy</option>
        </select>
      </header>
      {/* {posts ? (
        posts.map((post) => {
          const emoji = post.feeling > 0 ? "😀" : "😒";
          return (
            <div className="post">
              <div>{emoji}</div> {JSON.stringify(post.factors)}
            </div>
          );
        })
      ) : (
        <Spinner />
      )} */}
    </div>
  );
}
