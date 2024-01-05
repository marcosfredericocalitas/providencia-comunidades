$(document).ready(function () {
    // Validation by focusout event
    const EditcategoryValidationByFocusOUt = [
        ["edit-name", "edit-name-err", validateName],
        ["edit-admin", "edit-admin-err", validateAdmin],
        ["edit-description", "edit-description-err", validateDescription],
    ];

    EditcategoryValidationByFocusOUt.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button
    $("#btn-edit-category").click(function () {
        const isNameValid = validateName("edit-name", "edit-name-err");
        const isAdminValid = validateAdmin("edit-admin", "edit-admin-err");
        const isDescriptionValid = validateDescription("edit-description", "edit-description-err");

        if (!isNameValid || !isAdminValid || !isDescriptionValid) {
            alert('Erro ao adicionar nova categoria');
            return false;
        }

        alert('Categoria adicionado com sucesso');
        return true;
    });
});
