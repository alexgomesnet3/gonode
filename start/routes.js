'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Created new user
Route.post('users', 'UserController.store')

// Auth users in system
Route.post('sessions', 'SessionController.store')
