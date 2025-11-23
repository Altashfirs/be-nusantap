const { Stat } = require('../models');

exports.getAll = async (req, res, next) => {
  try {
    const stats = await Stat.findAll();
    res.json(stats);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const stat = await Stat.findByPk(req.params.id);
    if (!stat) return res.status(404).json({ error: 'Not found' });
    res.json(stat);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const stat = await Stat.create(req.body);
    res.status(201).json(stat);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const stat = await Stat.findByPk(req.params.id);
    if (!stat) return res.status(404).json({ error: 'Not found' });
    await stat.update(req.body);
    res.json(stat);
  } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
  try {
    const stat = await Stat.findByPk(req.params.id);
    if (!stat) return res.status(404).json({ error: 'Not found' });
    await stat.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
};