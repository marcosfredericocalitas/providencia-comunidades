$(document).ready(function () {
    // Validation by focusout event
    const contactsValidationFields = [
        // Add student functions and params
        ["name", "name-err", validateName],
        ["email", "email-err", validateEmail],
        ["phone", "phone-err", validatePhone],
        ["subject", "subject-err", validateSubject],
        ["message", "message-err", validateMessage],
    ];

    validateFieldsOnFocusOut(contactsValidationFields);

    // Validation by click button
    $("#btn-submit-contacts").click(function () {
        const isNameValid = validateName("name", "name-err");
        const isEmailValid = validateEmail("email", "email-err");
        const isPhoneValid = validatePhone("phone", "phone-err");
        const isSubjectValid = validateSubject("subject", "subject-err");
        const isMessageValid = validateMessage("message", "message-err");

        if (!isNameValid || !isEmailValid || !isPhoneValid ||
            !isSubjectValid || !isMessageValid) {
            return false;
        }

        showMessageSendedsuccessfully();
        cleanAllFields();
        return true;
    })
});