$(document).ready(function () {
    // Set image preview
    setImagePreview("edit-image", "edit-image-preview");
    // Validation by focusout event
    validateByFocusOut("edit-course", "edit-course-err", validateCourse);

    // Validation by click button
    $("#btn-edit-student").click(function () {
        const isEditNameValid = validateName("edit-name", "edit-name-err");
        const isEditEmailValid = validateEmail("edit-email", "edit-email-err");
        const isEditBirthdateValid = validateBirthdate("edit-birthdate", "edit-birthdate-err");
        const isEditGenderValid = validateGender("edit-gender", "edit-gender-err");
        const isEditCourseValid = validateCourse("edit-course", "edit-course-err");
        const isEditPhoneValid = validatePhone("edit-phone", "edit-phone-err");
        const isEditImageValid = validateImage("edit-image", "edit-image-err");

        if (!isEditNameValid || !isEditEmailValid || !isEditBirthdateValid ||
            !isEditGenderValid || !isEditCourseValid || !isEditPhoneValid || !isEditImageValid) {
            return false;
        }

        showMessageEditedsuccessfully();
        cleanAllFields();
        return true;
    });
});
