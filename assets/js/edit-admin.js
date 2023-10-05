$(document).ready(function () {
    // Preview selected image
    previewImageBySelected("edit-image", "edit-image-preview");
    // Validation by blur (Focusout event)
    validateByFocusOut("edit-password", "edit-password-err", validatePassword);

    // Validation by click button (Click event)
    $("#btn-edit-admin").click(function () {
        const isValidEditName = validateName("edit-name", "edit-name-err");
        const isValidEditEmail = validateEmail("edit-email", "edit-email-err");
        const isValidEditImage = validateImage("edit-image", "edit-image-err");
        const isEditBirthDateValid = validateBirthdate("edit-birthdate", "edit-birthdate-err");
        const isValidEditGender = validateGender("edit-gender", "edit-gender-err");
        const isValidEditPhone = validatePhone("edit-phone", "edit-phone-err");
        const isValidEditPassword = validatePassword("edit-password", "edit-password-err");

        if (!isValidEditName || !isValidEditEmail || !isValidEditImage || !isEditBirthDateValid ||
            !isValidEditGender || !isValidEditPhone || !isValidEditPassword) {
            alert('Erro ao editar admin');
            return false;
        }

        alert('Admin editado com sucesso');
        return true;
    })

    togglePasswordVisibility("#edit-btn-eye-open", "#password", "#edit-btn-eye-close");
    togglePasswordVisibility("#edit-btn-eye-close", "#password", "#edit-btn-eye-open");
})