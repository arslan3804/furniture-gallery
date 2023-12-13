const applyFiltersBtn = document.querySelector('.filter-button');
const items = document.querySelectorAll('.items li');

applyFiltersBtn.addEventListener('click', function () {
    const priceFilters = document.querySelectorAll('.filter-item.price ul input[type="checkbox"]:checked');

    items.forEach(item => {
        const price = parseInt(item.getAttribute('price'));
        let matchesPrice = false;
        if (priceFilters.length === 0) {
            matchesPrice = true;
        } else {
            Array.from(priceFilters).forEach(filter => {
                const minPrice = filter.getAttribute('data-min-price');
                const maxPrice = filter.getAttribute('data-max-price');

                if (minPrice <= price && price <= maxPrice) {
                    matchesPrice = true;
                }
            });
        }


        const widthFilters = document.querySelectorAll('.filter-item.width ul input[type="checkbox"]:checked');
        const width = parseInt(item.getAttribute('data-width'));
        let matchesWidth = false;
        if (widthFilters.length === 0) {
            matchesWidth = true;
        } else {
            Array.from(widthFilters).forEach(filter => {
                const minWidth = filter.getAttribute('data-min-width');
                const maxWidth = filter.getAttribute('data-max-width');

                if (minWidth <= width && width <= maxWidth) {
                    matchesWidth = true;
                }
            });
        }


        const colorFilters = document.querySelectorAll('.filter-item.color ul input[type="checkbox"]:checked');
        const color = parseInt(item.getAttribute('data-color'));
        let matchesColor = false;
        if (colorFilters.length === 0) {
            matchesColor = true;
        } else {
            Array.from(colorFilters).forEach(filter => {
                const filterColor = filter.getAttribute('data-color');

                if (color == filterColor) {
                    matchesColor = true;
                }
            });
        }


        const mechanismFilters = document.querySelectorAll('.filter-item.mechanism ul input[type="checkbox"]:checked');
        const mechanism = parseInt(item.getAttribute('data-mechanism'));
        let matchesMechanism = false;
        if (mechanismFilters.length === 0) {
            matchesMechanism = true;
        } else {
            Array.from(mechanismFilters).forEach(filter => {
                const filterMechanism = filter.getAttribute('data-mechanism');

                if (mechanism == filterMechanism) {
                    matchesMechanism = true;
                }
            });
        }


        if (matchesPrice && matchesWidth && matchesColor && matchesMechanism) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});