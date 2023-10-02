$(document).ready(function () {
    // Validation by blur (Focusout event)
    const validationsFunctionsCourse = [
        // Add student functions and params
        ["edit-name", "edit-name-err", validateName],
        ["edit-admin", "edit-admin-err", validateAdmin],
        ["edit-description", "edit-description-err", validateDescription],
        ["edit-topics", "edit-topics-err", validateTopics],
        ["edit-image", "edit-image-err", validateImage]
    ];

    validationsFunctionsCourse.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button (Click event)
    $("#btn-edit-course").click(function () {
        const isValidEditName = validateName("edit-name", "edit-name-err");
        const isValidEditAdmin = validateAdmin("edit-admin", "edit-admin-err");
        const isValidEditDescription = validateDescription("edit-description", "edit-description-err");
        const isValidEditTopics = validateTopics("edit-topics", "edit-topics-err");
        const isValidEditImage = validateImage("edit-image", "edit-image-err");


        if (!isValidEditName || !isValidEditAdmin || !isValidEditDescription ||
            !isValidEditTopics || !isValidEditImage) {
            alert("Erro ao editar Curso");
            return false;
        }

        alert("Curso editado com sucesso");
        return false;
    });

    // Preview the image when selected
    previewImageBySelected("edit-image", "previe-edit-image");
});