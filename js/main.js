<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.6.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCFx6EEPuadPlNmiWDpXJZmo5jifmakrhk",
    authDomain: "nbc-changemanagement.firebaseapp.com",
    databaseURL: "https://nbc-changemanagement.firebaseio.com",
    projectId: "nbc-changemanagement",
    storageBucket: "nbc-changemanagement.appspot.com",
    messagingSenderId: "230090365679",
    appId: "1:230090365679:web:36c2f650f6b3ab561ed91a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
// Reference messages collection
var messagesRef = firebase.database().ref('contactformmessages');

$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.fullname').val(),
        email: $('.email').val(),
        subject: $('.subject').val(),
        message: $('.message').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});

