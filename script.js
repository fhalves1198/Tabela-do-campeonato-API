



document.addEventListener("DOMContentLoaded", function(event) {
  var primeiroColocado = document.getElementById("1_colocado")
  var primeiroTime = document.getElementById("1_time")
  var primeiroPontos = document.getElementById("1_pontos")

  var segundoColocado = document.getElementById("2_colocado")
  var segundoTime = document.getElementById("2_time")
  var segundoPontos = document.getElementById("2_pontos")

  var terceiroColocado = document.getElementById("3_colocado")
  var terceiroTime = document.getElementById("3_time")
  var terceiroPontos = document.getElementById("3_pontos")

  var quartoColocado = document.getElementById("4_colocado")
  var quartoTime = document.getElementById("4_time")
  var quartoPontos = document.getElementById("4_pontos")

  var quintoColocado = document.getElementById("5_colocado")
  var quintoTime = document.getElementById("5_time")
  var quintoPontos = document.getElementById("5_pontos")
  

  
  let url = `https://api.api-futebol.com.br/v1/campeonatos/10/tabela`
  const headers = {
  "Authorization": "Bearer live_xxxxxxxxxxxxxxxxxxxxxxxxxx",
  "Content-Type": "application/json"
}

  axios.get(url,

  { headers })
.then(function(response) {
  console.log(response.data[0]);
  primeiroColocado.innerText = response.data[0].posicao
  primeiroTime.innerText = response.data[0].time.nome_popular
  primeiroPontos.innerText = response.data[0].pontos

  segundoColocado.innerText = response.data[1].posicao
  segundoTime.innerText = response.data[1].time.nome_popular
  segundoPontos.innerText = response.data[1].pontos

  terceiroColocado.innerText = response.data[2].posicao
  terceiroTime.innerText = response.data[2].time.nome_popular
  terceiroPontos.innerText = response.data[2].pontos

  quartoColocado.innerText = response.data[3].posicao
  quartoTime.innerText = response.data[3].time.nome_popular
  quartoPontos.innerText = response.data[3].pontos

  quintoColocado.innerText = response.data[4].posicao
  quintoTime.innerText = response.data[4].time.nome_popular
  quintoPontos.innerText = response.data[4].pontos
  
})
.catch(function(error) {
  console.log("deu errado", error);
  posicao1.innerText = 'deu errado'
});

})
