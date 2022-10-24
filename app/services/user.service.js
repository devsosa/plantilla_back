//const boom = require('@hapi/boom');
const { models } = require('./../../libs/sequelize');

class UserService{

  constructor(){
   // this.users = [];
  }

  async create(){

  }

  async find(){
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(){

    /* if(!product){
      throw boom.notFound('User not found');
    }
    return product; */
  }

  async update(){
    //throw boom.notFound('User not found');
  }

  async delete(){

  }
}

module.exports = UserService;
