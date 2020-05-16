  var firebaseConfig = {
    apiKey: "AIzaSyDk8iQZTGOa8typTqY7TGeSryQ-OvfhhJc",
    authDomain: "raceswithfriends.firebaseapp.com",
    databaseURL: "https://raceswithfriends.firebaseio.com",
    projectId: "raceswithfriends",
    storageBucket: "raceswithfriends.appspot.com",
    messagingSenderId: "545689556224",
    appId: "1:545689556224:web:eb11f9ab50cae05b27cfe5"
  };

  firebase.initializeApp(firebaseConfig);

  
//Checks user status
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    console.log(firebaseUser);
    console.log(firebaseUser.email);

  }else{
    console.log("not logged in");  
  }
});

$("#signIn").on("click", function(event) {
event.preventDefault();


firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    console.log(firebaseUser);
    console.log("You're already signed into another account!")
   
    
  }else{
    console.log("not logged in");
    var email = $("#email").val().trim();
    var password = $("#password").val().trim();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message; 
          if (error){
            console.log("You made an error")
  }
  });
} 
});
}); 

//This handles the signUpButton
$("#signUp").on("click", function(event) {
event.preventDefault();

firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    console.log(firebaseUser);
    console.log("You're already signed in!")
    
  }else{
    console.log("not logged in");
    var email = $("#userEmail").val().trim();
    var password = $("#userPassword").val().trim();

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message; 
          if (error){
            console.log("You made an error")
    
  }
});
}
});
});
