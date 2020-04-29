'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Routes Users - users
Route.post('users', 'UserController.store')

// Routes Auth - sessions
Route.post('sessions', 'SessionController.store')

// Routes Passwords - forgot-password, reset-password
Route.post('forgot-password', 'ForgotPasswordController.store')
Route.put('reset-password', 'ForgotPasswordController.update')

// Routes Files - files
Route.post('files', 'FileController.store')
