'use strict'

class Project {
  // Bellow is method validate all fields after return error
  get validateAll() {
    return true
  }

  get rules () {
    return {
      title: 'required',
      description: 'required'
    }
  }
}

module.exports = Project
