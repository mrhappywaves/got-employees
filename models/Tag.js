// Import Model and DataTypes of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
