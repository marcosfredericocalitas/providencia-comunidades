$(document).ready(function () {
    // Set image preview
    setImagePreview("edit-image", "edit-image-preview");

    // Validation by blur (Focusout event)
    const courseValidationFunctions = [
        ["edit-name", "edit-name-err", validateName],
        ["edit-admin", "edit-admin-err", validateAdmin],
        ["edit-description", "edit-description-err", validateDescription],
        ["topics", "edit-topics-err", validateTopics],
        ["edit-image", "edit-image-err", validateImage]
    ];

    courseValidationFunctions.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button (Click event)
    $("#btn-edit-course").click(function () {
        const isEditNameValid = validateName("edit-name", "edit-name-err");
        const isEditValidAdmin = validateAdmin("edit-admin", "edit-admin-err");
        const isEditValidDescription = validateDescription("edit-description", "edit-description-err");
        const isEditValidTopics = validateTopics("edit-topics", "edit-topics-err");
        const isEditImageValid = validateImage("edit-image", "edit-image-err");

        if (!isEditNameValid || !isEditValidAdmin || !isEditValidDescription || !isEditValidTopics || !isEditImageValid) {
            alert('Erro ao adicionar novo curso');
            return false;
        }

        alert('Curso adicionado com sucesso');
        return true;
    });
});
