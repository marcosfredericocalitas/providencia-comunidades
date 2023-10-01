// Validation by blur (Focusout event)
const validationsFunctions = [
    // Add student functions and params
    ["name", "nameErr", validateName],
    ["email", "emailErr", validateEmail],
    ["phone", "phoneErr", validatePhone],
    ["image", "imageErr", validateImage],

    // Edit Student functions and params
    ["edit-name", "edit-nameErr", validateName],
    ["edit-email", "edit-emailErr", validateEmail],
    ["edit-phone", "edit-phoneErr", validatePhone],
    ["edit-image", "edit-imageErr", validateImage]
];

validationsFunctions.forEach((array) => {
    validateByFocusOut(array[0], array[1], array[2]);
});