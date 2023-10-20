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
        return showErrorMessage(input, error, "O campo " + field + " não pode estár vazio");
    }

    if (!regex.test(inputValue)) {
        return showErrorMessage(input, error, message);
    }

    hideErrorMessage(input, error);
    return true;
}

//  Texts validation
function validateText(input, error, field) {
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
        return showErrorMessage(input, error, "O campo " + field + " não pode estár vazio");
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

// Change password visibility
function togglePasswordVisibility(input, button, icon, icon2) {
    const inputPwd = $("#" + input);
    const butttonToggle = $("#" + button);
    const iconOpen = $("#" + icon);
    const iconClose = $("#" + icon2);


    butttonToggle.click(() => {
        if (inputPwd.attr("type") === "password") {
            inputPwd.attr("type", "text");
            $(iconOpen).addClass("is-none");
            $(iconClose).removeClass("is-none");
        } else {
            inputPwd.attr("type", "password");
            $(iconOpen).removeClass("is-none");
            $(iconClose).addClass("is-none");
        }
    });
}

/* ------------------------ Calling the functions ------------------------ */
// Name validation
function validateName(input, error) {
    return validateText(input, error, "Nome");
}

// Email validation
function validateEmail(input, error) {
    return validation(
        input, "email", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        error, "Email", "Digite um endereço de e-mail válido."
    )
}

// Birthdate validation
function validateBirthdate(input, error) {
    return validation(
        input, "date", /^(19[7-9][5-9]|20[0-1][0-8])-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
        error, "Data de nascimento", "O ano deve ser maior que 1975 e menor que 2019."
    );
}

// Gender validation
function validateGender(input, error) {
    let gender = getInputValue(input, "radio");
    const allowedGender = ["Masculino", "Feminino"];

    if (!allowedGender.includes(gender)) {
        return showErrorMessage(input, error, "O campo sexo não pode estár vazio.");
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
        "O número de telefone deve conter apenas 9 dígitos."
    );
}

// Image validation
function validateImage(input, error) {
    const image = getInputValue(input, "file");
    const allowedExtensions = ["png", "jpg", "jpeg"];
    const maxFileSize = 3145728;

    if (!image) {
        return showErrorMessage(input, error, "O campo imagem não pode estár vazio.");
    }

    if (!isValidImageExtension(image, allowedExtensions)) {
        return showErrorMessage(input, error, "Por favor, selecione uma imagem válida (PNG, JPG ou JPEG).");
    }

    if (!isValidImageSize(image, maxFileSize)) {
        return showErrorMessage(input, error, "Sua imagem deve ter um tamanho máximo de 3MB.");
    }

    return hideErrorMessage(input, error);
}

// Password validation
function validatePassword(input, error) {
    const password = getInputValue(input, "password");
    const requirements = [
        { regex: /^.{8,}$/, message: "Sua senha deve conter pelo menos 8 caracteres." },
        { regex: /[A-Z]/, message: "A sua senha deve ter pelo menos uma letra maiúscula." },
        { regex: /\d/, message: "Sua senha deve conter pelo menos um número de 0 à 9." },
        { regex: /[^a-zA-Z0-9]/, message: "Sua senha deve conter pelo menos um caractere especial (por exemplo: @, $, !, % ou &)." }
    ];

    if (isEmpty(password)) {
        return showErrorMessage(input, error, "O campo senha não pode estár vazio");
    }

    for (const requirement of requirements) {
        if (!requirement.regex.test(password)) {
            return showErrorMessage(input, error, requirement.message);
        }
    }

    return hideErrorMessage(input, error);
}

//------------------------------------------------------------------------
// Admin validation
function validateAdmin(input, error) {
    return validateSelect(input, error, "Admin");
}

// Description validation
function validateDescription(input, error) {
    return validateText(input, error, "Descrição");
}

// Topics validation
function validateTopics(input, error) {
    return validateText(input, error, "Tópicos");
}

//------------------------------------------------------------------------
// Title validation
function validateTitle(input, error) {
    return validateText(input, error, "Título");
}
// Category validation
function validateCategory(input, error) {
    return validateText(input, error, "Categoría")
}

function validateDetails(input, error) {
    return validateText(input, error, "Detalhes");
}

//------------------------------------------------------------------------
function validateConfirmPassword(input, input2, error) {
    const password = getInputValue(input, "password");
    const confirmPassword = getInputValue(input2, "password");

    if (isEmpty(confirmPassword)) {
        return showErrorMessage(input2, error, "O campo Confirmar senha não pode estár vazio");
    }

    if (confirmPassword !== password) {
        return showErrorMessage(input2, error, "As senhas não correspondem.");
    }

    return hideErrorMessage(input2, error);
}