$(document).ready(function () {
    // Set image preview
    setImagePreview("image", "image-preview");

    // Validation by focusout event
    const newsValidationFields = [
        ["title", "title-err", validateTitle],
        ["category", "category-err", validateCategory],
        ["details", "details-err", validateDetails],
        ["date", "date-err", validateDate],
        ["hour", "hour-err", validateHour],
        ["location", "location-err", validateLocation],
        ["admin", "admin-err", validateAdmin],
        ["image", "image-err", validateImage]
    ];

    validateFieldsOnFocusOut(newsValidationFields);

    // Validation by click button
    $("#btn-add-news").click(function () {
        const isTitleValid = validateTitle("title", "title-err");
        const isCategoryValid = validateCategory("category", "category-err");
        const isDetailsValid = validateDetails("details", "details-err");
        const isDateValid = validateDate("date", "date-err");
        const isHourValid = validateHour("hour", "hour-err");
        const isLocationValid = validateLocation("location", "location-err");
        const isAdminValid = validateAdmin("admin", "admin-err");
        const isImageValid = validateImage("image", "image-err");

        if (!isTitleValid || !isCategoryValid || !isDetailsValid || !isDateValid ||
            !isHourValid || !isLocationValid || !isAdminValid || !isImageValid) {
            return false;
        }

        showMessageAddedsuccessfully();
        return true;
    });
});


