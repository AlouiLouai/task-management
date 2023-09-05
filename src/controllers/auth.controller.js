const httpStatus = require('http-status');
const { CatchAsync } = require('../utils');
const { AuthService, UserService, TokenService, EmailService } = require('../services');

const register = CatchAsync(async (req, res) => {
  const user = await UserService.createUser(req.body);
  const tokens = await TokenService.generateAuthTokens(user);
  res.status(httpStatus.CREATED).send({ user, tokens });
});

const login = CatchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await AuthService.loginUserWithEmailAndPassword(email, password);
  const tokens = await TokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

const logout = CatchAsync(async (req, res) => {
  await AuthService.logout(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const refreshTokens = CatchAsync(async (req, res) => {
  const tokens = await AuthService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

const forgotPassword = CatchAsync(async (req, res) => {
  const resetPasswordToken = await TokenService.generateResetPasswordToken(req.body.email);
  await EmailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const resetPassword = CatchAsync(async (req, res) => {
  await AuthService.resetPassword(req.query.token, req.body.password);
  res.status(httpStatus.NO_CONTENT).send();
});

const sendVerificationEmail = CatchAsync(async (req, res) => {
  const verifyEmailToken = await TokenService.generateVerifyEmailToken(req.user);
  await EmailService.sendVerificationEmail(req.user.email, verifyEmailToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const verifyEmail = CatchAsync(async (req, res) => {
  await AuthService.verifyEmail(req.query.token);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  sendVerificationEmail,
  verifyEmail,
};