var loginView = {}

loginView.init = function() {
  $('.tab-content').hide()
  $('#login').show()
  loginView.handleNewUserForm()
  loginView.handleLoginForm()
  loginView.handleLogout()
}

loginView.handleNewUserForm = function() {
  $('#new-user-form').on('submit', function(e) {
    e.preventDefault()
    var email = $('#new-user').val()
    var pwd = $('#new-password').val()
    user.createUser(email, pwd)
  })
}

loginView.handleLoginForm = function() {
  $('#login-form').on('submit', function(e) {
    e.preventDefault()
    var email = $('#username').val()
    var pwd = $('#password').val()
    user.loginUser(email, pwd)
  })
}

loginView.handleLogout = function() {
  $('#logout').on('click', function(){
    user.logout()
  })
}
