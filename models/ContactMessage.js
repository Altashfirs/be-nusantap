const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ContactMessage = sequelize.define('ContactMessage', {
    message_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING(150),
    email: DataTypes.STRING(150),
    subject: DataTypes.STRING(200),
    message: DataTypes.TEXT,
    is_read: { type: DataTypes.BOOLEAN, defaultValue: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  }, { tableName: 'contact_messages', timestamps: false });

  return ContactMessage;
};