$(document).ready(function () {
    // Validation by blur (Focusout event)
    const validationAddNews = [
        // Add news functions and params
        ["title", "title-err", validateTitle],
        ["category", "category-err", validateCategory],
        ["admin", "admin-err", validateAdmin],
        ["details", "details-err", validateDetails],
        ["image", "image-err", validateImage]
    ];

    validationAddNews.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button (Click event)
    $("#btn-add-news").click(function () {
        const isValidTitle = validateTitle("title", "title-err");
        const isValidCategory = validateCategory("category", "category-err");
        const isValidAdmin = validateAdmin("admin", "admin-err");
        const isValidDetails = validateDetails("details", "details-err");
        const isValidImage = validateImage("image", "image-err");
    });

    if (!isValidTitle || !isValidCategory || !isValidAdmin || !isValidDetails || !isValidImage) {
        alert('Erro ao cadastrar noticia');
        return false;
    }

    alert('Notícia cadastrada com sucesso');
    return true
});