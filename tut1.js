// console.log("hey");

function upper(){
    var txt = document.getElementById('txt').value;
    var upper = txt.toUpperCase();
    console.log(upper);
    document.getElementById('txt').value = upper;
}
function lower(){
    var txt = document.getElementById('txt').value;
    var lower = txt.toLowerCase();
    console.log(lower);
    document.getElementById('txt').value = lower;
}
function Replace(){
    var txt = document.getElementById('txt').value;
    var n = prompt('which word you want to be replaced?');
    console.log(n);
    var r = prompt('what you want to change?')
    blink(r);
    console.log(txt.replace(n, r));
    var n = txt.replace(n, r);
    // r.style.backGround = 'yellow';
    document.getElementById('txt').value =n;
}
function length(){
var txt = document.getElementById('txt').value;
var l = txt.length;
console.log(l);
document.getElementById('pre').innerHTML=l;
var i=0;
for(i=0 ;i <=txt.length ; i++){
   var s = txt.split(" ");
    
}
console.log(s.length);
document.getElementById('word').innerHTML = s.length;
}

function Copy(){
var txt = document.getElementById('txt');
txt.select();
txt.setSelectionRange(0, 99999);
document.execCommand('copy');
console.log(txt.value);
}
