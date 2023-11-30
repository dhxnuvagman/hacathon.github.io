var fas;

var f1=document.getElementById("f1");
var i1=document.getElementById("i1");
var f2=document.getElementById("f2");
var i2=document.getElementById("i2");
var f3=document.getElementById("f3");
var i3=document.getElementById("i3");
var fr1=document.getElementById("fr1");
var fr2=document.getElementById("fr2");
var fr3=document.getElementById("fr3");
var atv=document.getElementById("atv");
var btv=document.getElementById("btv");
var btv1=document.getElementById("btv1");
var v1=document.getElementById("v1");
var n1=document.getElementById("n1");
var vsf=document.getElementById("vsf");
var vsf1=document.getElementById("vsf1");
var n2=document.getElementById("n2");
var n3=document.getElementById("n3");
var n4=document.getElementById("n4");
var n5=document.getElementById("n5");
var fa=document.getElementById("fa");
var ass=document.getElementById("ass");
while(1){
fas=prompt("Weight Of FAS Crystal Taken:");
if(isNaN(Number(fas)))
{
    if(!confirm("Do You Want To reEnter??"))
    {break;}

}else{
    break;
}}
var fv=document.getElementById("fv");
fv.innerText=fas;
var fvd=document.getElementById("fvd");
fvd.innerText=fas;
var wfas=(fas*4)/392;
var wr=document.getElementById("wr");
wr.innerText=wfas.toFixed(4);
var bt=document.getElementById("bt");
bt.innerText=wfas.toFixed(4);
function calc(){
fr1.innerText=(Number(f1.innerText)-Number(i1.innerText)).toFixed(1);
fr2.innerText=(Number(f2.innerText)-Number(i2.innerText)).toFixed(1);
fr3.innerText=(Number(f3.innerText)-Number(i3.innerText)).toFixed(1);
atv.innerText=(Number(Number(fr1.innerText)+Number(fr2.innerText)+Number(fr3.innerText))/3).toFixed(2);
btv.innerText=prompt("Blank Titer Value:")
btv1.innerHTML=btv.innerText;
vsf.innerText=Number(btv.innerText)-Number(atv.innerText);
vsf1.innerText=vsf.innerText;
v1.innerText=vsf1.innerText;
n1.innerText=bt.innerText;
n2.innerText=Number((Number(v1.innerText)*Number(n1.innerText)/25).toFixed(4));
n3.innerText=n2.innerText;
n4.innerText=Number(Number(n3.innerText)*8);
n5.innerText=n4.innerText;
fa.innerText=Number(Number(n4.innerText)*1000);
ass.innerText=fa.innerText;
}