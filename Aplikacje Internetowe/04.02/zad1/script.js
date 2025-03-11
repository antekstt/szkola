function add(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let result = a+b;
    document.getElementById('result').value = result;
}
function sub(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let result = a-b;
    document.getElementById('result').value = result;
}
function mul(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let result = a*b;
    document.getElementById('result').value = result;
}
function div(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    if (b == 0 || a == 0){
        alert('You cant divide by 0!');
        return;
    }
    let result = a/b;
    document.getElementById('result').value = result;
}