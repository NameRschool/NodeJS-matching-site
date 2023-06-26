const db = require('../models/connectToDatabase');
const group = require('../models/group');

class GroupRepo {
    constructor() {
        
        
        db.connect();
    }

    async getAll() {
      try {
          return await group.find({})
      } catch (error) {
          console.error(`error:${error}`)
      }
  }
  async getById(id) {
      try {
          return await group.findById(id);
      } catch (error) {
          console.error(`error:${error}`)
      }
  }
  async create(info) {
      try {
          return await group.create(info);
          
      } catch (error) {
          console.error(`error:${error}`)
      }
  }

  async update(id,info) {
      try {
          return await group.findByIdAndUpdate(id, info, {
              new: true,
          });
          
      } catch (error) {
          console.error(`error:${error}`)
      }
  }

  async deleteById(id) {
      try {
          return await group.findByIdAndRemove(id);
      } catch (error) {
          console.error(`error:${error}`)
      }
  }

}

module.exports = new GroupRepo();