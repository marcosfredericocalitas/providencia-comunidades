$(document).ready(function () {
    // Preview selected image
    previewImageBySelected("image", "image-preview");
    // Validation by blur (Focusout event)
    validateByFocusOut("course", "course-err", validateCourse);

    // Validation by click button (Click event)
    $("#btn-add-student").click(function () {
        const isNameValid = validateName("name", "name-err");
        const isEmailValid = validateEmail("email", "email-err");
        const isBirthDateValid = validateBirthdate("birthdate", "birthdate-err");
        const isGenderValid = validateGender("gender", "gender-err");
        const iscourseValid = validateCourse("course", "course-err");
        const isPhoneValid = validatePhone("phone", "phone-err");
        const isValidImage = validateImage("image", "image-err");

        if (!isNameValid || !isEmailValid || !isBirthDateValid || !isGenderValid ||
            !iscourseValid || !isPhoneValid || !isValidImage) {
            alert('Erro ao cadastrar aluno');
            return false;
        }

        alert('Aluno cadastrado com sucesso');
        return true;
    });
});