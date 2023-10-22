$(document).ready(function () {
    // Validation by focusout event

    // Validation by click button
    $("#btn-verification-code").click(function () {
        const isOtpCodeValid = validateOtpCode("otp-code", "otp-code-err");

        if (!isOtpCodeValid) {
            alert('Erro ao verificar código otp');
            return false;
        }

        alert('Email verificado com sucesso');
        return true;
    });
});