number1 = []
number2 = []
resultado = []

function dividir(){
    number1 = document.getElementById(deslocamento).value;
    number2 = document.getElementById(horas).value;
    resultado.push((number1/number2))
    console.log(resultado);
    document.getElementById("mostrar").innerHTML= resultado;
}
