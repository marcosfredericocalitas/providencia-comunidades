$(document).ready(function () {
    // Validation by blur (Focusout event)
    const validationsFunctionsCourse = [
        // Add student functions and params
        ["name", "name-err", validateName],
        ["admin", "admin-err", validateAdmin],
        ["description", "description-err", validateDescription],
        ["topics", "topics-err", validateTopics],
        ["image", "image-err", validateImage]
    ];

    validationsFunctionsCourse.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button (Click event)
    $("#btn-add-course").click(function () {
        const isValidName = validateName("name", "name-err");
        const isValidAdmin = validateAdmin("admin", "admin-err");
        const isValidDescription = validateDescription("description", "description-err");
        const isValidTopics = validateTopics("topics", "topics-err");
        const isValidImage = validateImage("image", "image-err");


        if (!isValidName || !isValidAdmin || !isValidDescription || !isValidTopics || !isValidImage) {
            alert("Erro ao cadastrar Curso");
            return false;
        }

        alert("Curso cadastrado com sucesso");
        return false;
    });

    // Preview the image when selected
    previewImageBySelected("image", "previe-image");
});