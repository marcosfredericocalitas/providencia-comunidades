$(document).ready(function () {
    // Set image preview
    setImagePreview("edit-image", "edit-image-preview");

    // Validation by focusout event
    const editCourseValidation = [
        ["edit-name", "edit-name-err", validateName],
        ["edit-admin", "edit-admin-err", validateAdmin],
        ["edit-description", "edit-description-err", validateDescription],
        ["edit-details", "edit-details-err", validateDetails],
        ["edit-topics", "edit-topics-err", validateTopics],
        ["edit-image", "edit-image-err", validateImage]
    ];

    editCourseValidation.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button
    $("#btn-edit-course").click(function () {
        const isEditNameValid = validateName("edit-name", "edit-name-err");
        const isEditValidAdmin = validateAdmin("edit-admin", "edit-admin-err");
        const isEditValidDescription = validateDescription("edit-description", "edit-description-err");
        const isDetailsValid = validateDetails("edit-details", "edit-details-err");
        const isEditValidTopics = validateTopics("edit-topics", "edit-topics-err");
        const isEditImageValid = validateImage("edit-image", "edit-image-err");

        if (!isEditNameValid || !isEditValidAdmin || !isEditValidDescription || !isDetailsValid || !isEditValidTopics || !isEditImageValid) {
            alert('Erro ao editar novo curso');
            return false;
        }

        alert('Curso editado com sucesso');
        return true;
    });
});
