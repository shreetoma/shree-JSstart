var a,b;
function setter()
{
    this.a=Number(document.getElementById("first").value);
    this.b=Number(document.getElementById("second").value);
}

function add(){
    var c;
    setter();
c= this.a + this.b;  
    document.getElementById("output").value=c;
}
function sub(){
    var c;
    setter();
c= this.a - this.b;  
    document.getElementById("output").value=c;
}
function mul(){
    var c;
    setter();
c= this.a * this.b;  
    document.getElementById("output").value=c;
}
function div(){
var c;
    setter();
c= this.a / this.b;  
    document.getElementById("output").value=c;
}
function remain(){
var c;
    setter();
c= this.a % this.b;  
    document.getElementById("output").value=c;
}
function reset()
{
    document.getElementById("first").value="";
   document.getElementById("second").value="";
     document.getElementById("output").value="";
}