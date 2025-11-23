const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const EventProgram = sequelize.define('EventProgram', {
    program_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING(200),
    description: DataTypes.TEXT,
    image: DataTypes.STRING(255),
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  }, { tableName: 'event_programs', timestamps: false });

  return EventProgram;
};