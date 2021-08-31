    function alertbar(text){
    var txt = text;
    document.getElementById('alert').innerText = txt;
    document.querySelector(".alert").style.display = "block";
  setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
  }, 3000);
  }


function upper(){
    
    var txt = document.getElementById('txt').value;
    var upper = txt.toUpperCase();
    // console.log(upper);
    document.getElementById('txt').value = upper;
    var me = "Your text has been converted into Upper case successfully";
    alertbar("Your text has been converted into Upper case successfully");

}
function lower(){
    var txt = document.getElementById('txt').value;
    var lower = txt.toLowerCase();
    console.log(lower);
    document.getElementById('txt').value = lower;
    alertbar('Your text has been converted into Lower case successfully');

}
function Replace(){
    var txt = document.getElementById('txt').value;
    var n = prompt('which word you want to be replaced?');
    console.log(n);
    var r = prompt('what you want to change?')
    alertbar(`Your ${n} has been replcaed ${r} successfully`);
 
    console.log(txt.replace(n, r));
    var n = txt.replace(n, r);
   
    document.getElementById('txt').value =n;

}
function length(){
var txt = document.getElementById('txt').value;
var l = txt.length;
// console.log(l);
document.getElementById('pre').innerHTML=l;
// var i=0;
// for(i=0 ;i <=txt.length ; i++){
//     if (txt.split(" ") <1){
//         // console.log()
//     }
//    var s = txt.split(" ");
// console.log(s.length);
document.getElementById('word').innerHTML = txt.split(/\s+/).length;
}

function Copy(){
var txt = document.getElementById('txt');
txt.select();
txt.setSelectionRange(0, 99999);
document.execCommand('copy');
console.log(txt.value);
alertbar('Your text has been copied.');

}
