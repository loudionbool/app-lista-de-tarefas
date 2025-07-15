let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function renderizarTarefas() {
    const lista = document.getElementById("listaTarefas");
    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
      <button class="botao check" onclick="concluirTarefa(${index})">✓</button>
      <span style="text-decoration: ${tarefa.feita ? 'line-through' : 'none'}">${tarefa.texto}</span>
      <button class="botao delete" onclick="removerTarefa(${index})">✕</button>
    `;

        lista.appendChild(li);
    });

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}


function adicionarTarefa() {
    const input = document.getElementById("tarefaInput");
    const texto = input.value.trim();

    if (texto) {
        tarefas.push({ texto, feita: false });
        input.value = "";
        renderizarTarefas();
    }
}

function concluirTarefa(index) {
    tarefas[index].feita = !tarefas[index].feita;
    renderizarTarefas();
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    renderizarTarefas();
}

renderizarTarefas();
