const firebaseConfig = {
    apiKey: "AIzaSyAEdMzGhRS_FX-uUeOAxJSkT_vRiIG-eS0",
    authDomain: "database-24b8d.firebaseapp.com",
    databaseURL: "https://database-24b8d-default-rtdb.firebaseio.com",
    projectId: "database-24b8d",
    storageBucket: "database-24b8d.appspot.com",
    messagingSenderId: "47732300588",
    appId: "1:47732300588:web:0b689e41c29ca98cfaea89"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    var course = getElementVal("course");
    var birthday = getElementVal("birthday");
  
    saveMessages(name, emailid, msgContent,course,birthday);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent,course,birthday) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
      course: course,
      birthday: birthday,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };