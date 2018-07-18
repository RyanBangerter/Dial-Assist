'use strict';

//dependencies
const fs = require('fs'),
      path = require('path'),
      Sequelize = require('sequelize'),
      basename = path.basename(module.filename),
      env = process.env.NODE_ENV || 'development',
      config = (process.env.JAWSDB_URL) ?  process.env.JAWSDB_URL: require(__dirname + "/../config/config.json")[env],
      db = {};

      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
    } else {
        var sequelize = new Sequelize(config);
    }
    
    fs
      .readdirSync(__dirname)
      .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
      })
      .forEach(function(file) {
        const model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
      });
    
    Object.keys(db).forEach(function(modelName) {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });
    
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
    
    
    module.exports = db;