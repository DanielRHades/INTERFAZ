function calcularIMC() {
    var nombre = document.getElementById('nombre').value;
    var alturaEnCentimetros = parseInt(document.getElementById('altura').value);
    var alturaEnMetros = alturaEnCentimetros / 100;
    var pesoEnKilos = parseInt(document.getElementById('peso').value);
  
    var imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
    var clasificacion;
    
    if (imc < 18.5) {
      clasificacion = 'posees un peso inferior al normal';
    } else if (imc < 25) {
      clasificacion = 'estás saludable';
    } else if (imc < 30) {
      clasificacion = 'tienes un peso superior al normal';
    } else
      clasificacion = "tienes obesidad"
    /* Consejo:
    
    */
    var respuesta = 'Hola, tu IMC es ' + imc + ' y tu ' + clasificacion;
    alert(respuesta);
  }