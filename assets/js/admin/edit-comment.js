$(document).ready(function () {
    // Validation by focusout event
    const commentsValidationFields = [
        // Add student functions and params
        ["edit-name", "edit-name-err", validateName],
        ["edit-email", "edit-email-err", validateEmail],
        ["edit-phone", "edit-phone-err", validatePhone],
        ["edit-course", "edit-course-err", validateCourse],
        ["edit-message", "edit-message-err", validateMessage],
    ];

    validateFieldsOnFocusOut(commentsValidationFields);

    // Validation by click button
    $("#btn-edit-comment").click(function () {
        const isNameValid = validateName("edit-name", "edit-name-err");
        const isEmailValid = validateEmail("edit-email", "edit-email-err");
        const isPhoneValid = validatePhone("edit-phone", "edit-phone-err");
        const isCourseValid = validateCourse("edit-course", "edit-course-err");
        const isImageValid = validateMessage("edit-message", "edit-message-err");

        if (!isNameValid || !isEmailValid || !isPhoneValid || !isCourseValid || !isImageValid) {
            return false;
        }

        showMessageEditedsuccessfully();
        cleanAllFields();
        return true;
    });
});
