$(document).ready(function () {

    // Validation by focusout event
    validateByFocusOut("old-password", "old-password-err", validatePassword);
    validateByFocusOut("password", "password-err", validatePassword);
    validateByFocusOut("confirm-password", "confirm-password-err", validateConfirmPassword);

    // Change password visibility
    togglePasswordVisibility("old-password", "eye-btn-password");
    togglePasswordVisibility("password", "eye-btn-password");
    togglePasswordVisibility("confirm-password", "eye-btn-password");

    // Validation by click button
    $("#btn-update-password").click(function () {
        const isOldPasswordValid = validatePassword("old-password", "old-password-err");
        const isPasswordValid = validatePassword("password", "password-err");
        const isConfirmPasswordValid = validateConfirmPassword("confirm-password", "confirm-password-err");

        if (!isOldPasswordValid || !isPasswordValid || !isConfirmPasswordValid) {
            alert('Erro ao alterar senha');
            return false;
        }

        alert('Senha alterada com sucesso');
        return true;
    });

    // Delete account processses
    $("#btn-delete-account").click(function () {
    });
});