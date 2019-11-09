const firebaseConfig = {
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
      var trainName = $("#trainName").val().trim();
      var destination = $("#destination").val().trim();
      var firstTrain = moment($("#firstTrain").val().trim(),"HH:mm").subtract(10,"years").format("X");
      var frequency = $("#frequency").val().trim();

      var newTrain = {
          name: trainName,
          destination: destination,
          firstTrain: firstTrain,
          frequency: frequency
      }

      trainData.ref().push(newTrain);

      alert("Train added!");

      $("#trainName").val("");
      $("#destination").val("");
      $("#firstTrain").val("");
      $("#frequency").val("");


      return false;
      
  })

  trainData.ref().on("child_added",function(snapshot){
      var name = snapshot.val().name;
      var destination = snapshot.val().destination;
      var frequency = snapshot.val().frequency;
      var firstTrain = snapshot.val().firstTrain;

      var remainder = moment().diff(moment.unix(firstTrain),"minutes")%frequency;
      var minutes = frequency - remainder;
      var arrival = moment().add(minutes,"m").format("hh:mm A");
      console.log(remainder);
      console.log(minutes);
      console.log(arrival);
      
      
      
  })
  