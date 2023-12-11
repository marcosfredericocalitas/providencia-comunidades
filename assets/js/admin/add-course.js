$(document).ready(function () {
    // Set image preview
    setImagePreview("image", "image-preview");

    // Validation by focusout event
    const courseValidation = [
        ["name", "name-err", validateName],
        ["admin", "admin-err", validateAdmin],
        ["description", "description-err", validateDescription],
        ["details", "details-err", validateDetails],
        ["topics", "topics-err", validateTopics],
        ["image", "image-err", validateImage]
    ];

    courseValidation.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button
    $("#btn-add-course").click(function () {
        const isNameValid = validateName("name", "name-err");
        const isAdminValid = validateAdmin("admin", "admin-err");
        const isDescriptionValid = validateDescription("description", "description-err");
        const isDetailsValid = validateDetails("details", "details-err");
        const isTopicsValid = validateTopics("topics", "topics-err");
        const isEditImageValid = validateImage("image", "image-err");

        if (!isNameValid || !isAdminValid || isDetailsValid || !isDescriptionValid || !isTopicsValid || !isEditImageValid) {
            alert('Erro ao adicionar novo curso');
            return false;
        }

        alert('Curso adicionado com sucesso');
        return true;
    });
});
