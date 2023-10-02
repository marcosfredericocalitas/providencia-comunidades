$(document).ready(function () {
    // Validation by blur (Focusout event)
    const validateEditNews = [
        // Edit Student functions and params
        ["edit-title", "edit-title-err", validateTitle],
        ["edit-category", "edit-category-err", validateCategory],
        ["edit-admin", "edit-admin-err", validateAdmin],
        ["edit-details", "edit-details-err", validateDetails],
        ["edit-image", "edit-image-err", validateImage]
    ];

    validateEditNews.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button (Click event)
    $("#btn-edit-news").click(function () {
        const isValidEditTitle = validateTitle("edit-title", "edit-title-err");
        const isValidEditCategory = validateCategory("edit-category", "edit-category-err");
        const isValidEditAdmin = validateAdmin("edit-admin", "edit-admin-err");
        const isValidEditDetails = validateDetails("edit-details", "edit-details-err");
        const isValidEditImage = validateImage("edit-image", "edit-image-err");
    });

    if (!isValidEditTitle || !isValidEditCategory || !isValidEditAdmin ||
        !isValidEditDetails || !isValidEditImage) {
        alert('Erro ao ediatr noticia');
        return false;
    }

    alert('Notícia editada com sucesso');
    return true
});