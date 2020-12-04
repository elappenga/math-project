function div () {
    var a,b,Div;
    a = parseInt(document.getElementById ("first").value);
    b = parseInt(document.getElementById ("second").value);
    Div = a/b;
    document.getElementById("third").value=Div;
}
    function multiFunction(e) {
    let firstNumber = document.getElementById('multi-number1');
    let lastNumber = document.getElementById('multi-number2');
    let multiAnswer = document.getElementById('multiAnswer');

    multiAnswer.value += firstNumber.value * lastNumber.value;
}