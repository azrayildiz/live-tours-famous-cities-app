const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const photoSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },

  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    },
  ],
})
//   comments: [
//     {
//       user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         autopopulate: true,
//       },
//       comment: String,
//     },
//   ],
// })

photoSchema.plugin(autopopulate)

module.exports = mongoose.model('Photo', photoSchema)
