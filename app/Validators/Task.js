'use strict'

class Task {
  // Bellow is method validate all fields after return error
  get validateAll() {
    return true
  }
  
  get rules () {
    return {
      title: 'required',
      due_date: 'date'
    }
  }
}

module.exports = Task
