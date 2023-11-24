const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let editarTarefa = -1;

const tarefas = [
  "Para consultar alguém na lista, digite nºs maiores que 0 (zero)!",
];

function controleTarefas() {
  //garente que o usuário adicione um valor válido
  if (inputBox.value === "") {
    alert("É necessário incluir uma tarefa!");
  } else {
    //cria item na lista
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    //cria botão para edição na lista feito com Unicode. Fonte: https://shorturl.at/iFQ23
    let edit = document.createElement("button");
    edit.innerHTML = "✎";
    //adiciona função de edição
    edit.onclick = () => {
      editarTarefa = tarefas.indexOf(inputBox.value);
      let novaTarefa = prompt("Altera a tarefa: ", inputBox.value);
      if (novaTarefa !== null) {
        tarefas[editarTarefa] = novaTarefa;
        li.innerHTML = novaTarefa;
        li.appendChild(span);
        li.appendChild(edit);
      }
      editarTarefa = -1;
    };
    li.appendChild(edit);
    //cria botão para excluir items
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    //cria função para excluir items
    span.onclick = () => {
      let index = tarefas.indexOf(li.innerHTML);
      tarefas.splice(index, 1);
      listContainer.removeChild(li);
    };

    li.appendChild(span);
    tarefas.push(inputBox.value);
  }
  inputBox.value = "";
}

//função para buscar ID
function buscarID() {
  let consulta = prompt("Digite um ID para realizar a consulta.");
  consulta = parseInt(consulta);
  if (!isNaN(consulta) && consulta >= 0 && consulta < tarefas.length) {
    alert(tarefas[consulta]);
  } else {
    alert("ID não localizado");
  }
}

// [BÔNUS ROUND] função para flegar itens concluídos!

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
