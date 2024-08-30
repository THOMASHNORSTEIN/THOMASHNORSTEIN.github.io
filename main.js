fetch('db14.json')
  .then(response => response.json()) // Convierte la respuesta a un objeto JSON
  .then(data => {
    console.log(data)
    const min = 0;
    const max = 14;

    // Verifica si ya existe un número aleatorio en localStorage
    let randomNumber = localStorage.getItem('randomNumber')

    // Si no existe, genera uno nuevo dentro del rango especificado y guárdalo
    if (!randomNumber) {
      // Genera un número aleatorio entre min y max
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
      localStorage.setItem('randomNumber', randomNumber); // Almacena el número en localStorage
    }

    // Muestra el número aleatorio en la consola o úsalo como desees
    console.log('El número aleatorio es:', randomNumber)
    let cita = document.getElementById('cita')
    let pala = document.getElementById('versi')
    cita.textContent = data[randomNumber].cita
    pala.textContent = data[randomNumber].palabra
    console.log('Edad:', data[randomNumber].palabra)
    console.log('Ciudad:', pala.textContent)
  })
  .catch(error => console.error('Error al leer el archivo JSON:', error))
