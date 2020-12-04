function div () {
    var a,b,Div;
    a = parseInt(document.getElementById ("first").value);
    b = parseInt(document.getElementById ("second").value);
    Div = a/b;
    document.getElementById("third").value=Div;
}