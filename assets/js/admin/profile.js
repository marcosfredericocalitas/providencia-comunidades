$(document).ready(function () {
    // Preview selected image
    setImagePreview("image", "image-preview");

    // Validation by focusout event
    const profileValidationFunctions = [
        // Add student functions and params
        ["image", "image-err", validateImage],
        ["name", "name-err", validateName],
        ["email", "email-err", validateEmail],
        ["birthdate", "birthdate-err", validateBirthdate],
        ["gender", "gender-err", validateGender],
        ["phone", "phone-err", validatePhone]
    ];

    profileValidationFunctions.forEach((validation) => {
        validateByFocusOut(validation[0], validation[1], validation[2]);
    });

    // Validation by click button (Image)
    $("#btn-edit-image").click(function () {
        const isImageValid = validateImage("image", "image-err");

        if (!isImageValid) {
            return false;
        }
        showMessageSavedSuccessfully();
        return true;
    });

    // Validation by click button (Data)
    $("#btn-edit-profile").click(function () {
        const isNameValid = validateName("name", "name-err");
        const isEmailValid = validateEmail("email", "email-err");
        const isBirthdateValid = validateBirthdate("birthdate", "birthdate-err");
        const isGenderValid = validateGender("gender", "gender-err");
        const isPhoneValid = validatePhone("phone", "phone-err");

        if (!isNameValid || !isEmailValid || !isBirthdateValid || !isGenderValid || !isPhoneValid) {
            return false;
        }

        showMessageSavedSuccessfully();
        return true;
    })
});