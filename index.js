    function alertbar(text){
    var txt = text;
    document.getElementById('alert').innerText = txt;
    document.querySelector(".alert").style.display = "block";
  setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
  }, 3000);
  }

  function show(text){
      document.getElementById('preview').innerText = text;
  }

function upper(){
    
    var txt = document.getElementById('txt').value;
    var upper = txt.toUpperCase();
    // console.log(upper);
    document.getElementById('txt').value = upper;
    var me = "Your text has been converted into Upper case successfully";
    alertbar("Your text has been converted into Upper case successfully");
    show(upper);
}
function lower(){
    var txt = document.getElementById('txt').value;
    var lower = txt.toLowerCase();
    console.log(lower);
    document.getElementById('txt').value = lower;
    alertbar('Your text has been converted into Lower case successfully');
    show(lower);
}
function Replace(){
    var txt = document.getElementById('txt').value;
    var n = prompt('which word you want to be replaced? / Find');
    console.log(n);
    var b = txt.includes(n);
    console.log(b);
    if(b.value == true) {
    var r = prompt('what you want to change? Replace')
    alertbar(`Your ${n} has been replcaed ${r} successfully`);
        
    console.log(txt.replace(n, r));
    var n = txt.replace(n, r);
   
    document.getElementById('txt').value =n;
    }
    else{
        alert("Your Word is not in this.")
        alertbar(`Your ${n} is not in this.`)
    }
    show(n);
}
function length(){
var txt = document.getElementById('txt').value;
var l = txt.length;
// console.log(l);
document.getElementById('length').innerHTML=l;
document.getElementById('word').innerHTML = txt.split(/\s+/).filter((element)=>{return element.length!==0}).length;
show(txt);
document.getElementById('time').innerHTML =0.008 *txt.split(/\s+/).filter((element)=>{return element.length!==0}).length +' Minutes';
}

function Copy(){
var txt = document.getElementById('txt');
txt.select();
txt.setSelectionRange(0, 99999);
document.execCommand('copy');
console.log(txt.value);
alertbar('Your text has been copied.');
}

function Clear(){
var txt = document.getElementById('txt');
   let html =''; 
    txt.value = html;    
    document.getElementById('length').innerText = '0';
    document.getElementById('word').innerText = '0';
    document.getElementById('preview').innerText = 'Nothing to show';
    alertbar('Clear Text has been successfully.');
}

