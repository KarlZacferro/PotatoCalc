// Este código está presente no arquivo HTML

function createVar(){
var idade = document.getElementById('idade').value
var tempo = document.getElementById('tempo').value
var sexo = document.getElementById('sexo').value
}
createVar()
function verificar(){
if(sexo.value == 'm' && (parseInt(idade.value) + parseInt(tempo.value)>= 96) && (idade.value >= 18) && idade.value > tempo.value){
        document.getElementById('result').innerHTML = "Você pode se aposentar!"
        document.getElementById('result').style.background = "#31D158"
    }else if(sexo.value == 'f' && (parseInt(idade.value) + parseInt(tempo.value) >= 86) && (idade.value >= 18) && idade.value > tempo.value){
        document.getElementById('result').innerHTML = "Você pode se aposentar!"
    }else if(tempo.value > idade.value){
        document.getElementById('result').innerHTML = "Tempo de contribuição é maior que a idade!"
    }else if(tempo.value == idade.value && tempo.value != 0 && idade.value != 0){
        document.getElementById('result').innerHTML = "Tempo de contribuição é igual a idade!"
    }else if(tempo.value == 0 || idade.value == 0){
        document.getElementById('result').innerHTML = "Algum campo deixou de ser preenchido."
    }else if(idade.value < 18){
        document.getElementById('result').innerHTML = "Você não pode se aposentar sendo menor de idade"
    }else if(sexo.value == 'null'){
        document.getElementById('result').innerHTML = "Escolha um sexo."
    }else{
        document.getElementById('result').innerHTML = "Você não pode se aposentar."
        document.getElementById('result').style.background = "#FF453A"
    }
}

function github(){
    window.open('https://github.com/EduardoVilar23/PotatoCalc')
}
