$(document).ready(function () {
    setImagePreview("edit-image", "edit-image-preview");

    // Validation by click button (Click event)
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
            alert('Erro ao adicioar novo admin');
            return false;
        }

        alert('Admin adicionado com sucesso');
        return true;
    });
});