'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {

    // Below the relationship of this model with the User Model
    user() {
        return this.belongsTo('App/Models/User')
    }

    // Below the relationship of this model with the Tasks Model
    tasks () {
        return this.hasMany('App/Models/Task')
    }

}

module.exports = Project
