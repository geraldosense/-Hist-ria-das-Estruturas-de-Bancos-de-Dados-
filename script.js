// Função para mostrar ou esconder o conteúdo adicional
function toggleContent() {
    var content = document.getElementById('additionalContent');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}
