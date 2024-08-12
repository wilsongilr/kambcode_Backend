const OperacionesCalculadora = async (num1, operador, num2) => {

    let resultado = 0;

    if(isNaN(num2) || isNaN(num1) || operador === undefined)
    {
      return 'Faltan parametros para ejecutar la operación';
    }

    resultado = num1, operador, num2
   
   if(operador === '+')
   {
     resultado = num1 + num2;
     return 'La suma de los dos números es: ' + resultado;
   } else if(operador === '-'){
    resultado = num1 - num2;
    return 'La resta de los dos números es: ' + resultado;
   } else if(operador === '*'){
    resultado = num1 * num2;
    return 'El producto de los dos números es: ' +  resultado;
    return resultado;
   } else if(operador === '/'){
     if (num2 > 0){
        resultado = num1 / num2;
        return 'El resultado de aa división de los dos números es: ' + resultado;
     } else {
        return 'No se puede dividir por cero ' + resultado;
     }
   }
}

export default OperacionesCalculadora;