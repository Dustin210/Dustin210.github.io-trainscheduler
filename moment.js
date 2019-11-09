var firebaseConfig = {
    apiKey: "AIzaSyAJYZNvZ6K91UsDwoPAP2ONhecLjcIFag0",
    authDomain: "project-test-8ef8d.firebaseapp.com",
    databaseURL: "https://project-test-8ef8d.firebaseio.com",
    projectId: "project-test-8ef8d",
    storageBucket: "project-test-8ef8d.appspot.com",
    messagingSenderId: "458864230043",
    appId: "1:458864230043:web:9005130a6c98d132cbd03e",
    measurementId: "G-17J3LV62RD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var trainData = firebase.analytics();

 

  $("#addTrainBtn").on("click", function() {
      var trainName = $("#train-Name").val().trim();
      var destination = $("#destination").val().trim();
      var firstTrain = moment($("#first-Train").val().trim(),"HH:mm").subtract(10,"years").format("X");
      var frequency = $("#freq").val().trim();

      var newTrain = {
          name: trainName,
          destination: destination,
          firstTrain: firstTrain,
          freq: freq
      }

      trainData.ref().push(newTrain);

      alert("Train added!");

      $("#train-Name").val("");
      $("#destination").val("");
      $("#first-Train").val("");
      $("#freq").val("");


      return false;
      
  })
  