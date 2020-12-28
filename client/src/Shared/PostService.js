import ApiService from "./ApiService";

class PostService extends ApiService {
  getPosts = async () => {
    let posts = null;
    await this.Api.get(`/posts/${sessionStorage.userId}`)
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

  createPost = async (type, content) => {
    let didCreate = null;
    const post = {
      userId: sessionStorage.userId,
      type: type,
      content: content,
    };
    await this.Api.post("/posts", post)
      .then((response) => {
        if (response.status === 201) {
          didCreate = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return didCreate;
  };

  editPost = async (postId, userId, content) => {
    let didUpdate = null;
    const updatedPost = {
      id: postId,
      userId: userId,
      content: content,
    };
    await this.Api.put(`/posts/${postId}`, updatedPost)
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

  deletePost = async (postId) => {
    let didDelete = null;
    await this.Api.delete(`/posts/${postId}`)
      .then((response) => {
        if (response.status === 200) {
          didDelete = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return didDelete;
  };
}

export default PostService;
