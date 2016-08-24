var loginView = {}

loginView.init = function() {
  $('.tab-content').hide()
  $('#login').show()
  loginView.handleLoginForm()
}

loginView.handleLoginForm = function() {
  $('#login-form').on('submit', function(e) {
    e.preventDefault()

    
  })
}
