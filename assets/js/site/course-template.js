$(document).ready(function () {
    addClassByClick("btn-signup-course", "modal-container", "is-visible");
    addClassByClick("btn-hide-signup-course", "modal-container", "is-visible")

    // Validation by click button
    $("#btn-signup-student").click(function () {
        const isEditNameValid = validateName("name", "name-err");
        const isEditEmailValid = validateEmail("email", "email-err");
        const isEditBirthdateValid = validateBirthdate("birthdate", "birthdate-err");
        const isEditGenderValid = validateGender("gender", "gender-err");
        const isEditPhoneValid = validatePhone("phone", "phone-err");
        const isEditImageValid = validateImage("image", "image-err");

        if (!isEditNameValid || !isEditEmailValid || !isEditBirthdateValid ||
            !isEditGenderValid || !isEditPhoneValid || !isEditImageValid) {
            alert('Erro ao adicionar novo aluno');
            return false;
        }

        alert('Aluno adicionado com sucesso');
        return true;
    });
});