$(document).ready(function () {
    // Set image preview
    setImagePreview("image", "image-preview");

    // Validation by focusout event
    const NewsValidationFunctions = [
        ["title", "title-err", validateTitle],
        ["category", "category-err", validateCategory],
        ["admin", "admin-err", validateAdmin],
        ["details", "details-err", validateDetails],
        ["image", "image-err", validateImage]
    ];

    NewsValidationFunctions.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button
    $("#btn-add-news").click(function () {
        const isValidTitle = validateTitle("title", "title-err");
        const isValidCategory = validateCategory("category", "category-err");
        const isValidAdmin = validateAdmin("admin", "admin-err");
        const isValidDetails = validateDetails("details", "details-err");
        const isImageValid = validateImage("image", "image-err");

        if (!isValidTitle || !isValidCategory || !isValidAdmin || !isValidDetails || !isImageValid) {
            alert('Erro ao adicioar novo notícia');
            return false;
        }

        alert('Notícia adicionado com sucesso');
        return true;
    });
});


