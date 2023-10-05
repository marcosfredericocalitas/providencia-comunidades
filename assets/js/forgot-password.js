$(document).ready(function () {
    // Validation by blur (Focusout event)
    validateByFocusOut("email", "email-err", validateEmail);

    // Validation by click button (Click event)
    $("#btn-forgot-password").click(function () {
        const isEmailValid = validateEmail("email", "email-err");

        if (!isEmailValid) {
            alert("Erro ao ao recuperar senha");
            return false;
        }

        alert('Cire uma nova senha');
        return true;
    });
});
