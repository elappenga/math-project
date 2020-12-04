function addNumbers() {
    const num1 = document.getElementById('addNum1').value;
    const num2 = document.getElementById('addNum2').value;
    const addTotal = parseInt(num1) + parseInt(num2);
    document.getElementById('addTotal').value = addTotal;
}