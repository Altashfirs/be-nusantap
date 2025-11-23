const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DonationItem = sequelize.define('DonationItem', {
    item_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    donation_id: { type: DataTypes.INTEGER, allowNull: false },
    item_name: { type: DataTypes.STRING(150), allowNull: false },
    quantity: DataTypes.INTEGER,
    unit: DataTypes.STRING(50),
  });

  DonationItem.associate = (models) => {
    DonationItem.belongsTo(models.Donation, { foreignKey: 'donation_id' });
  };

  return DonationItem;
};