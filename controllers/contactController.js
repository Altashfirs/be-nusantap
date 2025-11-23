const { ContactMessage } = require('../models');

exports.getAll = async (req, res, next) => {
  try {
    const messages = await ContactMessage.findAll();
    res.json(messages);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const message = await ContactMessage.findByPk(req.params.id);
    if (!message) return res.status(404).json({ error: 'Not found' });
    res.json(message);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const message = await ContactMessage.create(req.body);
    res.status(201).json(message);
  } catch (err) { next(err); }
};

exports.markAsRead = async (req, res, next) => {
  try {
    const message = await ContactMessage.findByPk(req.params.id);
    if (!message) return res.status(404).json({ error: 'Not found' });
    await message.update({ is_read: true });
    res.json(message);
  } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
  try {
    const message = await ContactMessage.findByPk(req.params.id);
    if (!message) return res.status(404).json({ error: 'Not found' });
    await message.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
};