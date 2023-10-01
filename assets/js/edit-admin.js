$(document).ready(function () {
    // Validation by blur (Focusout event)
    validateByFocusOut("edit-password", "edit-passwordErr", validatePasssword);

    // Validation by click button (Click event)
    $("#btn-edit-admin").click(function () {
        const isValidEditName = validateName("edit-name", "edit-nameErr");
        const isValidEditEmail = validateEmail("edit-email", "edit-emailErr");
        const isValidEditPhone = validatePhone("edit-phone", "edit-phoneErr");
        const isValidEditImage = validateImage("edit-image", "edit-imageErr");
        const isValidEditGender = validateGender("edit-gender", "edit-genderErr");
        const isValidEditPassword = validatePasssword("edit-password", "edit-passwordErr");

        if (!isValidEditName || !isValidEditEmail || !isValidEditPhone ||
            !isValidEditImage || !isValidEditGender || !isValidEditPassword) {
            alert('Erro ao editar admin');
            return false;
        }

        alert('Admin editado com sucesso');
        return true;
    })

    togglePasswordVisibility("#edit-btn-eye-open", "#password", "#edit-btn-eye-close");
    togglePasswordVisibility("#edit-btn-eye-close", "#password", "#edit-btn-eye-open");
})