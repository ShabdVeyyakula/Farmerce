




function signIn() {

    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("Sign in Succesful")
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Sign in Failed")
  });
}