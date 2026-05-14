function changeColor() {
  const cores = ["#FF5733", "#3357FF", "#33FF57", "#FF33A1"];

  let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  document.body.style.backgroundColor = corAleatoria;
}

function mudar() {
  const preto = "#000000";
  const branco = "#FFFFFF";
  const verde = "#00FF00";

  document.getElementById("corpo").style.backgroundColor = preto;
  document.getElementById("fonte1").style.color = branco;
  document.getElementById("fonte3").style.color = branco;

  let fonte2 = document.getElementById("fonte2");
  fonte2.style.backgroundColor = verde;
  fonte2.style.color = preto;
}
