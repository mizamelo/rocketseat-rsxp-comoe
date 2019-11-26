const Dev = require('../models/Dev');
const Mail = require('../services/MailService')

module.exports = {
  async store(req, res) {
    console.log(req.io, req.connectedUsers);

    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user);
    let targetDev = null

    try {
      targetDev = await Dev.findById(devId);
    } catch (error) {
      return res.status(400).json({ error: 'Dev not exists' });
    }

    if (targetDev.likes.includes(loggedDev._id)) {
      const loggedSocket = req.connectedUsers[user];
      const targetSocket = req.connectedUsers[devId];

      if (loggedSocket) {
        req.io.to(loggedSocket).emit('match', targetDev);
        console.log(targetDev);
        await Mail.send({
          from: process.env.MAIL_FROM,
          to: `<mentor@comoe.com.br>`,
          subject: 'Parabéns! Voçê acaba de dar match!',
          html: 'Parabéns! Você acaba de dar match! Você será mentor de Mizael Melo.'
        });
      }

      if (targetSocket) {
        req.io.to(targetSocket).emit('match', loggedDev);
      }
    }

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
};