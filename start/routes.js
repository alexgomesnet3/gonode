'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Routes User - urls: users
Route.post('users', 'UserController.store').validator('User')

// Routes Session - urls: sessions
Route.post('sessions', 'SessionController.store').validator('Session')

// Routes ForgotPassword - urls: forgot-password, reset-password
Route.post('forgot-password', 'ForgotPasswordController.store').validator('ForgotPassword')
Route.put('reset-password', 'ForgotPasswordController.update').validator('ResetPassword')

// Routes File - urls: files
Route.get('files/:id', 'FileController.show')

Route.group(() => {

    // Routes File - urls: files - Accessible only by authenticated users
    Route.post('files', 'FileController.store')

    // Routes Project - urls: projects* - Accessible only by authenticated users
    Route.resource('projects', 'ProjectController')
        .apiOnly()
        .validator(new Map([[['projects.store'], ['Project']]]))

    // Routes Task with Project exists? - urls: projects/id/tasks* - Accessible only by authenticated users
    Route.resource('projects.tasks', 'TaskController')
        .apiOnly()
        .validator(new Map([[['projects.tasks.store'], ['Task']]]))

}).middleware(['auth'])

