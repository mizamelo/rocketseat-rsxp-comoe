const { Schema, model } = require("mongoose")

const NotificationSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    read: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  }
)

module.exports = model("Notification", NotificationSchema)
