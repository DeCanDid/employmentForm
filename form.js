const firebaseConfig = {
    apiKey: "AIzaSyBXioP0KGAFivd_uSuBOOpmMukk9VlFfow",
    authDomain: "contactform-e37da.firebaseapp.com",
    databaseURL: "https://contactform-e37da-default-rtdb.firebaseio.com",
    projectId: "contactform-e37da",
    storageBucket: "contactform-e37da.appspot.com",
    messagingSenderId: "1095795978021",
    appId: "1:1095795978021:web:24c9d138ad1eda07fff4cc"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //ref for database
 var bioFormDB = firebase.database().ref("bioForm");

 document.getElementById("bioForm").addEventListener("submit", submitForm);

 function submitForm (e) {
    // const getD = localStorage.getItem("info");
    // const getMe = JSON.parse(getD);

    e.preventDefault();
    
    var firstName = document.getElementById("inputFirstName").value;
    var middleName = document.getElementById("inputMiddleName").value;
    var lastName = document.getElementById("inputLastName").value;
    var email = document.getElementById("inputEmail").value;
    var phoneNumber = document.getElementById("inputPhoneNumber").value;
    var address = document.getElementById("inputAddress").value;
    var city = document.getElementById("inputCity").value;
    var zipCode = document.getElementById("inputZip").value;
    var highSch = document.getElementById("inputHighSch").value;
    var stateORCity = document.getElementById("StateORCity").value;
    var highSchdateFrom = document.getElementById("highSchF").value;
    var highSchdateTo = document.getElementById("highSchT").value;
    var GraduateCollege = document.getElementById("GraduateCollege").value;
    var qualification = document.getElementById("Qualification").value;
    var institutionName = document.getElementById("institution").value;
    var institutionState = document.getElementById("institutionState").value;
    var institutionFrom = document.getElementById("from").value;
    var institutionTo = document.getElementById("to").value;
    var GraduateUni = document.getElementById("GraduateUni").value;
    var collegeORuniQualification = document.getElementById("collegeORuniQualification").value;


    console.log(firstName, middleName, lastName, email, phoneNumber, address, city,
        zipCode, highSch, stateORCity, highSchdateFrom, highSchdateTo, GraduateCollege, 
        qualification, institutionName, institutionState, institutionFrom, institutionTo,
        GraduateUni, collegeORuniQualification);

        saveDatas(firstName, middleName, lastName, email, phoneNumber, address, city,
            zipCode, highSch, stateORCity, highSchdateFrom, highSchdateTo, GraduateCollege, qualification,
            institutionName, institutionState, institutionFrom, institutionTo, GraduateUni, collegeORuniQualification);

            //enable Aert
            document.querySelector('.alert').style.display = "block";

            setTimeout(() => {
            document.querySelector('.alert').style.display = "none";
                
            }, 4000);

            //reset the form
            document.getElementById("bioForm").reset();
    }

    const saveDatas = (firstName, middleName, lastName, email, phoneNumber, address, city,
        zipCode, highSch, stateORCity, highSchdateFrom, highSchdateTo, GraduateCollege, qualification,
        institutionName, institutionState, institutionFrom, institutionTo, GraduateUni, collegeORuniQualification
        ) => {
            var newbioContact = bioFormDB.push();

            newbioContact.set({
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber,
                address: address,
                city: city,
                zipCode: zipCode,
                highSchool: highSch,
                stateORCity: stateORCity,
                highSchdateFrom: highSchdateFrom,
                highSchdateTo: highSchdateTo,
                GraduateCollege: GraduateCollege,
                qualification: qualification,
                institutionName: institutionName,
                institutionState: institutionState,
                institutionFrom: institutionFrom,
                institutionTo: institutionTo,
                GraduateUni: GraduateUni,
                collegeORuniQualification: collegeORuniQualification
            })
    }

