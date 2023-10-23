$(document).ready(function () {
    // Validation by focusout event
    validateByFocusOut("password", "password-err", validatePassword);
    validateByFocusOut("confirm-password", "confirm-password-err", validateConfirmPassword);

    // Change password visibility
    togglePasswordVisibility("password", "recover-password-eye-btn");
    togglePasswordVisibility("confirm-password", "recover-password-eye-btn");

    // Validation by click button
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

