$(document).ready(function () {
    // Preview selected image
    previewImageBySelected("edit-image", "edit-imagePreview");
    // Validation by blur (Focusout event)
    validateByFocusOut("edit-course", "edit-courseErr", validateCourse);

    // Validation by click button (Click event)
    $("#btn-edit-student").click(function () {
        const isEditNameValid = validateName("edit-name", "edit-nameErr");
        const isEditEmailValid = validateEmail("edit-email", "edit-emailErr");
        const isValidBirthDate = validateBithDate("edit-birthdate", "edit-birthdateErr");
        const isEditCourseValid = validateCourse("edit-course", "edit-courseErr");
        const isValidEditImage = validateImage("edit-image", "edit-imageErr");
        const isEditGenderValid = validateGender("edit-gender", "edit-genderErr");
        const isEditPhoneValid = validatePhone("edit-phone", "edit-phoneErr");

        if (!isEditNameValid || !isEditEmailValid || !isValidBirthDate || !isEditCourseValid ||
            !isValidEditImage || !isEditGenderValid || !isEditPhoneValid) {
            alert('Erro ao cadastrar aluno');
            return false;
        }

        alert('Aluno cadastrado com sucesso');
        return true;
    });
});