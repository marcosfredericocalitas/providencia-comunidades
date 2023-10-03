$(document).ready(function () {
    // Preview selected image
    previewImageBySelected("edit-image", "edit-image-preview");
    // Validation by blur (Focusout event)
    validateByFocusOut("edit-course", "edit-course-err", validateCourse);

    // Validation by click button (Click event)
    $("#btn-edit-student").click(function () {
        const isEditNameValid = validateName("edit-name", "edit-name-err");
        const isEditEmailValid = validateEmail("edit-email", "edit-email-err");
        const isEditBirthDateValid = validateBirthdate("edit-birthdate", "edit-birthdate-err");
        const isEditGenderValid = validateGender("edit-gender", "edit-gender-err");
        const isEditCourseValid = validateCourse("edit-course", "edit-course-err");
        const isEditPhoneValid = validatePhone("edit-phone", "edit-phone-err");
        const isValidEditImage = validateImage("edit-image", "edit-image-err");

        if (!isEditNameValid || !isEditEmailValid || !isEditBirthDateValid || !isEditGenderValid ||
            !isEditCourseValid || !isEditPhoneValid || !isValidEditImage) {
            alert('Erro ao cadastrar aluno');
            return false;
        }

        alert('Aluno cadastrado com sucesso');
        return true;
    });
});