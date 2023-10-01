$(document).ready(function () {
    // Validation by blur (Focusout event)
    validateByFocusOut("course", "courseErr", validateCourse);

    // Validation by click button (Click event)
    $("#btn-add-student").click(function () {
        const isNameValid = validateName("name", "nameErr");
        const isEmailValid = validateEmail("email", "emailErr");
        const iscourseValid = validateCourse("course", "courseErr");
        const isValidImage = validateImage("image", "imageErr");
        const isGenderValid = validateGender("gender", "genderErr");
        const isPhoneValid = validatePhone("phone", "phoneErr");

        if (!isNameValid || !isEmailValid || !iscourseValid ||
            !isValidImage || !isGenderValid || !isPhoneValid) {
            alert('Erro ao cadastrar aluno');
            return false;
        }

        alert('Aluno cadastrado com sucesso');
        return true;
    });
});