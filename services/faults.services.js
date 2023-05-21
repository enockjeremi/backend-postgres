
const boom = require('@hapi/boom');
// const pool = require('../libs/postgres.pool');
// const sequilize = require('../libs/sequelize');
const { models } = require('../libs/sequelize');

class FaultsService {

  constructor() {}

  async create(data) {
    const newFault = await models.Fault.create(data);
    return newFault;
  }

  async find(query) {
    const options = {
      include: ['ppu', 'type'],

    }
    if(query.limit && query.offset){
      options.limit = query.limit
      options.offset = query.offset
    } else if(query.type) {
      options.where = {
        typeId: query.type
      }
    }
    const response = await models.Fault.findAll(options);
    return response;
  }

  async findOne(id) {
    const fault = await models.Fault.findByPk(id, {
      include: ['ppu', 'type'],

    });
    if(!fault){
      throw boom.notFound('Fault not found.');
    }
    return fault;
  }

  async update(id, changes) {
    const fault = await this.findOne(id);
    const response = await fault.update(changes);
    return {
      id,
      response,
    };
  }

  async delete(id) {
    const fault = await this.findOne(id);
    await fault.destroy();
    return { menssage: 'Delete success.' };
  }

}

module.exports = FaultsService;
