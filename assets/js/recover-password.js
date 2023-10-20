$(document).ready(function () {
    // Validation by blur (Focusout event)

    // Validation by click button (Click event)
    $("#btn-recover-password").click(function () {

        const isPasswordValid = validatePassword("password", "password-err");
        const isConfirmPasswordValid = validateConfirmPassword("password", "confirm-password", "confirm-password-err");

    });
});

