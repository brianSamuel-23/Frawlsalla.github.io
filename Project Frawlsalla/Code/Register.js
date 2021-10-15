
const form= document.forms["Regisform"]
const username = form["username"]
const email = form["email"]
const password = form["password"]
const confirmp = form["confirm"]
const dob = form["DOB"]
const gender = form["gender"]
const TOS = form["TOS"]

form.addEventListener("submit", function(ev){
  
  var error=false;


  if(username.value.length<6 && error== false){
    alert("User Name must be at least 6 characters long!")
    error =true;
  }

  if(checkmail(email.value)==false && error == false){
    alert("Invalid email!")
    error = true;
  }


  if((password.value.length < 8 || password.value.length > 20) && error==false){
    alert("Password length must be at least 8 characters and less than 20 characters")
    error=true;

  }

  if(confirmp.value != password.value && error==false){
    alert("Password do not match!")
    error =true;
  }

  if(checkDOB(dob.valueAsNumber)==false && error==false){
    alert("You must be 12 years or older to Register!")
    error=true;
  }

  if(gender.value =="" && error == false ){
    alert("Please choose your gender!");
    error= true;
  }

  if (TOS.checked == false && error== false){
    alert("You must agree with our Terms of Service!")
    error =true;
  }

   if(error == true){
    ev.preventDefault();
   }

   
  
});



function checkmail(email){
  if(email=="") return false;
  if(email.indexOf("@") ==-1) return false;
  if(email.indexOf("@") != email.lastIndexOf("@") ) return false;
  if(email.indexOf(".") ==0) return false;
  if(email.indexOf(".") ==-1) return false;
  if(email.indexOf("@.") !=-1) return false;
  
  return true;
}

function checkDOB(dob){
  if(isNaN(dob)) return false;
  
  var minimalYear = new Date();
  minimalYear.setFullYear(minimalYear.getFullYear()-12);

  if(dob - minimalYear.getTime()> 0) return false;
  
  return true;
}








var button = document.getElementById("responsivenav");

 

function clickbutton(){

  if (button.style.display === "block") {
    button.style.display = "none";
  } else {
    button.style.display = "block";
  }

};