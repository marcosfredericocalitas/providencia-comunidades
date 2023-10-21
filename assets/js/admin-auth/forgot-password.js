$(document).ready(function () {
    // Validation by focusout event
    validateByFocusOut("email", "email-err", validateEmail);

    // Validation by click button
    $("#btn-forgot-password").click(function () {
        const isEmailValid = validateEmail("email", "email-err");

        if (!isEmailValid) {
            alert("Erro ao ao recuperar senha");
            return false;
        }

        alert('Crie uma nova senha');
        return true;
    });
});
