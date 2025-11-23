const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.getAll = async (req, res, next) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ['password_hash'] } });
    res.json(users);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, { attributes: { exclude: ['password_hash'] } });
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json(user);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Not found' });
    if (req.body.password) req.body.password_hash = await bcrypt.hash(req.body.password, 10);
    await user.update(req.body);
    res.json(user);
  } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Not found' });
    await user.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
};