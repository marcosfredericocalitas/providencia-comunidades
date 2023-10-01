$(document).ready(function () {
    // Validation by blur (Focusout event)
    validateByFocusOut("password", "passwordErr", validatePasssword);

    // Validation by click button (Click event)
    $("#btn-add-admin").click(function () {
        const isValidName = validateName("name", "nameErr");
        const isValidEmail = validateEmail("email", "emailErr");
        const isValidPhone = validatePhone("phone", "phoneErr");
        const isValidImage = validateImage("image", "imageErr");
        const isValidGender = validateGender("gender", "genderErr");
        const isValidPassword = validatePasssword("password", "passwordErr");

        if (!isValidName || !isValidEmail || !isValidPhone
            || !isValidImage || !isValidGender || !isValidPassword) {
            alert('Erro ao cadastrar admin');
            return false;
        }

        alert('Admin cadastrado com sucesso');
        return true;
    })
})