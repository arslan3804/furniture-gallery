let sofas = localStorage.getItem('sofas');
if (sofas !== null) {
    sofas = JSON.parse(sofas);
}
else {
    sofas = [];
}

document.querySelectorAll('.orange.button').forEach(button => {
    button.addEventListener('click', function(event) {
        const item = event.target.closest('li');
        const itemName = item.querySelector('.buy > div:first-child').textContent;
        const itemPrice = item.getAttribute('price');

        const selectedItem = {
            name: itemName,
            price: itemPrice
        };

        const selectedItemString = JSON.stringify(selectedItem);
        const sofasString = sofas.map(obj => JSON.stringify(obj));

        if (!sofasString.includes(selectedItemString)){
            sofas.push(selectedItem);
            localStorage.setItem('sofas', JSON.stringify(sofas));
        }
        
    });
});

function handleStorageChange(event) {
    if (event.key === 'sofas') {
        sofas = localStorage.getItem('sofas');
        if (sofas !== null) {
            sofas = JSON.parse(sofas);
        }
        else {
            sofas = [];
        }
    }
}
  

 window.addEventListener('storage', handleStorageChange);