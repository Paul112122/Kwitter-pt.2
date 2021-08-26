var firebaseConfig = {
      apiKey: "AIzaSyBq8j_OTzn9s9orZoeIG2anz8E1E8JHZv8",
      authDomain: "practice-web-page-6d8a8.firebaseapp.com",
      databaseURL: "https://practice-web-page-6d8a8-default-rtdb.firebaseio.com",
      projectId: "practice-web-page-6d8a8",
      storageBucket: "practice-web-page-6d8a8.appspot.com",
      messagingSenderId: "314432060860",
      appId: "1:314432060860:web:32c600c05a8829b53a3fb9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


      function addRoom() 
      {
             room_name = document.getElementById
             ("room_name").value; firebase.database().ref("/")
             .child(room_name).update({ purpose : "adding room name" });
              localStorage.setItem("room_name", room_name);
               window.location = "kwitter_page.html";
             }
             function getData()
              { 
                    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
                     snapshot.forEach(function(childSnapshot)
                      { childKey = childSnapshot.key;
                         Room_names = childKey;
                         console.log("Room Name - " + Room_names);
                          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                           document.getElementById("output").innerHTML += row;
                         }); }); }

                         getData();
                          function redirectToRoomName(name)
                           { console.log(name); 
                              localStorage.setItem("room_name", name);
                               window.location = "kwitter_page.html"; 
                              }

function logout()

{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}






      
      
