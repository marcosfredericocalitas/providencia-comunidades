$(document).ready(function () {
    // Validation by blur (Focusout event)
    validateByFocusOut("password", "password-err", validatePassword);
    validateByFocusOut("confirm-password", "confirm-password-err", validateConfirmPassword);

    // Validation by click button (Click event)
    $("#btn-recover-password").click(function () {
        const isPasswordValid = validatePassword("password", "password-err");
        const isConfirmPasswordValid = validateConfirmPassword("confirm-password", "confirm-password-err");

        if (!isPasswordValid || !isConfirmPasswordValid) {
            alert('Erro ao alterar senha');
            return false;
        }

        alert('Senha alterada com sucesso');
        return true;

    });
});

