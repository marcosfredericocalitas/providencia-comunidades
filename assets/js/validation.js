//Get input value
function getInputValue(input, type) {
    let inputId = $("#" + input);

    switch (type) {
        case "tel":
        case "date":
        case "text":
        case "email":
        case "textarea":
        case "password":
            return $(inputId).val();

        case "select":
            return $(inputId).find(":selected").val();

        case "radio":
            return $("input[name='" + input + "']:checked").val();

        case "file":
            return inputId[0].files[0];

        default:
            return false;
    }
}

// Show error message
function showErrorMessage(input, error, message) {
    $("#" + input).removeClass("is-blue");
    $("#" + input).addClass("is-red");
    $("#" + error).addClass("is-flex").html(message);
    return false;
}

// Hide error message
function hideErrorMessage(input, error) {
    $("#" + input).addClass("is-blue");
    $("#" + input).removeClass("is-red");
    $("#" + error).removeClass("is-flex");
    return true;
}

// Verify if input is empty
function isEmpty(input) {
    return input === "";
}

// Validation 
function validation(input, type, regex, error, field, message) {
    let inputValue = getInputValue(input, type);

    if (isEmpty(inputValue)) {
        return showErrorMessage(input, error, "O campo " + field + " não pode estar vazio");
    }

    if (!regex.test(inputValue)) {
        return showErrorMessage(input, error, message);
    }

    hideErrorMessage(input, error);
    return true;
}

//  Texts validation
function validationText(input, error, field) {
    return validation(
        input, "text", /^[A-Z][a-z]*/, error, field,
        field + " deve iniciar com uma letra maiúscula"
    );
}

// Validation by Focus Out
function validateByFocusOut(input, error, validate) {
    let inputId = ("#" + input)
    $(inputId).focusout(() => {
        validate(input, error);
    });
}

// Selects validation
function validateSelect(input, error, field) {
    let selectValue = getInputValue(input, "select");

    if (isEmpty(selectValue)) {
        return showErrorMessage(input, error, "O campo " + field + " não pode estar vazio");
    }

    return hideErrorMessage(input, error);
}

// Set image preview when selected
function setImagePreview(input, preview) {
    const inputImagem = $("#" + input);
    const previewImagem = $("#" + preview);

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

// file Extension validation
function isValidImageExtension(file, extensions = []) {
    const fileName = file.name;
    const allowedExtensions = extensions;
    const fileExtention = fileName.split(".").pop().toLowerCase();
    return allowedExtensions.includes(fileExtention);
}


// File size validatin
function isValidImageSize(file, size) {
    return file.size <= size;
}

/* ------ Calling the functions ------ */
// Name validation
function validateName(input, error) {
    return validationText(input, error, "Nome");
}

// Email validation
function validateEmail(input, error) {
    return validation(
        input, "email", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        error, "Email", "Digite um endereço de e-mail válido"
    )
}

// Birthdate validation
function validateBirthdate(input, error) {
    return validation(
        input, "date", /^(19[7-9][5-9]|20[0-1][0-8])-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
        error, "Data de nascimento", "O seu ano deve ser maior que 1975 & menor que 2019"
    );
}

// Gender validation
function validateGender(input, error) {
    let gender = getInputValue(input, "radio");
    const allowedGender = ["Masculino", "Feminino"];

    if (!allowedGender.includes(gender)) {
        return showErrorMessage(input, error, "O campo sexo não pode estar vazio");
    }

    return hideErrorMessage(input, error);
}

// Course validation
function validateCourse(input, error) {
    return validateSelect(input, error, "Curso");
}

// Phone validatiion
function validatePhone(input, error) {
    return validation(
        input, "tel", /^\d{9}$/, error, "Telefone",
        "O número de telefone deve conter apenas 9 digitos"
    );
}

// Image validation
function validateImage(input, error) {
    const image = getInputValue(input, "file");
    const allowedExtensions = ["png", "jpg", "jpeg"];
    const maxFileSize = 3145728;

    if (!image) {
        return showErrorMessage(input, error, "O campo imagem não pode estar vazio");
    }

    if (!isValidImageExtension(image, allowedExtensions)) {
        return showErrorMessage(input, error, "Por favor, selecione uma imagem válida (PNG, JPG ou JPEG)");
    }

    if (!isValidImageSize(image, maxFileSize)) {
        return showErrorMessage(input, error, "A sua imagem deve ter no maximo 3MB");
    }

    return hideErrorMessage(input, error);
}

// Password validation
function validatePassword(input, error) {
    const password = getInputValue(input, "password");
    const requirements = [
        { regex: /^.{8,}$/, message: "A sua senha deve ter pelo menos 8 caracteres" },
        { regex: /[A-Z]/, message: "A sua senha deve ter pelo menos uma letra maiúscula" },
        { regex: /\d/, message: "A sua senha deve ter pelo menos um número" },
        { regex: /[^a-zA-Z0-9]/, message: "A sua senha deve ter pelo menos 1 caractere especial (@ $ ! % &)" }
    ];

    if (isEmpty(password)) {
        return showErrorMessage(input, error, "O campo senha não pode estar vazio");
    }

    for (const requirement of requirements) {
        if (!requirement.regex.test(password)) {
            return showErrorMessage(input, error, requirement.message);
        }
    }

    return hideErrorMessage(input, error);
}
