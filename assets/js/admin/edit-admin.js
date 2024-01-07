$(document).ready(function () {
    // Set image preview
    setImagePreview("edit-image", "edit-image-preview");
    // Validation by focusout event
    validateByFocusOut("edit-password", "edit-password-err", validatePassword);
    // Change password visibility
    togglePasswordVisibility("edit-password", "admin2-eye-btn");

    // Validation by click button
    $("#btn-edit-admin").click(function () {
        const isEditNameValid = validateName("edit-name", "edit-name-err");
        const isEditEmailValid = validateEmail("edit-email", "edit-email-err");
        const isEditImageValid = validateImage("edit-image", "edit-image-err");
        const isEditBirthdateValid = validateBirthdate("edit-birthdate", "edit-birthdate-err");
        const isEditGenderValid = validateGender("edit-gender", "edit-gender-err");
        const isEditPhoneValid = validatePhone("edit-phone", "edit-phone-err");
        const isEditPasswordValid = validatePassword("edit-password", "edit-password-err");

        if (!isEditNameValid || !isEditEmailValid || !isEditBirthdateValid ||
            !isEditImageValid || !isEditGenderValid || !isEditPhoneValid || !isEditPasswordValid) {
            return false;
        }

        showMessageEditedsuccessfully();
        cleanAllFields();
        return true;
    });
});