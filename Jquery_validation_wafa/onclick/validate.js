$(document).ready(function(){
    function validateform2() {
        let isValid = true;

        let username = $('#username2').val();
        if (username == ""){
            $('#nameError2').text("Username is required");
            isValid = false;
        }else{
            $('#nameError2').text("");
        }

        let password = $('#password2').val();
        if (password == ""){
            $('#passwordError2').text("Password is required");
            isValid = false;
        }else{
            $('#passwordError2').text("");
        }

        let confirmPassword = $('#confirmPassword2').val();
        if (confirmPassword == ""){
            $('#confirmPasswordError2').text("Please confirm your password");
            isValid = false;
        }else if (password !== confirmPassword){
            $('#confirmPasswordError2').text("Passwords do not match");
            isValid = false;
        }else{
            $('#confirmPasswordError2').text("");
        }

        let dob = $('#dob2').val();
        if (dob == ""){
            $('#dobError2').text("Date of birth is required");
            isValid = false;
        }else{
            $('#dobError2').text("");
        }

        let email = $('#email2').val();
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email == ""){
            $('#emailError2').text("Email is required");
            isValid = false;
        }else if(!emailPattern.test(email)){
            $('#emailError2').text("Please enter a valid email");
            isValid = false;
        }else{
            $('#emailError2').text("");
        }

        if (!$('input[name="gender"]:checked').val()){
            $('#genderError2').text("Please select your gender");
            isValid = false;
        }else{
            $('#genderError2').text("");
        }

        let country = $('#country2').val();
        if (country == ""){
            $('#countryError2').text('Please select a country');
            isValid = false;
        }else{
            $('#countryError2').text("");
        }

        if (isValid){
            alert("Form submitted successfully!");
        }else{
            alert("Please correct errors before submitting");
        }
    }
    $('button').click(function(){
        validateform2();
    });
});
