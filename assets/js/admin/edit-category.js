$(document).ready(function () {
    // Validation by focusout event
    const editCategoryValidationFields = [
        ["edit-name", "edit-name-err", validateName],
        ["edit-admin", "edit-admin-err", validateAdmin],
        ["edit-description", "edit-description-err", validateDescription],
    ];

    validateFieldsOnFocusOut(editCategoryValidationFields);

    // Validation by click button
    $("#btn-edit-category").click(function () {
        const isNameValid = validateName("edit-name", "edit-name-err");
        const isAdminValid = validateAdmin("edit-admin", "edit-admin-err");
        const isDescriptionValid = validateDescription("edit-description", "edit-description-err");

        if (!isNameValid || !isAdminValid || !isDescriptionValid) {
            return false;
        }

        showMessageEditedsuccessfully();
        cleanAllFields();
        return true;
    });
});
