$(document).ready(function () {
    // Validation by focusout event
    const validationFunctions = [
        // Add student functions and params
        ["comment-name", "comment-name-err", validateName],
        ["comment-email", "comment-email-err", validateEmail],
        ["comment-phone", "comment-phone-err", validateBirthdate],
        ["comment-message", "comment-message-err", validatePhone],
    ];

    validationFunctions.forEach((validation) => {
        validateByFocusOut(validation[0], validation[1], validation[2]);
    });

    // Validation by click button
    $("#btn-comment-submit").click(function () {
        const isNameValid = validateName("comment-name", "comment-name-err");
        const isEmailValid = validateEmail("comment-email", "comment-email-err");
        const isPhoneValid = validatePhone("comment-phone", "comment-phone-err");
        const isImageValid = validateMessage("comment-message", "comment-message-err");

        if (!isNameValid || !isEmailValid || !isPhoneValid || !isImageValid) {
            alert('Erro ao adicioar comentário');
            return false;
        }

        alert('Comentário adicionado com sucesso');
        return true;
    });
});
