$(document).ready(function () {
    // Set image preview
    setImagePreview("edit-image", "edit-image-preview");

    // Validation by focusout event
    const courseValidation = [
        ["edit-name", "edit-name-err", validateName],
        ["edit-category", "edit-category-err", validateCategory],
        ["edit-admin", "edit-admin-err", validateAdmin],
        ["edit-description", "edit-description-err", validateDescription],
        ["edit-details", "edit-details-err", validateDetails],
        ["edit-topics", "edit-topics-err", validateTopics],
        ["edit-total-content", "edit-total-content-err", validateTotalContent],
        ["edit-duration", "edit-duration-err", validateDuration],
        ["edit-level", "edit-level-err", validateLevel],
        ["edit-language", "edit-language-err", validateLanguage],
        ["edit-certificate", "edit-certificate-err", validateCertificate],
        ["edit-image", "edit-image-err", validateImage]
    ];

    courseValidation.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button
    $("#btn-edit-course").click(function () {
        const isEditNameValid = validateName("edit-name", "edit-name-err");
        const isEditCategoryValid = validateCategory("edit-category", "edit-category-err");
        const isEditAdminValid = validateAdmin("edit-admin", "edit-admin-err");
        const isEditDescriptionValid = validateDescription("edit-description", "edit-description-err");
        const isEditDetailsValid = validateDetails("edit-details", "edit-details-err");
        const isEditTopicsValid = validateTopics("edit-topics", "edit-topics-err");
        const isEditTotalContentValid = validateTotalContent("edit-total-content", "edit-total-content-err");
        const isEditDurationValid = validateDuration("edit-duration", "edit-duration-err");
        const isEditLevelValid = validateLevel("edit-level", "edit-level-err");
        const isEditLanguageValid = validateLanguage("edit-language", "edit-language-err");
        const isEditCertificateValid = validateCertificate("edit-certificate", "edit-certificate-err");
        const isEditEditImageValid = validateImage("edit-image", "edit-image-err");

        if (!isEditNameValid || !isEditCategoryValid || !isEditAdminValid || !isEditDescriptionValid ||
            !isEditDetailsValid || !isEditTopicsValid || !isEditTotalContentValid || !isEditDurationValid ||
            !isEditLevelValid || !isEditLanguageValid || !isEditCertificateValid || !isEditEditImageValid) {
            return false;
        }

        showMessageEditedsuccessfully();
        return true;
    });
});
