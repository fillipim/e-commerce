import {
    productList
} from "./database.js"

let destaques = document.querySelector("#destaques > ul");

function renderProduct(product) {

    let li = document.createElement('li');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let p = document.createElement('p');
    let span = document.createElement('span');
    let button = document.createElement('button');

    li.classList.add("product-item");
    img.src = product.imgSrc;
    img.alt = product.name;

    p.innerText = product.name;
    span.innerText = `R$ ${product.price.toFixed(2)}`.replace(".", ",");
    button.innerText = "Adicionar ao Carrinho";

    div.appendChild(img);
    li.append(div, p, span, button);

    return li;
}

let dados = productList.filter((item, index, array) => {
    if (item.price > 700) {
        return item;
    }
    return false;
});

productList.map((product) => {
    let card = renderProduct(product);
    destaques.appendChild(card);
});

// productList.map(product => destaques.appendChild(renderProduct(product)));