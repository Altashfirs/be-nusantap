const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Testimonial = sequelize.define('Testimonial', {
    testimonial_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    donor_name: DataTypes.STRING(150),
    donor_city: DataTypes.STRING(150),
    message: DataTypes.TEXT,
    profile_image: DataTypes.STRING(255),
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  });

  return Testimonial;
};