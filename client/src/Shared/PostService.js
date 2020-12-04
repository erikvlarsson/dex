import ApiService from "./ApiService";

class PostService extends ApiService {
  createPost = async (post) => {
    let result = null;
    await this.Api.post("/posts", post)
      .then((response) => {
        if (response.status === 201) {
          result = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return result;
  };

  getPosts = async (userData) => {
    let posts = null;
    await this.Api.get("/posts", userData)
      .then((response) => {
        if (response.status === 200) {
          posts = response.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return posts;
  };

  deletePost = async (postId) => {
    let deletion = null;
    await this.Api.delete(`/posts/${postId}`)
      .then((response) => {
        if (response.status === 200) {
          deletion = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return deletion;
  };

  updatePost = async (post) => {
    let didUpdate = null;
    await this.Api.put("/posts", post)
      .then((response) => {
        if (response.status === 200) {
          didUpdate = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return didUpdate;
  };
}

export default PostService;
