const { FundsTransaction } = require('../models');

exports.getAll = async (req, res, next) => {
  try {
    const transactions = await FundsTransaction.findAll({ include: 'Donation' });
    res.json(transactions);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const transaction = await FundsTransaction.findByPk(req.params.id, { include: 'Donation' });
    if (!transaction) return res.status(404).json({ error: 'Not found' });
    res.json(transaction);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const transaction = await FundsTransaction.create(req.body);
    res.status(201).json(transaction);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const transaction = await FundsTransaction.findByPk(req.params.id);
    if (!transaction) return res.status(404).json({ error: 'Not found' });
    await transaction.update(req.body);
    res.json(transaction);
  } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
  try {
    const transaction = await FundsTransaction.findByPk(req.params.id);
    if (!transaction) return res.status(404).json({ error: 'Not found' });
    await transaction.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
};