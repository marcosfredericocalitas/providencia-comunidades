$(document).ready(function () {
    // Preview selected image
    previewImageBySelected("edit-image", "edit-image-preview");
    // Validation by blur (Focusout event)
    validateByFocusOut("edit-course", "edit-course-err", validateCourse);

    // Validation by click button (Click event)
    $("#btn-edit-student").click(function () {
        const isEditNameValid = validateName("edit-name", "edit-name-err");
        const isEditEmailValid = validateEmail("edit-email", "edit-email-err");
        const isValidBirthDate = validateBithDate("edit-birthdate", "edit-birthdate-err");
        const isEditCourseValid = validateCourse("edit-course", "edit-course-err");
        const isValidEditImage = validateImage("edit-image", "edit-image-err");
        const isEditGenderValid = validateGender("edit-gender", "edit-gender-err");
        const isEditPhoneValid = validatePhone("edit-phone", "edit-phone-err");

        if (!isEditNameValid || !isEditEmailValid || !isValidBirthDate || !isEditCourseValid ||
            !isValidEditImage || !isEditGenderValid || !isEditPhoneValid) {
            alert('Erro ao cadastrar aluno');
            return false;
        }

        alert('Aluno cadastrado com sucesso');
        return true;
    });
});