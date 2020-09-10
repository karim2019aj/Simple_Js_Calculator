
function initToZero(){
    document.getElementById("output").value=0;
}
function deleteZero(){
    document.getElementById("output").value=null;
}
function getNumber(object){
   
    if (document.getElementById("output").value==='0') {
        deleteZero();
        
    }
    document.getElementById("output").value+=object.value;

}
function getOperator(object){
    
    document.getElementById("output").value+=object.value;

}
function claculate(){
      let a = eval(document.getElementById("output").value);
    document.getElementById("output").value=a;

}