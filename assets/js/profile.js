$(document).ready(function () {
    // Preview selected image
    previewImageBySelected("image", "image-preview");

    // Validation by blur (Focusout event)
    const validationsFunctionsProfile = [
        // Add student functions and params
        ["name", "name-err", validateName],
        ["email", "email-err", validateEmail],
        ["birthdate", "birthdate-err", validateBirthdate],
        ["gender", "gender-err", validateGender],
        ["phone", "phone-err", validatePhone]
    ];

    validationsFunctionsProfile.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button (Click event)
    $("#bnt-edit-profile").click(function () {
        const isNameValid = validateName("name", "name-err");
        const isEmailValid = validateEmail("email", "email-err");
        const isBirthdateValid = validateBirthdate("birthdate", "birthdate-err");
        const isGenderValid = validateGender("gender", "gender-err");
        const isValidPhone = validatePhone("phone", "phone-err");

        if (!isNameValid || !isEmailValid || !isBirthdateValid || !isGenderValid || !isValidPhone) {
            alert('Erro ao editar perfil');
            return false;
        }
        alert('Perfil editado com sucesso');
        return true;
    });
});