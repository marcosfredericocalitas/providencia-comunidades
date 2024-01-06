$(document).ready(function () {
    // Set image preview
    setImagePreview("image", "image-preview");

    // Validation by focusout event
    const courseValidation = [
        ["name", "name-err", validateName],
        ["category", "category-err", validateCategory],
        ["admin", "admin-err", validateAdmin],
        ["description", "description-err", validateDescription],
        ["details", "details-err", validateDetails],
        ["topics", "topics-err", validateTopics],
        ["total-content", "total-content-err", validateTotalContent],
        ["duration", "duration-err", validateDuration],
        ["level", "level-err", validateLevel],
        ["language", "language-err", validateLanguage],
        ["certificate", "certificate-err", validateCertificate],
        ["image", "image-err", validateImage]
    ];

    courseValidation.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button
    $("#btn-add-course").click(function () {
        const isNameValid = validateName("name", "name-err");
        const isCategoryValid = validateCategory("category", "category-err");
        const isAdminValid = validateAdmin("admin", "admin-err");
        const isDescriptionValid = validateDescription("description", "description-err");
        const isDetailsValid = validateDetails("details", "details-err");
        const isTopicsValid = validateTopics("topics", "topics-err");
        const isTotalContentValid = validateTotalContent("total-content", "total-content-err");
        const isDurationValid = validateDuration("duration", "duration-err");
        const isLevelValid = validateLevel("level", "level-err");
        const isLanguageValid = validateLanguage("language", "language-err");
        const isCertificateValid = validateCertificate("certificate", "certificate-err");
        const isEditImageValid = validateImage("image", "image-err");

        if (!isNameValid || !isCategoryValid || !isAdminValid || !isDescriptionValid ||
            !isDetailsValid || !isTopicsValid || !isTotalContentValid || !isDurationValid ||
            !isLevelValid || !isLanguageValid || !isCertificateValid || !isEditImageValid) {
            return false;
        }

        showMessageAddedsuccessfully();
        return true;
    });
});
