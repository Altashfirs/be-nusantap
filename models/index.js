const sequelize = require('../config/db');
const BlogArticle = require('./BlogArticle');
const ContactMessage = require('./ContactMessage');
const Donation = require('./Donation');
const DonationItem = require('./DonationItem');
const EventProgram = require('./EventProgram');
const FundsTransaction = require('./FundsTransaction');
const Page = require('./Page');
const Stat = require('./Stat');
const Testimonial = require('./Testimonial');
const User = require('./User');

const models = {
  BlogArticle: BlogArticle(sequelize),
  ContactMessage: ContactMessage(sequelize),
  Donation: Donation(sequelize),
  DonationItem: DonationItem(sequelize),
  EventProgram: EventProgram(sequelize),
  FundsTransaction: FundsTransaction(sequelize),
  Page: Page(sequelize),
  Stat: Stat(sequelize),
  Testimonial: Testimonial(sequelize),
  User: User(sequelize),
};

Object.values(models).forEach(model => {
  if (model.associate) model.associate(models);
});

module.exports = { sequelize, ...models };