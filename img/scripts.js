function mostrarFormulario() {
    var formulario = document.getElementById('formularioContato');
    // Verifica se o formulário está oculto
    if (formulario.style.display === 'none') {
        formulario.style.display = 'block'; // Exibe o formulário
    } else {
        formulario.style.display = 'none'; // Oculta o formulário
    }
}
