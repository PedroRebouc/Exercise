const input = document.querySelector('input'); // Selecionando o input(caixa)
const novoConteudo = document.querySelector('ul');//selecionando a lista(ul)
input.addEventListener('keyup', soltou);//Evento para escutar o comando do teclado

function soltou(event){ //função de linkagem com o html, recebendo EVENT
    if(event.key === "Enter"){  //Condicionando, SE EVENT receber um comando === KeyEnter(tecla enter)
        const newLi = document.createElement('li');// Crie um novo elemento de lista(LI)
        newLi.innerHTML = input.value;//Insira o valor recebido na caixa dentro desse novo elemento
        novoConteudo.appendChild(newLi);//insilra esse conteudo NewLi, dentro da lista(ul)
    }
}