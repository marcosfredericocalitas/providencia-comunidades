$(document).ready(function () {
    // Validation by focusout event
    validateByFocusOut("email", "email-err", validateEmail);
    validateByFocusOut("password", "password-err", validatePassword);

    // Change password visibility
    togglePasswordVisibility("password", "admin-eye-btn");

    // put the eye icon down
    putEyeIconToBottom("password");

    // Validation by click button
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
