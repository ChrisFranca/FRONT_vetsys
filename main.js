
import { createFilterInput } from 'scripts/getStocks.js'
import {} from 'scripts/postStock.js'

document.addEventListener('DOMContentLoaded', () => {
    let seletor = document.getElementById('filterType')
    seletor.addEventListener('change', createFilterInput.bind(document))

    let consultar = document.getElementById("submitButton")
    consultar.addEventListener("click", async function (event) {
    event.preventDefault() // Evita o envio do formulário

    let filterType = document.getElementById("filterType").value
    let filterValue = document.getElementById("filterValue").value

    let resultsConteiner = document.getElementById("resultsConteiner")

    // Limpa resultados anteriores
    resultsConteiner.innerHTML = '<h2 id="h2">Resultados</h2>'

    try {
        let url = "http://localhost:3000/stock"
        if (filterValue.trim() !== "") {
            // Adiciona o filtro à URL se houver um valor
            url += `?${filterType}=${encodeURIComponent(filterValue)}`
        }

        // Faz a chamada à API
        const response = await fetch(url)

        console.log("Status da resposta:", response.status)

        if (!response.ok) {
            throw new Error(`Erro ao consultar a API. Status: ${response.status}`)
        }

        const data = await response.json()
        console.log("Dados recebidos:", data)

        // Exibe os resultados
        if (data.length > 0) {
            const ul = document.createElement("ul")
            data.forEach(item => {
                const li = document.createElement("li")
                li.innerHTML = `
                    <strong>ID:</strong> ${item.id}<br>
                    <strong>Nome:</strong> ${item.name}<br>
                    <strong>Descrição:</strong> ${item.description}<br>
                    <strong>Concentração:</strong> ${item.concentration}<br>
                    <strong>Forma:</strong> ${item.dosage_form}<br>
                    <strong>Quantidade:</strong> ${item.quantity}<br>
                    <strong>Preço:</strong> R$ ${item.price}<br>
                    <strong>Data de Validade:</strong> ${new Date(item.expiration_date).toLocaleDateString()}<br>
                    <strong>Fornecedor:</strong> ${item.supplier}<br>
                    <strong>Requer Receita:</strong> ${item.requires_prescription ? "Sim" : "Não"}<br>
                    <img src="${item.imagePath}" alt="${item.name}" style="max-width: 100px; max-height: 100px;">
                `;
                ul.appendChild(li)
            });
            resultsConteiner.appendChild(ul)
        } else {
            resultsConteiner.innerHTML += "<p>Nenhum resultado encontrado.</p>"
        }
    } catch (error) {
        console.error("Erro:", error);
        resultsConteiner.innerHTML += "<p>Ocorreu um erro ao buscar os dados.</p>"
    }
    });
})