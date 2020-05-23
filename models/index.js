'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

<<<<<<< HEAD
var sequelize;
=======
let sequelize;
>>>>>>> b8a7bcf880f001d871086d2df89299d77455b614
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
<<<<<<< HEAD
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
=======
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
>>>>>>> b8a7bcf880f001d871086d2df89299d77455b614
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

<<<<<<< HEAD
Object.keys(db).forEach(function(modelName){
=======
Object.keys(db).forEach(modelName => {
>>>>>>> b8a7bcf880f001d871086d2df89299d77455b614
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
