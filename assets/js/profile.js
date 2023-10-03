$(document).ready(function () {
    $("#bnt-edit-profile").click(function () {
        const isNameValid = validateName("name", "name-err");
        const isEmailValid = validateEmail("email", "email-err");
        const isBirthdateValid = validateBirthdate("birthdate", "birthdate-err");
        const isGenderValid = validateGender("gender", "gender-err");
        const isValidPhone = validatePhone("phone", "phone-err");

        if (!isNameValid || !isEmailValid || !isBirthdateValid || !isGenderValid || !isValidPhone) {
            alert('Erro ao editar perfil');
            return false;
        }
        alert('Perfil editado com sucesso');
        return true;
    });
});