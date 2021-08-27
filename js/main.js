function  botao() {
    document.getElementById('agradecimento').innerHTML = 'obrigado pelo clique'
}

function redirecionar() {
    //window.open("https://google.com") // abre o site em outra aba
    window.location.href ="https://globoesporte.com.br" // abre o site na mesma aba
}

function trocar(elemento) {
    elemento.innerHTML =  'obrigado pelas aulas'
    //alert('trocar texto')
}

function voltar(elemento) {
    elemento.innerHTML = 'passe o mouse aqui'

}

function load(){
    alert('carregada')
}

function funcaoChange(elemento) {
    console.log(elemento.value)
    
}



/*function soma(n1, n2){
    return n1 + n2
}

function validaIdade(idade){
    var validar
    if(idade >= 18){
     validar = true;
    }else{
         validar = false
    }
    return validar
}

var idade = prompt('qual sua idade')
console.log(validaIdade(idade))

//alert(soma(5,5)) */



/*var d = new Date() // Utilizado para manipular data
alert(d)
alert(d.getMonth()+ 1)  // Manipular mês
alert(d.getHours())  // manipular horas
alert(d.getMinutes())  // manipular minutos */


/*var count = 0 
for(count= 0; count <= 5; count++){
    console.log(count)
} */



/*var count = 5
while( count <= 5){
    console.log(count)
    count++
}*/


/*var idade = prompt('qual sua idade')
if(idade > 18) {
    alert('maior de idade')
}else {
    alert('menor de idade')
} */



/*var frutas = [{nome: 'maca', cor: 'vermelha'} , {nome: 'uva', cor: 'roxa'}]
console.log(frutas[1].nome)
*/




/*var lista = ['maça', 'pera', 'laranja']
lista.push('uva') // Inserir elemento na lista
lista.pop('maça') // Excluir elemento da lista
lista.length // Saber o tamanho da lista
console.log(lista.reverse()) // inverter a ordem dos elementos
console.log(lista.toString()+ 'oi') // traz os elementos em forma de strings
console.log(lista[1])
console.log(lista.join( '-')) // nos dá a possibilidade de decidir como os elementos devem ser separados

*/


/*var nome = "Rubens Diego"
var idade = 25
alert(nome +' tem ' + idade)
var frase = 'japao é o melhor time do mundo'
alert(frase.replace('japao', 'brasil')) */

