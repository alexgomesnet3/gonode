'use strict'

class Session {
  // Bellow is method validate all fields after return error
  get validateAll() {
    return true
  }

  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }
}

module.exports = Session
