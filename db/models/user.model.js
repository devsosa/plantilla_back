const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'user';

const UserSchema = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(180),
      allowNull: false
    },
    roles: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
      field: 'created_at',
      allowNull: false
    }
}

class User extends Model{
  /* static associate(models){

  } */

  static config(sequelize){
    return{
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }
