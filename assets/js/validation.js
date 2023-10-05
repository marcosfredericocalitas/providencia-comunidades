// Get value from input by type
function getInputValue(inputId, inputType) {
    const input = $("#" + inputId);

    switch (inputType) {
        case "text":
            return input.val();

        case "select":
            return input.find(':selected').val();

        case "radio":
            return $("input[name='" + inputId + "']:checked").val();

        case "file":
            return input[0].files[0];

        default:
            return false;
    }
}

// Show error messages
function showErrorMessage(inputId, errorId, errorMessage) {
    $("#" + inputId).removeClass("is-blue");
    $("#" + inputId).addClass("is-red");
    $("#" + errorId).addClass("is-flex").html(errorMessage);
    return false;
}

// Hide error message
function hideErrorMessage(inputId, errorId) {
    $("#" + inputId).addClass("is-blue");
    $("#" + inputId).removeClass("is-red");
    $("#" + errorId).removeClass("is-flex");
    return true;
}

// Validation 
function validation(inputId, errorId, inputType, regexCode, message1, message2) {
    let inputValue = getInputValue(inputId, inputType);
    const regex = regexCode;

    if (inputValue === "") {
        return showErrorMessage(inputId, errorId, message1);
    }

    if (!regex.test(inputValue)) {
        return showErrorMessage(inputId, errorId, message2);
    }

    return hideErrorMessage(inputId, errorId);
}

// Function validate text
function validationText(inputId, errorId, field) {
    return validation(
        inputId, errorId, 'text', /^[A-Z][a-z]*/,
        "O campo " + field + " não pode estar vazio",
        field + " deve iniciar com letra maiúscula"
    )
}

// Validate by select
function validateIfIsEmpty(inputId, errorId, message, type) {
    let input = getInputValue(inputId, type)

    if (input === "") {
        return showErrorMessage(inputId, errorId, message);
    }

    return hideErrorMessage(inputId, errorId);
}

// Validate file size
function validateFileSize(file, fileSize) {
    return file.size <= fileSize;
}

//Validate file extention
function validateFileExtention(file, extension = []) {
    const allowedExtensions = extension;
    const fileExtension = file.name.split('.').pop().toLowerCase();
    return allowedExtensions.includes(fileExtension);
}

// Preview the image when selected
function previewImageBySelected(inputId, previewId) {
    const inputImagem = $("#" + inputId);
    const previewImagem = $("#" + previewId);

    inputImagem.change(function () {
        const arquivo = this.files[0];

        if (arquivo) {
            const leitor = new FileReader();

            leitor.onload = function (e) {
                previewImagem.attr('src', e.target.result);
            };

            leitor.readAsDataURL(arquivo);
        } else {
            previewImagem.attr('src', '');
        }
    });
}
/* ----------------------------------------------------------------------------------------------- */

// Validate by Focus Out
function validateByFocusOut(input, error, validate) {
    let inputId = ("#" + input)
    $(inputId).focusout(() => {
        validate(input, error);
    });
}

// Validate name
function validateName(inputId, errorId) {
    return validationText(inputId, errorId, "nome")
}

// Validate title
function validateTitle(inputId, errorId) {
    return validationText(inputId, errorId, "título")
}

// Validate title
function validateCategory(inputId, errorId) {
    return validationText(inputId, errorId, "categoria")
}

// Validate email
function validateEmail(inputId, errorId) {
    return validation(
        inputId, errorId, 'text',
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'O campo email não pode estar vazio',
        'Digite um endereço de e-mail válido'
    )
}

// Validate hone number
function validatePhone(inputId, errorId) {
    return validation(
        inputId, errorId, 'text', /^\d{9}$/,
        'O campo telefone não pode estar vazio',
        'O número de telefone deve conter apenas 9 digitos'
    )
}

function validateBirthdate(inputId, errorId) {
    return validation(
        inputId, errorId, "text",
        /^(19[7-9][5-9]|20[0-1][0-8])-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
        "O campo data de nascimento não pode estar vazio",
        "O seu ano deve ser maior que 1975 & menor que 2019");
}

// Validate password
function validatePassword(inputId, errorId) {
    return validation(
        inputId, errorId, "text",
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "O campo senha não pode estar vazio",
        "A sua senha deve ter pelo menos 8 caracteres, letras maiusculas, minusculas, números e caracteres especiais (@, $, !, %, &)"
    );
}

// Validate Course
function validateCourse(inputId, errorId) {
    return validateIfIsEmpty(inputId, errorId, "O campo curso não pode estar vazio", "select");
}

// Validate admin
function validateAdmin(inputId, errorId) {
    return validateIfIsEmpty(inputId, errorId, "O campo admin não pode estar vazio", "select");
}

// Validate description
function validateDescription(inputId, errorId) {
    return validateIfIsEmpty(inputId, errorId, "O campo descrição não pode estar vazio", "text");
}

// Validate topics
function validateTopics(inputId, errorId) {
    return validateIfIsEmpty(inputId, errorId, "O campo tópicos não pode estar vazio", "text");
}

// Validate details
function validateDetails(inputId, errorId) {
    return validateIfIsEmpty(inputId, errorId, "O campo detalhes não pode estar vazio", "text");
}

// Validate gender
function validateGender(inputId, errorId) {
    let gender = getInputValue(inputId, "radio")

    if (gender !== "Masculino" && gender !== "Feminino") {
        return showErrorMessage(inputId, errorId, "O campo sexo não pode estar vazio");
    }

    return hideErrorMessage(inputId, errorId);
}

// Validate image
function validateImage(inputId, errorId) {
    let image = getInputValue(inputId, "file");

    if (!image) {
        return showErrorMessage(inputId, errorId, "O campo imagem não pode estar vazio");
    }

    let validExtension = ["png", "jpg", "jpeg"];
    if (!validateFileExtention(image, validExtension)) {
        return showErrorMessage(inputId, errorId, "Por favor, selecione uma imagem válida (PNG, JPG ou JPEG)")
    }

    if (!validateFileSize(image, 3145728)) {
        return showErrorMessage(inputId, errorId, "A sua imagem deve ter no maximo 3MB")
    }

    return hideErrorMessage(inputId, errorId);
}