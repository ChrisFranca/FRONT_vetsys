
import { createFilterInput } from '../../scripts/getStock.js'
import { Product } from '/scripts/Product.js'

document.addEventListener('DOMContentLoaded', () => {
    let seletor = document.getElementById('filterType')
    seletor.addEventListener('change', createFilterInput.bind(document))

    let consultar = document.getElementById("submitButton")
    consultar.addEventListener("click", async function (event) {
    event.preventDefault() // Evita o envio do formulário

    console.log("Botão consultar clicado")

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
                new Product(
                    item.name,
                    item.description,
                    item.concentration,
                    item.dosage_form,
                    item.quantity,
                    item.price,
                    item.expiration_date,
                    item.supplier,
                    item.requires_prescription,
                    item.imagePath
                ).displayProductIn(ul)
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