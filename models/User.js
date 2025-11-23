const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    full_name: { type: DataTypes.STRING(150), allowNull: false },
    email: { type: DataTypes.STRING(150), unique: true },
    phone: DataTypes.STRING(20),
    password_hash: DataTypes.STRING(255),
    role: { type: DataTypes.ENUM('admin', 'donor', 'staff'), defaultValue: 'donor' },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    last_login: DataTypes.DATE,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogArticle, { foreignKey: 'author_id', onDelete: 'SET NULL' });
    User.hasMany(models.Donation, { foreignKey: 'user_id', onDelete: 'SET NULL' });
  };

  return User;
};