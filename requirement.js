// const firebaseConfig = {
//     apiKey: "AIzaSyCqglqru-MxVBztiwF10_XS4h-JcrCOH8k",
//     authDomain: "employeeform-a1558.firebaseapp.com",
//     databaseURL: "https://employeeform-a1558-default-rtdb.firebaseio.com",
//     projectId: "employeeform-a1558",
//     storageBucket: "employeeform-a1558.appspot.com",
//     messagingSenderId: "707574615893",
//     appId: "1:707574615893:web:01850001e6318d40bea9dc"
//   };

// // //   initialize firebase
//   firebase.initializeApp(firebaseConfig);

// //   //ref for database
//  const employeeFormDB = firebase.database().ref("employeeForm");

//  document.getElementById('employeeForm').addEventListener("submit", submitForm);

//  function submitForm(e) {
//     e.preventDefault();

//     var UScitizen = getElementVal("UScitizen");
//     var work_permit = getElementVal("workPermit");
//     var experience = getElementVal("Experience");
//     var availability = getElementVal("Availability");
//     var recent_job = getElementVal("RecentJob");
//     var english_fluency = getElementVal("English");
//     var disability = getElementVal("disability");
//     var physical_challenge = getElementVal("physical-challenge");

//     saveData(UScitizen, work_permit, experience, availability, 
//         recent_job, english_fluency, disability, physical_challenge);

//         // enable alert

//         document.querySelector('.alert').style.display = "block"
 

//         setTimeout(() => {
     
//         document.querySelector('.alert').style.display = "none"
      
//         }, 4000);

//         localStorage.setItem("info", JSON.stringify(data));

//         window.location.href = "bio.html";

//         //reset the form
//         document.getElementById("employeeForm").reset();

    
//  }

//  const saveData = (UScitizen, work_permit, experience, availability, 
//     recent_job, english_fluency, disability, physical_challenge) => {
//         var newEmployeeForm = employeeFormDB.push();

//         newEmployeeForm.set({
//             UScitizen: UScitizen,
//             work_permit: work_permit,
//             experience: experience,
//             availability: availability,
//             recent_job: recent_job,
//             english_fluency: english_fluency,
//             disability: disability,
//             physical_challenge: physical_challenge
//         })
//     }

//  const getElementVal = (id) =>{
//     return document.getElementById(id).value;
//  }


const firebaseConfig = {
    apiKey: "AIzaSyBXioP0KGAFivd_uSuBOOpmMukk9VlFfow",
    authDomain: "contactform-e37da.firebaseapp.com",
    databaseURL: "https://contactform-e37da-default-rtdb.firebaseio.com",
    projectId: "contactform-e37da",
    storageBucket: "contactform-e37da.appspot.com",
    messagingSenderId: "1095795978021",
    appId: "1:1095795978021:web:24c9d138ad1eda07fff4cc"
  };

  firebase.initializeApp(firebaseConfig);

  var FormDB = firebase.database().ref("employeeForm");
//   document.getElementById("employeeForm").addEventListener("submit", goNext);



function goNext(el) {
    el.preventDefault()

let US_citizen = document.getElementById("UScitizen");
let work_Permit = document.getElementById("workPermit");
let experience = document.getElementById("Experience");
let availability = document.getElementById("Availability");
let recent_Job= document.getElementById("RecentJob");
let english_fluency = document.getElementById("English");
let disability = document.getElementById("disability");
let physical_challenge = document.getElementById("physical-challenge");

saveDataBio(US_citizen, work_Permit, experience, availability, recent_Job,
    english_fluency, disability, physical_challenge);
}




    // const saveDataBio = (US_citizen, work_Permit, experience, availability, recent_Job,
    //     english_fluency, disability, physical_challenge) =>{
    //         var bio = FormDB.push()

    //         bio.set({
    //             US_citizen: US_citizen.value,
    //             work_permit: work_Permit.value,
    //             experience: experience.value,
    //             availability: availability.value,
    //             recent_Job: recent_Job.value,
    //             english_fluency: english_fluency.value,
    //             disability: disability.value,
    //             physical_challenge: physical_challenge.value
    //         })

    // }

// let US_citizen = document.getElementById("UScitizen");
// let work_Permit = document.getElementById("workPermit");
// let experience = document.getElementById("Experience");
// let availability = document.getElementById("Availability");
// let recent_Job= document.getElementById("RecentJob");
// let english_fluency = document.getElementById("English");
// let disability = document.getElementById("disability");
// let physical_challenge = document.getElementById("physical-challenge");



function nextPage() {
    let US_citizen = document.getElementById("UScitizen");
    let work_Permit = document.getElementById("workPermit");
    let experience = document.getElementById("Experience");
    let availability = document.getElementById("Availability");
    let recent_Job= document.getElementById("RecentJob");
    let english_fluency = document.getElementById("English");
    let disability = document.getElementById("disability");
    let physical_challenge = document.getElementById("physical-challenge");

    saveDataBio(US_citizen, work_Permit, experience, availability, recent_Job,
        english_fluency, disability, physical_challenge);

    // var bio = FormDB.push()

    // bio.set({
    //     US_citizen: US_citizen.value,
    //     work_permit: work_Permit.value,
    //     experience: experience.value,
    //     availability: availability.value,
    //     recent_Job: recent_Job.value,
    //     english_fluency: english_fluency.value,
    //     disability: disability.value,
    //     physical_challenge: physical_challenge.value
    // })

    // let data = [{
    //     US_citizen: US_citizen.value,
    //     work_permit: work_Permit.value,
    //     experience: experience.value,
    //     availability: availability.value,
    //     recent_Job: recent_Job.value,
    //     english_fluency: english_fluency.value,
    //     disability: disability.value,
    //     physical_challenge: physical_challenge.value
    // }]
// const setD = JSON.stringify(data);
// localStorage.setItem("info", setD);

console.log(US_citizen.value, work_Permit.value, experience.value,
     availability.value, recent_Job.value, english_fluency.value,
      disability.value, physical_challenge.value);    

    if (US_citizen.value == "" || work_Permit.value == "" || experience.value == "" ||
    disability.value == "" || availability.value == "" || recent_Job.value == "" || english_fluency .value == ""
     || physical_challenge.value == "") {
        alert("All input field required")
    } else {
    window.location.href = "bio.html";
        
    }
}

const saveDataBio = (US_citizen, work_Permit, experience, availability, recent_Job,
    english_fluency, disability, physical_challenge) =>{
        var bio = FormDB.push()

        bio.set({
            US_citizen: US_citizen.value,
            work_permit: work_Permit.value,
            experience: experience.value,
            availability: availability.value,
            recent_Job: recent_Job.value,
            english_fluency: english_fluency.value,
            disability: disability.value,
            physical_challenge: physical_challenge.value
        })

}
