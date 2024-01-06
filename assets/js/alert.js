// Show sweet alert
function showSweetAlert(title, text, icon, modalId = null) {
    if (modalId) {
        $("#" + modalId).modal('hide');
    }

    setTimeout(() => {
        return Swal.fire({
            title: title,
            text: text,
            icon: icon
        });
    }, 200);
}

// Show success messages
function showSuccessMessage(message, modalId = null) {
    return showSweetAlert("Sucesso!", message, "success", modalId);
}

// Added successfully
function showMessageAddedsuccessfully() {
    return showSuccessMessage("Registro adicionado com sucesso", "addEmployeeModal");
}

// Edited successfully
function showMessageEditedsuccessfully() {
    return showSuccessMessage("Registro editado com sucesso", "editEmployeeModal");
}

// Deleted successfully
function showMessageDeletedSuccessfully() {
    return showSuccessMessage("Registro apagado com sucesso");
}

// Saved successfully
function showMessageSavedSuccessfully() {
    return showSuccessMessage("Alterações Salvas com Sucesso");
}

// Message sent successfully
function showMessageSendedsuccessfully() {
    return showSuccessMessage("A sua mensagem foi enviada com sucesso");
}

// Comment sent successfully
function showMessageCommentSendedsuccessfully() {
    return showSuccessMessage("O seu comentário foi enviada com sucesso");
}
// Signup successful 
function showMessageSignupedsuccessfully() {
    return showSuccessMessage("Cadastro efectuado com sucesso");
}