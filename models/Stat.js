const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Stat = sequelize.define('Stat', {
    stat_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING(150),
    value: { type: DataTypes.INTEGER, defaultValue: 0 },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  });

  return Stat;
};