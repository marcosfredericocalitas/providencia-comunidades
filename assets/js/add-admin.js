$(document).ready(function () {
    // Preview selected image
    previewImageBySelected("image", "image-preview");
    // Validation by blur (Focusout event)
    validateByFocusOut("password", "password-err", validatePassword);

    // Validation by click button (Click event)
    $("#btn-add-admin").click(function () {
        const isValidName = validateName("name", "name-err");
        const isValidEmail = validateEmail("email", "email-err");
        const isValidImage = validateImage("image", "image-err");
        const isBirthDateValid = validateBirthdate("birthdate", "birthdate-err");
        const isValidGender = validateGender("gender", "gender-err");
        const isValidPhone = validatePhone("phone", "phone-err");
        const isValidPassword = validatePassword("password", "password-err");

        if (!isValidName || !isValidEmail || !isValidImage || !isBirthDateValid
            || !isValidGender || !isValidPhone || !isValidPassword) {
            alert('Erro ao cadastrar admin');
            return false;
        }

        alert('Admin cadastrado com sucesso');
        return true;
    })
})