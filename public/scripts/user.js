var user = {}

user.createUser = function(email, pwd) {
  firebase.auth()
    .createUserWithEmailAndPassword(email, pwd)
    .then(function(user) {
      console.log(user);
    })
    .catch(function(error) {
      console.error(error)
    })
}

user.loginUser = function(email, pwd) {
  firebase.auth()
    .signInWithEmailAndPassword(email, pwd)
    .then(function(user) {
      console.log(user);
    })
    .catch(function(error) {
      console.error(error)
    })
}

user.logout = function() {
  firebase.auth().signOut()
  console.log('logged out');
}
