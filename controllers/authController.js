const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
  try {
    const { full_name, email, phone, password, role } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ full_name, email, phone, password_hash: hash, role });
    res.status(201).json(user);
  } catch (err) { next(err); }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    user.last_login = new Date();
    await user.save();
    const token = jwt.sign({ id: user.user_id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user });
  } catch (err) { next(err); }
};