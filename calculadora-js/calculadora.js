var button = document.querySelector("button");

button.onclick = function seleciona(){

var v1,v2 = "";
var radiobtn = document.body.querySelectorAll("input[type='radio']");
    v1 = parseFloat(document.getElementById("n1").value);
    v2 = parseFloat(document.getElementById("n2").value);
var estado_variable = document.getElementById("paragrafo");

    for(let i = 0; i < radiobtn.length; i++){
          if(radiobtn[0].checked){
            estado_variable.innerHTML = (v1 + v2);
          }else if(radiobtn[1].checked){
             estado_variable.innerHTML = (v1 - v2);
          }else if(radiobtn[2].checked){
             estado_variable.innerHTML = (v1 / v2);
          }else if(radiobtn[3].checked){
              estado_variable.innerHTML = (v1 * v2);
          }else{
             if(radiobtn[i].checked !== true){
                alert("Necessário marcar uma opção para efeutar a operação!");
             }
          }

    }

    if(Number.isNaN(v1) || Number.isNaN(v2)){
      alert("Necessário inserir números nos campos!");
       estado_variable.innerHTML = "";
     }
}
