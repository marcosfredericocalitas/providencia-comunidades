$(document).ready(function () {
    // Validation by blur (Focusout event)

    // Validation by click button (Click event)
    $("#btn-login").click(function () {
        const isEmailValid = validateEmail("email", "email-err");
        const isPasswordValid = validatePassword("password", "password-err");
    });
});
