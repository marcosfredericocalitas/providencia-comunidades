$(document).ready(function () {
    // Set image preview
    setImagePreview("image", "image-preview");

    // Validation by focusout event
    const NewsValidationFunctions = [
        ["title", "title-err", validateTitle],
        ["category", "category-err", validateCategory],
        ["details", "details-err", validateDetails],
        ["date", "date-err", validateDate],
        ["hour", "hour-err", validateHour],
        ["admin", "admin-err", validateAdmin],
        ["image", "image-err", validateImage]
    ];

    NewsValidationFunctions.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button
    $("#btn-add-news").click(function () {
        const isTitleValid = validateTitle("title", "title-err");
        const isCategoryValid = validateCategory("category", "category-err");
        const isDetailsValid = validateDetails("details", "details-err");
        const isDateValid = validateDate("date", "date-err");
        const isHourValid = validateHour("hour", "hour-err");
        const isAdminValid = validateAdmin("admin", "admin-err");
        const isImageValid = validateImage("image", "image-err");

        if (!isTitleValid || !isCategoryValid || !isDetailsValid ||
            !isDateValid || !isHourValid || !isAdminValid || !isImageValid) {
            alert('Erro ao adicioar novo notícia');
            return false;
        }

        alert('Notícia adicionado com sucesso');
        return true;
    });
});


