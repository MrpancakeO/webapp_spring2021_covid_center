function updateCountryView() {
    var rbYes3 = document.getElementById("rbYes3");
    var rbNo3 = document.getElementById("rbNo3");
    var divCountry = document.getElementById("divCountry");

    if (rbYes3.checked) {
        //console.log(rbYes3);
        divCountry.classList.remove("invisible");
    }
    else if (rbNo3.checked) {
        divCountry.classList.add("invisible");
        //console.log(rbNo3);
    }
    else {
        divCountry.classList.add("invisible");
    }

}

function validateForm() {
    var Dob = document.querySelector("#txtDob");
    var divDobError = document.querySelector("#DobError");
    var formIsValid=true;
    if (Dob.value == "") {
        //error
        divDobError.classList.remove("invisible");
        divDobError.innerHTML = "The Date of Birth can not be empty.";
        Dob.classList.add("hasError");
        formIsValid=false;
    }
    else {
        var DobDate = new Date(Dob.value);
        var todayDate = new Date();
        if (DobDate >= todayDate) {
            //error
            divDobError.classList.remove("invisible");
            divDobError.innerHTML = "The Date of Birth must be before today's date.";
            Dob.classList.add("hasError");
            formIsValid=false;
        }
        else{
            divDobError.classList.add("invisible");
        divDobError.innerHTML= "";
        Dob.classList.remove("hasError");
        }
    }

    var rbYes3 = document.querySelector("#rbYes3");
    //var divCountryError = document.getElementById("#countryErrorMessage");

    if (rbYes3.checked) {
        //console.log(rbYes3);
        var txtCountry=document.querySelector("#txtCountry");
        if(txtCountry==""){
            document.querySelector("#countryErrorMessage").classList.remove("invisible");
            txtCountry.classList.add("hasError");
            formIsValid=false;
        }
        else{
            document.querySelector("#countryErrorMessage").classList.add("invisible");
            txtCountry.classList.remove("hasError");
        }

    }

    var elements=document.getElementsByTagName("input");
    var invalidChars=["#","!","~"];
    for(let i=0;i<elements.length;i++){
        for(let j=0;j<invalidChars.length;j++){
            if(elements[i].value.indexOf(invalidChars[j]) !=-1){
                elements[i].classList.add("hasError");
                formIsValid=false;
            }
        }
        
    }
   

    return formIsValid;
}