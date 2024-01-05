$(document).ready(function () {
    // Set image preview
    setImagePreview("edit-image", "edit-image-preview");

    // Validation by focusout event
    const EditNewsValidationByFocusOUt = [
        ["edit-title", "edit-title-err", validateTitle],
        ["edit-category", "edit-category-err", validateCategory],
        ["edit-details", "edit-details-err", validateDetails],
        ["edit-date", "edit-date-err", validateDate],
        ["edit-hour", "edit-hour-err", validateHour],
        ["edit-location", "edit-location-err", validateLocation],
        ["edit-admin", "edit-admin-err", validateAdmin],
        ["edit-image", "edit-image-err", validateImage]
    ];

    EditNewsValidationByFocusOUt.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button
    $("#btn-edit-news").click(function () {
        const isEditTitleValid = validateTitle("edit-title", "edit-title-err");
        const isEditCategoryValid = validateCategory("edit-category", "edit-category-err");
        const isEditDetailsValid = validateDetails("edit-details", "edit-details-err");
        const isEditDateValid = validateDate("edit-date", "edit-date-err");
        const isEditHourValid = validateHour("edit-hour", "edit-hour-err");
        const isEditLocationValid = validateLocation("edit-location", "edit-location-err");
        const isEditAdminValid = validateAdmin("edit-admin", "edit-admin-err");
        const isEditImageValid = validateImage("edit-image", "edit-image-err");

        if (!isEditTitleValid || !isEditCategoryValid || !isEditDetailsValid ||
            !isEditDateValid || !isEditHourValid || !isEditLocationValid || !isEditAdminValid || !isEditImageValid) {
            alert('Erro ao editar notícia');
            return false;
        }

        alert('Notícia editada com sucesso');
        return true;
    });
});


