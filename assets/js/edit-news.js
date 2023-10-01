$(document).ready(function () {
    // Validation by blur (Focusout event)
    const validateEditNews = [
        // Edit Student functions and params
        ["edit-title", "edit-titleErr", validateTitle],
        ["edit-category", "edit-categoryErr", validateCategory],
        ["edit-admin", "edit-adminErr", validateAdmin],
        ["edit-details", "edit-detailsErr", validateDetails],
        ["edit-image", "edit-imageErr", validateImage]
    ];

    validateEditNews.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button (Click event)
    $("#btn-edit-news").click(function () {
        const isValidEditTitle = validateTitle("edit-title", "edit-titleErr");
        const isValidEditCategory = validateCategory("edit-category", "edit-categoryErr");
        const isValidEditAdmin = validateAdmin("edit-admin", "edit-adminErr");
        const isValidEditDetails = validateDetails("edit-details", "edit-detailsErr");
        const isValidEditImage = validateImage("edit-image", "edit-imageErr");
    });

    if (!isValidEditTitle || !isValidEditCategory || !isValidEditAdmin ||
        !isValidEditDetails || !isValidEditImage) {
        alert('Erro ao ediatr noticia');
        return false;
    }

    alert('Notícia editada com sucesso');
    return true
});