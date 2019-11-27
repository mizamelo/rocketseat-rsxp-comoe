const Notification = require("../models/Notification")

module.exports = {
  async index(req, res) {
    const notifications = await Notification.find({
      user: "5ddd908c940ee4413c2c77fa"
    })
      .sort({ createdAt: "desc" })
      .limit(20)

    return res.json(notifications)
  },

  async store(req, res) {
    const { user_id, user_name } = req.body

    const notifica = await Notification.create({
      content: `Nova solicitação de conexão de ${user_name}`,
      user: user_id
    })

    return res.json(notifica)
  },

  async update(req, res) {
    const notifications = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    )

    return res.json(notifications)
  }
}
