function showContent(index) {
    var contenido = document.querySelectorAll('.contenido-info .info');
        for (var i = 0; i < contenido.length; i++) {
            if (i === index) {
                contenido[i].style.display = 'block';
            } else {
                contenido[i].style.display = 'none';
            }
        }
    
        // Cambiar la clase activa
        var steps = document.querySelectorAll('.ui.steps .step');
        for (var j = 0; j < steps.length; j++) {
            if (j === index) {
                steps[j].classList.add('active');
            } else {
                steps[j].classList.remove('active');
            }
    }
}