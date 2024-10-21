$(document).ready(function(){
    function validateForm(){
        let isValid = true;

        let username = $('#username1').val();
        if (username === ""){
            $('#nameError1').text("Username is required");
            isValid = false;
        }else{
            $('#nameError1').text("");
        }

        let password = $('#password1').val();
        if (password === ""){
            $('#passwordError1').text("Password is required");
            isValid = false;
        }else{
            $('#passwordError1').text("");
        }

        let confirmPassword = $('#confirmPassword1').val();
        if (confirmPassword === ""){
            $('#confirmPasswordError1').text("Please confirm your password");
            isValid = false;
        }else if(password !== confirmPassword){
            $('#confirmPasswordError1').text("Passwords do not match");
        }else{
            $('#confirmPasswordError1').text("");
        }

        let dob = $('#dob1').val();
        if (dob === ""){
            $('#dobError1').text("Date of Birth is required");
            isValid = false;
        }else{
            $('#dobError1').text("");
        }

        let email = $('#email1').val();
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === ""){
            $('#emailError1').text("Email is required");
        }else if (!emailPattern.test(email)){
            $('#emailError1').text("Invalid email format");
            isValid = false;
        }else{
            $('#emailError1').text("");
        }

        if (!$('input[name="gender"]:checked').val()){
            $('#genderError1').text("Gender is required");
            isValid = false;
        }else{
            $('#genderError1').text("");
        }

        let country = $('#country1').val();
        if (country === ""){
            $('#countryError1').text("Please select a country");
            isValid = false;
        }else{
            $('#countryError1').text("");
        }
        
        if (isValid){
            alert("Form submitted successfully!");
        }
        return isValid;
    }

    $('#form').submit(function(event){
        if (!validateForm()){
            event.preventDefault();
        }
    });
});