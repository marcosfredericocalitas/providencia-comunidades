$(document).ready(function () {
    // Validation by blur (Focusout event)
    const validationsFunctionsCourse = [
        // Add student functions and params
        ["edit-name", "edit-nameErr", validateName],
        ["edit-admin", "edit-adminErr", validateAdmin],
        ["edit-description", "edit-descriptionErr", validateDescription],
        ["edit-topics", "edit-topicsErr", validateTopics],
        ["edit-image", "edit-imageErr", validateImage]
    ];

    validationsFunctionsCourse.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button (Click event)
    $("#btn-edit-course").click(function () {
        const isValidEditName = validateName("edit-name", "edit-nameErr");
        const isValidEditAdmin = validateAdmin("edit-admin", "edit-adminErr");
        const isValidEditDescription = validateDescription("edit-description", "edit-descriptionErr");
        const isValidEditTopics = validateTopics("edit-topics", "edit-topicsErr");
        const isValidEditImage = validateImage("edit-image", "edit-imageErr");


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