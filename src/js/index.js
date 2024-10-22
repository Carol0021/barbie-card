/*
   OBJETIVO - quando clicar no barbiedream da listagem temos que esconder o cartão do barbiehouse aberto 
   e mostrar o cartão correspondente ao que foi selecionado na listagem
       PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de barbiehouse
       PASSO 2 - Identificar o evento de clique no elemento da listagem
       PASSO 3 - remover a classe aberto só do cartão que tá aberto
       PASSO 4 - ao clicar em uma babriedream da lista pegamos o id desse barbiedream pra saber qual 
    cartão abrir
       PASSO 5 - remover a classe ativo que marca o barbiedream selecionado na listagem
       PASSO 6 - adicinar a classe ativo no barbiedream selecionado na listagem
*/

//PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs

const listaSelecaoDreams = document.querySelectorAll(".dream");

listaSelecaoDreams.forEach(dream => {
	dream.addEventListener("click", () => {
		esconderCartaoDream();

		const idDreamSelecionado = mostrarCartaoDreamSelecionado(dream);

		desativarDreamNaListagem();
		ativarDreamSelecionadoNaListagem(idDreamSelecionado);

	})
})


function ativarDreamSelecionadoNaListagem(idDreamSelecionado) {
	const dreamSelecionadoNaListagem = document.getElementById(idDreamSelecionado);
	dreamSelecionadoNaListagem.classList.add("ativo");
}

function desativarDreamNaListagem() {
	const dreamAtivoNaListagem = document.querySelector(".ativo");
	dreamAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoDreamSelecionado(dream) {
	const idDreamSelecionado = dream.attributes.id.value;
	const idDoCartaoDreamParaAbrir = "cartao-" + idDreamSelecionado;
	const cartaoDreamParaAbrir = document.getElementById(idDoCartaoDreamParaAbrir);
	cartaoDreamParaAbrir.classList.add("aberto");
	return idDreamSelecionado;
}

function esconderCartaoDream() {
	const cartaoDreamAberto = document.querySelector(".aberto");
	cartaoDreamAberto.classList.remove("aberto");
}

