$(document).ready(function () {
    // Validation by focusout event
    const validationFunctions = [
        // Add student functions and params
        ["name", "name-err", validateName],
        ["email", "email-err", validateEmail],
        ["phone", "phone-err", validatePhone],
        ["subject", "subject-err", validateSubject],
        ["message", "message-err", validateMessage],
    ];

    validationFunctions.forEach((validation) => {
        validateByFocusOut(validation[0], validation[1], validation[2]);
    });

    // Validation by click button
    $("#btn-submit-contacts").click(function () {
        const isNameValid = validateName("name", "name-err");
        const isEmailValid = validateEmail("email", "email-err");
        const isPhoneValid = validatePhone("phone", "phone-err");
        const isSubjectValid = validateSubject("subject", "subject-err");
        const isMessageValid = validateMessage("message", "message-err");

        if (!isNameValid || !isEmailValid || !isPhoneValid ||
            !isSubjectValid || !isMessageValid) {
            alert('Erro ao enviar mensagem');
            return false;
        }

        alert('Mensagem enviada com sucesso');
        return true;
    })
});