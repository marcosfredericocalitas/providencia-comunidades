$(document).ready(function () {
    // Validation by focusout event
    const contactsValidationFields = [
        // Add student functions and params
        ["edit-name", "edit-name-err", validateName],
        ["edit-email", "edit-email-err", validateEmail],
        ["edit-phone", "edit-phone-err", validatePhone],
        ["edit-subject", "edit-subject-err", validateSubject],
        ["edit-message", "edit-message-err", validateMessage],
    ];

    validateFieldsOnFocusOut(contactsValidationFields);

    // Validation by click button
    $("#btn-edit-message").click(function () {
        const isNameValid = validateName("edit-name", "edit-name-err");
        const isEmailValid = validateEmail("edit-email", "edit-email-err");
        const isPhoneValid = validatePhone("edit-phone", "edit-phone-err");
        const isSubjectValid = validateSubject("edit-subject", "edit-subject-err");
        const isMessageValid = validateMessage("edit-message", "edit-message-err");

        if (!isNameValid || !isEmailValid || !isPhoneValid ||
            !isSubjectValid || !isMessageValid) {
            return false;
        }

        showMessageEditedsuccessfully();
        cleanAllFields();
        return true;
    })
});