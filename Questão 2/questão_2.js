function triangulo( num1, num2, num3) {
    if ( num1 == num2 && num1 == num3 ) {
        return "É um triângulo Equilátero"
    } else if ( num1 == num2 && num1 != num3 || num1 == num3 && num1 != num2 || num2 == num3 && num2 != num1) {
        return "É um triângulo Isóceles"
    } else {
        return "É um triângulo Escaleno"
    }
}

console.log( triangulo (1, 2, 1))