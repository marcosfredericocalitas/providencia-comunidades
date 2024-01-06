$(document).ready(function () {
    // Validation by focusout event
    const categoryValidationFields = [
        ["name", "name-err", validateName],
        ["admin", "admin-err", validateAdmin],
        ["description", "description-err", validateDescription],
    ];

    validateFieldsOnFocusOut(categoryValidationFields);

    // Validation by click button
    $("#btn-add-category").click(function () {
        const isNameValid = validateName("name", "name-err");
        const isAdminValid = validateAdmin("admin", "admin-err");
        const isDescriptionValid = validateDescription("description", "description-err");

        if (!isNameValid || !isAdminValid || !isDescriptionValid) {
            return false;
        }

        showMessageAddedsuccessfully();
        return true;
    });
});
