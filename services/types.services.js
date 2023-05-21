const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class TypesService {

  constructor() {}

  async create(data) {
    const newType = await models.Type.create(data);
    return newType;
  }

  async find() {
    const response =  await models.Type.findAll();
    return response;
  }

  async findOne(id) {
    const type = await models.Type.findByPk(id, {
      include: ['faults']
    });
    if(!type){
      throw boom.notFound('Type not found.');
    }
    return type;
  }

  async update(id, changes) {
    const type = await this.findOne(id);
    const response = await type.update(changes);
    return {
      id,
      response,
    };
  }

  async delete(id) {
    const type = await this.findOne(id);
    await type.destroy();
    return { menssage: 'Delete success.' };
  }

}

module.exports = TypesService;
