const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      match: [/.{1,280}/, 'Limit of 1 to 280 characters']
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  }
);

// get total count of friends
UserSchema.virtual('friendCount').get(function() {
  return this.friends.reduce(
    (total, user) => total + user.friends.length + 1,
    0
  );
});

const User = model('User', UserSchema);

module.exports = User;