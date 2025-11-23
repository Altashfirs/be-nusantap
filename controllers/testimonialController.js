const { Testimonial } = require('../models');

exports.getAll = async (req, res, next) => {
  try {
    const testimonials = await Testimonial.findAll();
    res.json(testimonials);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    if (!testimonial) return res.status(404).json({ error: 'Not found' });
    res.json(testimonial);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json(testimonial);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    if (!testimonial) return res.status(404).json({ error: 'Not found' });
    await testimonial.update(req.body);
    res.json(testimonial);
  } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    if (!testimonial) return res.status(404).json({ error: 'Not found' });
    await testimonial.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
};