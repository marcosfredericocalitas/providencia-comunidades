$(document).ready(function () {
    // Set image preview
    setImagePreview("image", "image-preview");

    // Validation by blur (Focusout event)
    const courseValidationFunctions = [
        ["name", "name-err", validateName],
        ["admin", "admin-err", validateAdmin],
        ["description", "description-err", validateDescription],
        ["topics", "topics-err", validateTopics],
        ["image", "image-err", validateImage]
    ];

    courseValidationFunctions.forEach((array) => {
        validateByFocusOut(array[0], array[1], array[2]);
    });

    // Validation by click button (Click event)
    $("#btn-add-course").click(function () {
        const isNameValid = validateName("name", "name-err");
        const isValidAdmin = validateAdmin("admin", "admin-err");
        const isValidDescription = validateDescription("description", "description-err");
        const isValidTopics = validateTopics("topics", "topics-err");
        const isImageValid = validateImage("image", "image-err");

        if (!isNameValid || !isValidAdmin || !isValidDescription || !isValidTopics || !isImageValid) {
            alert('Erro ao adicionar novo curso');
            return false;
        }

        alert('Curso adicionado com sucesso');
        return true;
    });
});
