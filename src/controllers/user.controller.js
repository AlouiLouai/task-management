const httpStatus = require("http-status");
const { ApiError, CatchAsync } = require("../utils");
const { UserService } = require("../services");

const createUser = CatchAsync(async (req, res) => {
  const user = await UserService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = CatchAsync(async (req, res) => {
  const page = parseInt(req.query.page);
  const pageSize = parseInt(req.query.pageSize);
  const result = await UserService.queryUsers(page, pageSize);
  res.send(result);
});

const getUser = CatchAsync(async (req, res) => {
  const user = await UserService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(user);
});

const updateUser = CatchAsync(async (req, res) => {
  const user = await UserService.updateUserById(req.params.userId, req.body);
  res.send(user);
});

const deleteUser = CatchAsync(async (req, res) => {
  await UserService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
