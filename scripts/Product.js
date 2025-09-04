export class Product {
    constructor(
        name,
        quantity,
        concentration,
        dosageForm,
        expirationDate,
        supplier,
        price,
        prescriptionRequired,
        imagePath,
        description
    ) {
        this.name = name
        this.quantity = quantity
        this.concentration = concentration
        this.dosageForm = dosageForm
        this.expirationDate = expirationDate
        this.supplier = supplier
        this.price = price
        this.prescriptionRequired = prescriptionRequired
        this.imagePath = imagePath
        this.description = description
    }

    displayProductIn(parent) {
        product = document.createElement("li")
        product.innerHTML = `
            <strong>Nome:</strong> ${this.name}<br>
            <strong>Descrição:</strong> ${this.description}<br>
            <strong>Concentração:</strong> ${this.concentration}<br>
            <strong>Forma:</strong> ${this.dosage_form}<br>
            <strong>Quantidade:</strong> ${this.quantity}<br>
            <strong>Preço:</strong> R$ ${this.price}<br>
            <strong>Data de Validade:</strong> ${new Date(this.expiration_date).toLocaleDateString()}<br>
            <strong>Fornecedor:</strong> ${this.supplier}<br>
            <strong>Requer Receita:</strong> ${this.requires_prescription ? "Sim" : "Não"}<br>
            <img src="${this.imagePath}" alt="${this.name}" style="max-width: 100px; max-height: 100px;">
        `
        parent.appendChild(product)
    }
}