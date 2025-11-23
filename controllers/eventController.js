const { EventProgram } = require('../models');

exports.getAll = async (req, res, next) => {
  try {
    const programs = await EventProgram.findAll();
    res.json(programs);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const program = await EventProgram.findByPk(req.params.id);
    if (!program) return res.status(404).json({ error: 'Not found' });
    res.json(program);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const program = await EventProgram.create(req.body);
    res.status(201).json(program);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const program = await EventProgram.findByPk(req.params.id);
    if (!program) return res.status(404).json({ error: 'Not found' });
    await program.update(req.body);
    res.json(program);
  } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
  try {
    const program = await EventProgram.findByPk(req.params.id);
    if (!program) return res.status(404).json({ error: 'Not found' });
    await program.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
};