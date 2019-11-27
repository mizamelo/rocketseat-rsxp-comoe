const Notification = require("../models/Notification")

module.exports = {
  async index(req, res) {
    
    const notifications = await Notification.find({
      user: req.params.id
    })
      .sort({ createdAt: "desc" })
      .limit(20)

    return res.json(notifications)
  },

  async store(user_id, user_name) {
    const notifica = await Notification.create({
      content: `Nova solicitação de conexão de ${user_name}`,
      user: user_id
    })

    return notifica;
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
