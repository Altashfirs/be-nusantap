const { BlogArticle } = require('../models');

exports.getAll = async (req, res, next) => {
  try {
    const articles = await BlogArticle.findAll({ include: 'User' });
    res.json(articles);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const article = await BlogArticle.findByPk(req.params.id, { include: 'User' });
    if (!article) return res.status(404).json({ error: 'Not found' });
    res.json(article);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const article = await BlogArticle.create({ ...req.body, author_id: req.user.id });
    res.status(201).json(article);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const article = await BlogArticle.findByPk(req.params.id);
    if (!article) return res.status(404).json({ error: 'Not found' });
    await article.update(req.body);
    res.json(article);
  } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
  try {
    const article = await BlogArticle.findByPk(req.params.id);
    if (!article) return res.status(404).json({ error: 'Not found' });
    await article.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
};