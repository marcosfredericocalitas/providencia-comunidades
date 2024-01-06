$(document).ready(function () {
    // Validation by focusout event
    const categoryValidationByFocusOUt = [
        ["name", "name-err", validateName],
        ["admin", "admin-err", validateAdmin],
        ["description", "description-err", validateDescription],
    ];

    categoryValidationByFocusOUt.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

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
