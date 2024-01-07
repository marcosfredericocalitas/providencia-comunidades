$(document).ready(function () {
    // Set image preview
    setImagePreview("image", "image-preview");
    // Add class by click
    addClassByClick("btn-signup-course", "modal-container", "is-visible");
    addClassByClick("btn-hide-signup-course", "modal-container", "is-visible")

    // Validation by focusout event
    const signupValidationFields = [
        // Add student functions and params
        ["name", "name-err", validateName],
        ["email", "email-err", validateEmail],
        ["birthdate", "birthdate-err", validateBirthdate],
        ["phone", "phone-err", validatePhone],
        ["image", "image-err", validateImage],
    ];

    validateFieldsOnFocusOut(signupValidationFields);

    // Validation by click button
    $("#btn-signup-student").click(function () {
        const isNameValid = validateName("name", "name-err");
        const isEmailValid = validateEmail("email", "email-err");
        const isBirthdateValid = validateBirthdate("birthdate", "birthdate-err");
        const isGenderValid = validateGender("gender", "gender-err");
        const isPhoneValid = validatePhone("phone", "phone-err");
        const isImageValid = validateImage("image", "image-err");

        if (!isNameValid || !isEmailValid || !isBirthdateValid ||
            !isGenderValid || !isPhoneValid || !isImageValid) {
            return false;
        }

        $("#modal-container").removeClass("is-visible");
        setTimeout(() => {
            showMessageSignupedsuccessfully();
            cleanAllFields();
        }, 150);
        return true;
    });
});