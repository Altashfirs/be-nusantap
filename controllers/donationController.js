const { Donation, DonationItem } = require('../models');

exports.getAll = async (req, res, next) => {
  try {
    const donations = await Donation.findAll({ include: ['User', 'DonationItems'] });
    res.json(donations);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const donation = await Donation.findByPk(req.params.id, { include: ['User', 'DonationItems'] });
    if (!donation) return res.status(404).json({ error: 'Not found' });
    if (donation.user_id !== req.user.id && req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
    res.json(donation);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const donation = await Donation.create({ ...req.body, user_id: req.user.id });
    if (req.body.items && req.body.donate_type === 'food') {
      const items = req.body.items.map(item => ({ ...item, donation_id: donation.donation_id }));
      await DonationItem.bulkCreate(items);
    }
    res.status(201).json(donation);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const donation = await Donation.findByPk(req.params.id);
    if (!donation) return res.status(404).json({ error: 'Not found' });
    await donation.update(req.body);
    res.json(donation);
  } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
  try {
    const donation = await Donation.findByPk(req.params.id);
    if (!donation) return res.status(404).json({ error: 'Not found' });
    await donation.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
};