$(document).ready(function () {
    // Set image preview
    setImagePreview("image", "image-preview");
    // Validation by focusout event
    validateByFocusOut("password", "password-err", validatePassword);
    // Change password visibility
    togglePasswordVisibility("password", "admin-eye-btn");

    // Validation by click button
    $("#btn-add-admin").click(function () {
        const isNameValid = validateName("name", "name-err");
        const isEmailValid = validateEmail("email", "email-err");
        const isImageValid = validateImage("image", "image-err");
        const isBirthdateValid = validateBirthdate("birthdate", "birthdate-err");
        const isGenderValid = validateGender("gender", "gender-err");
        const isPhoneValid = validatePhone("phone", "phone-err");
        const isPasswordValid = validatePassword("password", "password-err");

        if (!isNameValid || !isEmailValid || !isBirthdateValid ||
            !isImageValid || !isGenderValid || !isPhoneValid || !isPasswordValid) {
            alert('Erro ao adicioar novo admin');
            return false;
        }

        alert('Admin adicionado com sucesso');
        return true;
    });
});
