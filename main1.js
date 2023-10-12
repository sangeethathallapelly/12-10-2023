function send(){
    Number1=document.getElementById("number1").value;
    Number2=document.getElementById("number2").value;
    localStorage.setItem("Number1",Number1);
    localStorage.setItem("Number2",Number2);
    
}
function check(){
    let result=number1*number2;
}