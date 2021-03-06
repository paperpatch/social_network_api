const { User, Thought } = require('../models');

const userController = {
  // get all users
  getAllUser(req, res) {
    User.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // createUser
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },

  // update user by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // delete user
  deleteUser({ params }, res) {
    console.log("params:", params);
    Promise.all([
      Thought.deleteMany({ userId: params.id }),
      User.findOneAndRemove({ _id: params.id })
    ])
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },

  // add friend
  addFriend({ params, body }, res) {
    console.log("params:", params);
    console.log("body", body);
    User.findOneAndUpdate(
      { _id: params.id },
      { $push: { friends: body } },
      { new: true, runValidators: true }
    )
      .then(dbFriendData => {
        if (!dbFriendData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbFriendData);
      })
      .catch(err => res.json(err));
  },

  // remove friend
  removeFriend({ params }, res) {
    console.log("params:", params);
    User.findOneAndUpdate(
      { _id: params.id },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then(dbFriendData => res.json(dbFriendData))
      .catch(err => res.json(err));
  }
};

module.exports = userController;
