'use strict'

class ForgotPassword {
  // Bellow is method validate all fields after return error
  get validateAll() {
    return true
  }

  get rules () {
    return {
      email: 'required|email',
      redirect_url: 'required|url'
    }
  }
}

module.exports = ForgotPassword
