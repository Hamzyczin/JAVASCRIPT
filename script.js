function clearScreen() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    var result = 
    document.getElementById('result').value; 
    document.getElementById('result').value = result.slice(0, -1);
}

function appendToScreen(value) {
    var result = 
    document.getElementById('result').value;
    var lastChar =
    result.slice(-1);
    if (isOperator(lastChar) && isOperator(value)) {
        return;
    }
    document.getElementById('result').value += value;
}

function calculate() {
    var result = 
    document.getElementById('result').value;
    result = result.replace(/B/g, '/').replace(/x/g, '*')
     try {
        document.getElementById('result').value = eval('result');
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function percentage() {
    var result = 
    document.getElementById('result').value;
    document.getElementById('result').value = result / 100;
}

function isOperator(character) {
    return ['+', '-', '*', '/'].includes(character);
}







