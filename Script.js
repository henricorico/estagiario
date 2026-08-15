function responder() {
  const pergunta = document.getElementById("pergunta").value.toLowerCase().trim();
  const resposta = document.getElementById("resposta");

  if (pergunta === "oi" || pergunta === "olá") {
    resposta.textContent = "Olá! Como posso ajudar?";
  } else if (pergunta.includes("tarefa")) {
    resposta.textContent = "Posso te ajudar a pensar em tarefas.";
  } else if (pergunta.includes("pedido")) {
    resposta.textContent = "Posso te ajudar com pedidos simples.";
  } else {
    resposta.textContent = "Ainda estou aprendendo.";
  }
}
