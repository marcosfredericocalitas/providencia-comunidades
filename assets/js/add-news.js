$(document).ready(function () {
    // Validation by blur (Focusout event)
    const validationAddNews = [
        // Add news functions and params
        ["title", "titleErr", validateTitle],
        ["category", "categoryErr", validateCategory],
        ["admin", "adminErr", validateAdmin],
        ["details", "detailsErr", validateDetails],
        ["image", "imageErr", validateImage]
    ];

    validationAddNews.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button (Click event)
    $("#btn-add-news").click(function () {
        const isValidTitle = validateTitle("title", "titleErr");
        const isValidCategory = validateCategory("category", "categoryErr");
        const isValidAdmin = validateAdmin("admin", "adminErr");
        const isValidDetails = validateDetails("details", "detailsErr");
        const isValidImage = validateImage("image", "imageErr");
    });

    if (!isValidTitle || !isValidCategory || !isValidAdmin || !isValidDetails || !isValidImage) {
        alert('Erro ao cadastrar noticia');
        return false;
    }

    alert('Notícia cadastrada com sucesso');
    return true
});