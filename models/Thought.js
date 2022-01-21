const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent thought _id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      match: [/.{1,280}/, 'Limit of 1 to 280 characters']
    },
    username: {
      type: String,
      required: true
    },
    createdAt: 
    {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  }
)

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
    username: {
      type: String,
      required: true
    },
    // use ReactionSchema to validate data for a reaction
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of friends
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;