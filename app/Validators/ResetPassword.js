'use strict'

class ResetPassword {
  // Bellow is method validate all fields after return error
  get validateAll() {
    return true
  }

  get rules () {
    return {
      token: 'required',
      password: 'required|confirmed|min:6'
    }
  }
}

module.exports = ResetPassword
