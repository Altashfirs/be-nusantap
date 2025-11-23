const jwt = require('jsonwebtoken');

module.exports = {
  authenticate: (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ error: 'Invalid token' });
      req.user = user;
      next();
    });
  },
  isAdmin: (req, res, next) => {
    if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admin access required' });
    next();
  },
  isStaffOrAdmin: (req, res, next) => {
    if (!['admin', 'staff'].includes(req.user.role)) return res.status(403).json({ error: 'Staff or admin access required' });
    next();
  },
};