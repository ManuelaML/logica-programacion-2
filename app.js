document.getElementById('formulario').addEventListener('submit', function (e) {
  e.preventDefault();

  let inputCelsius = document.getElementById('celsius').value;
  convertirTemperatura(inputCelsius);
});

function convertirTemperatura(input) {
  let gradosCelsius = parseFloat(input);

  if (isNaN(gradosCelsius)) {
    alert('Ingrese un valor numérico (solo NÚMEROS)');
    console.error('Entrada inválida: Ingrese un valor numérico (solo NÚMEROS)');
    document.getElementById('result').innerText = '';
    return;
  }

  let fahrenheit = gradosCelsius * 1.8 + 32;
  let kelvin = gradosCelsius + 273.15;

  let resultado = `Grados Kelvin: ${kelvin.toFixed(
    2
  )}K\nGrados Fahrenheit: ${fahrenheit.toFixed(2)}F`;
  console.log(
    `El valor convertido en Kelvin es ${kelvin.toFixed(
      2
    )}K y el valor en Fahrenheit es ${fahrenheit.toFixed(2)}F`
  );

  document.getElementById('result').innerText = resultado;
}
