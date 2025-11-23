const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const FundsTransaction = sequelize.define('FundsTransaction', {
    transaction_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    donation_id: { type: DataTypes.INTEGER, allowNull: false },
    amount: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
    payment_method: DataTypes.STRING(50),
    payment_status: { type: DataTypes.ENUM('pending', 'paid', 'failed'), defaultValue: 'pending' },
    paid_at: DataTypes.DATE,
  }, { tableName: 'funds_transactions', timestamps: false });

  FundsTransaction.associate = (models) => {
    FundsTransaction.belongsTo(models.Donation, { foreignKey: 'donation_id' });
  };

  return FundsTransaction;
};