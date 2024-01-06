$(document).ready(function () {
    // Set image preview
    setImagePreview("image", "image-preview");

    // Validation by focusout event
    validateByFocusOut("course", "course-err", validateCourse);

    // Validation by click button
    $("#btn-add-student").click(function () {
        const isNameValid = validateName("name", "name-err");
        const isEmailValid = validateEmail("email", "email-err");
        const isBirthdateValid = validateBirthdate("birthdate", "birthdate-err");
        const isGenderValid = validateGender("gender", "gender-err");
        const isCourseValid = validateCourse("course", "course-err");
        const isPhoneValid = validatePhone("phone", "phone-err");
        const isImageValid = validateImage("image", "image-err");

        if (!isNameValid || !isEmailValid || !isBirthdateValid ||
            !isGenderValid || !isCourseValid || !isPhoneValid || !isImageValid) {
            return false;
        }

        showMessageAddedsuccessfully();
        return true;
    });
});
