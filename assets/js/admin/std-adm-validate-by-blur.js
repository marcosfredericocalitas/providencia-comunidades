// Validation by focusout event
const validationFunctions = [
    // Add student functions and params
    ["name", "name-err", validateName],
    ["email", "email-err", validateEmail],
    ["birthdate", "birthdate-err", validateBirthdate],
    ["phone", "phone-err", validatePhone],
    ["image", "image-err", validateImage],

    // Edit Student functions and params
    ["edit-name", "edit-name-err", validateName],
    ["edit-email", "edit-email-err", validateEmail],
    ["edit-birthdate", "edit-birthdate-err", validateBirthdate],
    ["edit-phone", "edit-phone-err", validatePhone],
    ["edit-image", "edit-image-err", validateImage]
];

validationFunctions.forEach((validation) => {
    validateByFocusOut(validation[0], validation[1], validation[2]);
});