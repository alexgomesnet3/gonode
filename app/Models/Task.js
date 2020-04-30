'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {

    // Below the relationship of this model with the Project Model
    project () {
        return this.belongsTo('App/Models/Project')
    }

    // Below the relationship of this model with the User Model
    user () {
        return this.belongsTo('App/Models/User')
    }

    // Below the relationship of this model with the File Model
    file () {
        return this.belongsTo('App/Models/File')
    }

}

module.exports = Task
