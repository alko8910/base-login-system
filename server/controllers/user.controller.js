import User from '../models/user.model.js';
import _ from 'lodash';
import errorHandler from '../helpers/dbErrorHandler.js';

const create = (req, res, next) => {
  const user = new User(req.body);
  user.save((err, result) => {
    if (err) {
      return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
    res.status(200).json({ message: 'Successfully created a new user.' });
  });
};
const list = (req, res) => {
  User.find((err, users) => {
    if (err) {
      return res.status(400).json({ error: errorHandler.getErrorMessage() });
    }
    res.status(200).json(users);
  }).select('name email updated created');
};
const userByID = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(404).json({ error: 'User not found!' });
    }
    req.profile = user;
    next();
  });
};
const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  res.status(200).json(req.profile);
};


export default { create, userByID, read, list };