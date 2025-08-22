let newFilter = document.querySelector("button#adicionar-filtro");

newFilter.addEventListener("click", () => {
    // Cria um novo formulário dinamicamente
    const novoFormulario = document.createElement("form");
    novoFormulario.id = "novo-formulario";
    novoFormulario.innerHTML = `
        <form id="consulta-estoque-form">
        <label for="tipo-filtro">Tipo de Filtro:</label>
        <select id="tipo-filtro">
            <option value="nome">Nome</option>
            <option value="validade">Validade</option>
            <option value="concentracao">Concentração</option>
            <option value="dosagem">Dosagem</option>
            <option value="quantidade">Quantidade</option>
            <option value="preco">Preço</option>
            <option value="fabricante">Fabricante</option>
        </select>
        <input type="text" id="valor-filtro" placeholder="nome">
        <div id="filtros-dinamicos"></div>
        </form>
    `;

    // Adiciona o formulário ao corpo da página
    document.body.appendChild(novoFormulario);
});