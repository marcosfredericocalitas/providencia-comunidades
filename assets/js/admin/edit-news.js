$(document).ready(function () {
    // Set image preview
    setImagePreview("edit-image", "edit-image-preview");

    // Validation by focusout event
    const NewsValidationFunctions = [
        ["edit-title", "edit-title-err", validateTitle],
        ["edit-category", "edit-category-err", validateCategory],
        ["edit-admin", "edit-admin-err", validateAdmin],
        ["edit-details", "edit-details-err", validateDetails],
        ["edit-image", "edit-image-err", validateImage]
    ];

    NewsValidationFunctions.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button
    $("#btn-edit-news").click(function () {
        const isValidTitle = validateTitle("edit-title", "edit-title-err");
        const isValidCategory = validateCategory("edit-category", "edit-category-err");
        const isValidAdmin = validateAdmin("edit-admin", "edit-admin-err");
        const isValidDetails = validateDetails("edit-details", "edit-details-err");
        const isImageValid = validateImage("edit-image", "edit-image-err");

        if (!isValidTitle || !isValidCategory || !isValidAdmin || !isValidDetails || !isImageValid) {
            alert('Erro ao adicioar novo notícia');
            return false;
        }

        alert('Notícia adicionado com sucesso');
        return true;
    });
});

