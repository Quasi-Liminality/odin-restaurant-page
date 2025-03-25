const createMenuItem = (itemName, itemPrice) => {
    const div = document.createElement('div');
    div.className = `menu-item ${itemName.toLowerCase()}`;

    const pItemPrice = document.createElement('p');
    pItemPrice.className = 'item-price';
    pItemPrice.textContent = `Starting from \$${itemPrice}`;

    const pItemName = document.createElement('p');
    pItemName.className = 'item-name';
    pItemName.textContent = itemName;

    div.append(pItemPrice, pItemName)

    return div;
};

export const MenuPage = (function() {
    const container = (function () {
        const div = document.createElement('div');
        div.className = 'container';
        return div;
    })();

    const menuHeading = (function () {
        const p = document.createElement('p');
        p.className = 'menu-heading';
        p.textContent = 'Our Menu';
        return p;
    })();

    const menu = (function () {
        const div = document.createElement('div');
        div.className = 'menu';
        return div;
    })();

    const menuItemSalads = createMenuItem('Salads', 0.99);
    const menuItemPizzas = createMenuItem('Pizzas', 8.99);
    const menuItemPastas = createMenuItem('Pastas', 10.99);
    const menuItemSoups = createMenuItem('Soups', 9.99);

    // Structure page
    menu.append(menuItemSalads, menuItemPizzas, menuItemPastas, menuItemSoups);
    container.append(menuHeading, menu);
    
    return container;
})();