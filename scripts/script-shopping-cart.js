let finalPrice = 0;

let sofas = localStorage.getItem('sofas');

if (sofas && JSON.parse(sofas).length > 0) {
    sofas = JSON.parse(sofas);

    let finalPriceElement = document.createElement('section');
    finalPriceElement.classList.add("final-price");

    let buyButtonSection = document.querySelector('.buy-section');
    buyButtonSection.style.display = 'flex';

    let article = document.querySelector('.shopping-cart');
    article.insertBefore(finalPriceElement, buyButtonSection);

    for (let object of sofas){
        addSofa(object.name, object.price);

        finalPrice += parseInt(object.price);

        let lastItem = document.querySelector('.items').lastElementChild;
        attachEventListeners(lastItem);
    }
    finalPriceElement.textContent = 'Итоговая цена: ' + finalPrice + ' рублей';
}
else {
    sofas = [];
    let textIsEmpty = document.createElement('p');
    let textNode = document.createTextNode('Ваша корзина пуста');
    textIsEmpty.append(textNode);
    let itemSection = document.querySelector(".items");
    itemSection.append(textIsEmpty);
    let buyButtonSection = document.querySelector('.buy-section');
    buyButtonSection.style.display = 'none';

}


function addSofa(name, price){
    const container = document.querySelector('.items');
    if (name == 'Диван Мадрид' && price == '29999'){
        const newItemHTML = `
        <div class="item">
            <img class="img sofa-Madrid-img" src="static/images/items/sofas/MadridSofa.jpg" alt="Диван Мадрид"/>
            <div class="name">Диван Мадрид</div>
            <div class="price">Цена: 29999₽</div>
            <div class="icons">
                <img class="favorite" src="static/images/shopping-cart/favorite.png" alt="">
                <img class="trash-bin" src="static/images/shopping-cart/trash-bin.png" alt="">
                <img class="minus" src="static/images/shopping-cart/minus.png" alt="">
                <div class="counter">1</div>
                <img class="plus" src="static/images/shopping-cart/plus.png" alt="">
            </div>
            <div class="total-price" price="29999">29999₽</div>
        </div>
        `;
        container.insertAdjacentHTML('beforeend', newItemHTML);
        return true;
    }
    else if (name == 'Диван Стэнфорд' && price == '67999'){
        const newItemHTML = `
        <div class="item">
            <img class="img sofa-Stanford-img" src="static/images/items/sofas/StanfordSofa.jpg" alt="Диван Стэнфорд"/>
            <div class="name">Диван Стэнфорд</div>
            <div class="price">Цена: 67999₽</div>
            <div class="icons">
                <img class="favorite" src="static/images/shopping-cart/favorite.png" alt="">
                <img class="trash-bin" src="static/images/shopping-cart/trash-bin.png" alt="">
                <img class="minus" src="static/images/shopping-cart/minus.png" alt="">
                <div class="counter">1</div>
                <img class="plus" src="static/images/shopping-cart/plus.png" alt="">
            </div>
            <div class="total-price" price="67999">67999₽</div>
        </div>
        `;
        container.insertAdjacentHTML('beforeend', newItemHTML);
        return true;
    }
    else if (name == 'Диван Торонто' && price == '22999'){
        const newItemHTML = `
        <div class="item">
            <img class="img sofa-Toronto-img" src="static/images/items/sofas/TorontoSofa.jpg" alt="Диван Торонто"/>
            <div class="name">Диван Торонто</div>
            <div class="price">Цена: 22999₽</div>
            <div class="icons">
                <img class="favorite" src="static/images/shopping-cart/favorite.png" alt="">
                <img class="trash-bin" src="static/images/shopping-cart/trash-bin.png" alt="">
                <img class="minus" src="static/images/shopping-cart/minus.png" alt="">
                <div class="counter">1</div>
                <img class="plus" src="static/images/shopping-cart/plus.png" alt="">
            </div>
            <div class="total-price" price="22999">22999₽</div>
        </div>
        `;
        container.insertAdjacentHTML('beforeend', newItemHTML);
        return true;
    }
    else if (name == 'Диван Уно' && price == '19999'){
        const newItemHTML = `
        <div class="item">
            <img class="img sofa-Uno-img" src="static/images/items/sofas/UnoSofa.jpg" alt="Диван Уно"/>
            <div class="name">Диван Уно</div>
            <div class="price">Цена: 19999₽</div>
            <div class="icons">
                <img class="favorite" src="static/images/shopping-cart/favorite.png" alt="">
                <img class="trash-bin" src="static/images/shopping-cart/trash-bin.png" alt="">
                <img class="minus" src="static/images/shopping-cart/minus.png" alt="">
                <div class="counter">1</div>
                <img class="plus" src="static/images/shopping-cart/plus.png" alt="">
            </div>
            <div class="total-price" price="19999">19999₽</div>
        </div>
        `;
        container.insertAdjacentHTML('beforeend', newItemHTML);
        return true;
    }
    return false;
}


function attachEventListeners(element) {
    let trashBin = element.querySelector(".trash-bin");

    trashBin.addEventListener("click", () => {
        let items = document.querySelectorAll(".items .item");
        let index = Array.from(items).indexOf(element.closest('.item')); // Ищем индекс элемента в DOM

        let sofas = JSON.parse(localStorage.getItem('sofas'));
        if (sofas && sofas.length > index) {
            sofas.splice(index, 1);
            localStorage.setItem('sofas', JSON.stringify(sofas));
        }

        let price = element.querySelector(".total-price").textContent;

        finalPrice -= parseInt(price);
        document.querySelector('.final-price').textContent = 'Итоговая цена: ' + finalPrice + ' рублей';

        element.remove();

        if (sofas.length == 0){
            let textIsEmpty = document.createElement('p');
            let textNode = document.createTextNode('Ваша корзина пуста');
            textIsEmpty.append(textNode);
            let itemSection = document.querySelector(".items");
            itemSection.append(textIsEmpty);

            document.querySelector('.final-price').remove();

            let buyButton = document.querySelector('.buy-section');
            buyButton.style.display = 'none';
        }
    });
    

    let counter = element.querySelector(".counter");

    let totalPrice = element.querySelector(".total-price");

    let plus = element.querySelector(".plus");
    plus.addEventListener("click", () => {
        counter.textContent = parseInt(counter.textContent) + 1;
        
        totalPrice.textContent = counter.textContent * totalPrice.getAttribute("price") + "₽";

        finalPrice += parseInt(totalPrice.getAttribute("price"));
        document.querySelector('.final-price').textContent = 'Итоговая цена: ' + finalPrice + ' рублей';
    })


    let minus = element.querySelector(".minus");
    minus.addEventListener("click", () => {
        if (counter.textContent != 1){
            counter.textContent = parseInt(counter.textContent) - 1;
        
            totalPrice.textContent = counter.textContent * totalPrice.getAttribute("price") + "₽";
    
            finalPrice -= parseInt(totalPrice.getAttribute("price"));
            document.querySelector('.final-price').textContent = 'Итоговая цена: ' + finalPrice + ' рублей';
        }
    })
}


function handleStorageChange(event) {
    if (event.key === 'sofas') {

        var currentSofas = localStorage.getItem('sofas');
        currentSofas = JSON.parse(currentSofas);

        let {name, price} = currentSofas[currentSofas.length - 1];

        let added = addSofa(name, price);
        
        if (added){
            sofas.push(currentSofas[currentSofas.length - 1]);

            let textIsEmpty = document.querySelector('.items p');
            if (textIsEmpty !== null){
                textIsEmpty.remove();
            }

            let finalPriceElement = document.querySelector('.final-price');
            if (finalPriceElement == null){
                finalPriceElement = document.createElement('section');
                finalPriceElement.classList.add("final-price");

                let buyButtonSection = document.querySelector('.buy-section');
                buyButtonSection.style.display = 'flex';

                let article = document.querySelector('.shopping-cart');
                article.insertBefore(finalPriceElement, buyButtonSection);
            }

            finalPrice += parseInt(price);
            finalPriceElement.textContent = 'Итоговая цена: ' + finalPrice + ' рублей';

            let lastItem = document.querySelector('.items').lastElementChild;
            attachEventListeners(lastItem);
        }

    }
}
  

 window.addEventListener('storage', handleStorageChange);