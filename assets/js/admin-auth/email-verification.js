$(document).ready(function () {
    // Validation by focusout event
    validateByFocusOut("email", "email-err", validateEmail);

    // Validation by click button
    $("#btn-forgot-password").click(function () {
        const isEmailValid = validateEmail("email", "email-err");

        if (!isEmailValid) {
            alert("Erro ao enviar código de verificação");
            return false;
        }

        alert('Código de verificação enviado com sucesso');
        return true;
    });
});
