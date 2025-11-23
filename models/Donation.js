const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Donation = sequelize.define('Donation', {
    donation_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.INTEGER,
    donor_name: DataTypes.STRING(150),
    donor_email: DataTypes.STRING(150),
    donor_phone: DataTypes.STRING(20),
    donate_type: { type: DataTypes.ENUM('food', 'funds'), allowNull: false },
    donation_detail: DataTypes.TEXT,
    delivery_method: { type: DataTypes.ENUM('drop_off', 'pick_up', 'delivery_partner', 'none'), defaultValue: 'none' },
    dedication: DataTypes.STRING(255),
    status: { type: DataTypes.ENUM('pending', 'processing', 'completed', 'failed'), defaultValue: 'pending' },
    anonymous: { type: DataTypes.BOOLEAN, defaultValue: false },
    location_address: DataTypes.TEXT,
    preferred_time: DataTypes.STRING(100),
    notes: DataTypes.TEXT,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, onUpdate: DataTypes.NOW },
  }, { tableName: 'donations', timestamps: false });

  Donation.associate = (models) => {
    Donation.belongsTo(models.User, { foreignKey: 'user_id' });
    Donation.hasMany(models.DonationItem, { foreignKey: 'donation_id', onDelete: 'CASCADE' });
    Donation.hasMany(models.FundsTransaction, { foreignKey: 'donation_id', onDelete: 'CASCADE' });
  };

  return Donation;
};