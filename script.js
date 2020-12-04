function multiFunction(e) {
    let firstNumber = document.getElementById('multi-number1');
    let lastNumber = document.getElementById('multi-number2');
    let multiAnswer = document.getElementById('multiAnswer');

    multiAnswer.value += firstNumber.value * lastNumber.value;
}