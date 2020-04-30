'use strict'

class User {
  // Bellow is method validate all fields after return error
  get validateAll () {
    return true
  }

  get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed|min:6'
    }
  }
}

module.exports = User
