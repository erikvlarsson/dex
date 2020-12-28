import authController from "../controllers/AuthController.js";
import postController from "../controllers/postController.js";
import jwt from "jsonwebtoken";

const setRoutes = (app) => {
  app.post("/signup", authController.signup);
  app.post("/login", authController.login);
  app.post(
    "/getRefreshToken",
    withToken,
    verifyRefreshToken,
    authController.getRefreshToken
  );
  app.post(
    "/getAccessToken",
    withToken,
    verifyRefreshToken,
    authController.getAccessToken
  );
  app.get("/clear-all-users", authController.clearUsers);
  // POSTS
  app.post("/posts", withToken, verifyAccessToken, postController.createPost);
  app.get(
    "/posts/:userId",
    withToken,
    verifyAccessToken,
    verifyUserId,
    postController.getPosts
  );
  app.delete(
    "/posts/:postId",
    withToken,
    verifyAccessToken,
    postController.deletePost
  );
  app.put(
    "/posts/:postId",
    withToken,
    verifyAccessToken,
    postController.updatePost
  );
};

export default { setRoutes };

const verifyUserId = (req, res, next) => {
  const userId = req.params.userId; // this one is sent with request
  const tokenUserId = req.user._id; // this one is set by middleware
  if (userId !== tokenUserId) {
    res.sendStatus(401);
  }
  next();
};

const verifyAccessToken = (req, res, next) => {
  const decoded = jwt.verify(req.token, process.env.ACCESS_TOKEN_KEY);
  if (decoded) {
    req.user = decoded.user;
    next();
  } else {
    res.sendStatus(401);
  }
};

const verifyRefreshToken = (req, res, next) => {
  const decoded = jwt.verify(req.token, process.env.REFRESH_TOKEN_KEY);
  if (decoded) {
    req.user = decoded.user;
    next();
  } else {
    res.sendStatus(401);
  }
};

const withToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  const token = bearerHeader && bearerHeader.split(" ")[1];
  if (token) {
    req.token = token;
    next();
  } else {
    res.sendStatus(401);
  }
};
