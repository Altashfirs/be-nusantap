const { Page } = require('../models');

exports.getAll = async (req, res, next) => {
  try {
    const pages = await Page.findAll();
    res.json(pages);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const page = await Page.findByPk(req.params.id);
    if (!page) return res.status(404).json({ error: 'Not found' });
    res.json(page);
  } catch (err) { next(err); }
};

exports.getBySlug = async (req, res, next) => {
  try {
    const page = await Page.findOne({ where: { slug: req.params.slug } });
    if (!page) return res.status(404).json({ error: 'Not found' });
    res.json(page);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const page = await Page.create(req.body);
    res.status(201).json(page);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const page = await Page.findByPk(req.params.id);
    if (!page) return res.status(404).json({ error: 'Not found' });
    await page.update(req.body);
    res.json(page);
  } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
  try {
    const page = await Page.findByPk(req.params.id);
    if (!page) return res.status(404).json({ error: 'Not found' });
    await page.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
};