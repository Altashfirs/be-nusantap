const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const BlogArticle = sequelize.define('BlogArticle', {
    article_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING(200),
    slug: { type: DataTypes.STRING(200), unique: true },
    content: DataTypes.TEXT({ length: 'long' }),
    cover_image: DataTypes.STRING(255),
    category: DataTypes.ENUM('news', 'article', 'blog'),
    publish_date: DataTypes.DATEONLY,
    author_id: DataTypes.INTEGER,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, onUpdate: DataTypes.NOW },
  });

  BlogArticle.associate = (models) => {
    BlogArticle.belongsTo(models.User, { foreignKey: 'author_id' });
  };

  return BlogArticle;
};