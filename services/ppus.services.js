
const boom = require('@hapi/boom');
// const pool = require('../libs/postgres.pool');
// const sequilize = require('../libs/sequelize');
const { models } = require('../libs/sequelize');

class PPUSService {

  constructor() {}

  async create(data) {
    const newPPU = await models.PPU.create(data);
    return newPPU;
  }

  async find(query) {
    const options = {
      include: [{
        association: 'fault',
        include: 'type'
      }]
    }
    if(query.limit && query.offset){
      options.limit = query.limit;
      options.offset = query.offset;
    }
    const response = await models.PPU.findAll(options);
    return response;
  }

  async findOne(id) {
    const ppu = await models.PPU.findByPk(id, {
      include: [{
        association: 'fault',
        include: 'type'
      }],
    });
    if(!ppu){
      throw boom.notFound('PPU not found.');
    }
    return ppu;
  }

  async update(id, changes) {
    const ppu = await this.findOne(id);
    const response = await ppu.update(changes);
    return {id, response};
  }

  async delete(id) {
    const ppu = await this.findOne(id);
    await ppu.destroy();
    return { menssage: 'Delete success.' };
  }

}

module.exports = PPUSService;
