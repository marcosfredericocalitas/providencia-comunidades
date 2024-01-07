$(document).ready(function () {
    // Validation by focusout event
    const commentsValidationFields = [
        // Add student functions and params
        ["name", "name-err", validateName],
        ["email", "email-err", validateEmail],
        ["phone", "phone-err", validatePhone],
        ["course", "course-err", validateCourse],
        ["message", "message-err", validateMessage],
    ];

    validateFieldsOnFocusOut(commentsValidationFields);

    // Validation by click button
    $("#btn-add-comment").click(function () {
        const isNameValid = validateName("name", "name-err");
        const isEmailValid = validateEmail("email", "email-err");
        const isPhoneValid = validatePhone("phone", "phone-err");
        const isCourseValid = validateCourse("course", "course-err");
        const isImageValid = validateMessage("message", "message-err");

        if (!isNameValid || !isEmailValid || !isPhoneValid || !isCourseValid || !isImageValid) {
            return false;
        }

        showMessageAddedsuccessfully();
        cleanAllFields();
        return true;
    });
});
