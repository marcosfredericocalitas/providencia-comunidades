$(document).ready(function () {
    // Validation by blur (Focusout event)
    validateByFocusOut("email", "email-err", validateEmail);
    validateByFocusOut("password", "password-err", validatePassword);

    // Validation by click button (Click event)
    $("#btn-login").click(function () {
        const isEmailValid = validateEmail("email", "email-err");
        const isPasswordValid = validatePassword("password", "password-err");

        if (!isEmailValid || isPasswordValid) {
            alert("Erro ao entrar");
            return false;
        }

        alert('Logado com sucesso');
        return true;
    });
});
