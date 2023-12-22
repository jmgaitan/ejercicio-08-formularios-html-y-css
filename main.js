// Estilos disponibles
const estilos = {
    'estilo': 'estilos/estilo.css',
    'estilos-futuro': 'estilos/estilos-futuro.css',
    'estilos-retro': 'estilos/estilos-retro.css',
    'sin-estilo': 'estilos/sin-estilo.css'
  };
  
  // Cambiar el estilo
  function cambiarEstilo(estilo) {
    document.getElementById('estiloDinamico').href = estilos[estilo] || estilos['estilo'];
  }
  
  // Función para aplicar un estilo aleatorio
  function cambiarEstiloAleatorio() {
    const keys = Object.keys(estilos);
    const estiloAleatorio = keys[Math.floor(Math.random() * keys.length)];
    cambiarEstilo(estiloAleatorio);
  }
  
  // Función para almacenar el estilo seleccionado
  function recordarEstilo() {
    const estiloSeleccionado = document.querySelector('input[name="estilo"]:checked')?.value ||
                               document.getElementById('selectorEstilo').value;
    localStorage.setItem('estiloPreferido', estiloSeleccionado);
  }
  
  // Cargar el estilo preferido al cargar la página
  window.onload = function() {
    const estiloGuardado = localStorage.getItem('estiloPreferido');
    if (estiloGuardado) {
      cambiarEstilo(estiloGuardado);
      document.getElementById('selectorEstilo').value = estiloGuardado;
      const radio = document.querySelector(`input[name="estilo"][value="${estiloGuardado}"]`);
      if (radio) radio.checked = true;
    }
  };
  
  // Event listeners
  document.getElementById('botonAleatorio').addEventListener('click', cambiarEstiloAleatorio);
  document.getElementById('selectorEstilo').addEventListener('change', e => cambiarEstilo(e.target.value));
  document.querySelectorAll('input[name="estilo"]').forEach(radio => {
    radio.addEventListener('change', e => cambiarEstilo(e.target.value));
  });
  document.getElementById('botonRecordar').addEventListener('click', recordarEstilo);
  