const pizzaInfo = [
    {
        id: 1,
        icon: 'img/pizza_7.jpg',
        title: "Імпреза",
        type: 'М’ясна піца',
        content: {
            meat: ['балик', 'салямі'],
            chicken: ['куриця'],
            cheese: ['сир моцарелла', 'сир рокфорд'],
            pineapple: ['ананаси'],
            additional: ['томатна паста', 'петрушка']
        },
        small_size: {
            weight: 370,
            size: 30,
            price: 99
        },
        big_size: {
            weight: 660,
            size: 40,
            price: 169
        },
        is_new: true,
        is_popular: true
    },
    {
        id: 2,
        icon: 'img/pizza_2.jpg',
        title: "BBQ",
        type: 'М’ясна піца',
        content: {
            meat: ['мисливські ковбаски', 'ковбаски папероні', 'шинка'],
            cheese: ['сир домашній'],
            mushroom: ['шампінйони'],
            additional: ['петрушка', 'оливки']
        },
        small_size: {
            weight: 460,
            size: 30,
            price: 139
        },
        big_size: {
            weight: 840,
            size: 40,
            price: 199
        },
        is_popular: true
    },
    {
        id: 3,
        icon: 'img/pizza_1.jpg',
        title: "Міксовий поло",
        type: 'М’ясна піца',
        content: {
            meat: ['вітчина', 'куриця копчена'],
            cheese: ['сир моцарелла'],
            pineapple: ['ананаси'],
            additional: ['кукурудза', 'петрушка', 'соус томатний']
        },
        small_size: {
            weight: 430,
            size: 30,
            price: 115
        },
        big_size: {
            weight: 780,
            size: 40,
            price: 179
        }
    },
    {
        id: 4,
        icon: 'img/pizza_5.jpg',
        title: "Сициліано",
        type: 'М’ясна піца',
        content: {
            meat: ['вітчина', 'салямі'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            additional: ['перець болгарський', 'соус томатний']
        },
        small_size: {
            weight: 450,
            size: 30,
            price: 111
        },
        big_size: {
            weight: 790,
            size: 40,
            price: 169
        }
    },
    {
        id: 17,
        icon: 'img/pizza_3.jpg',
        title: "Маргарита",
        type: 'Вега піца',
        content: {
            cheese: ['сир моцарелла', 'сир домашній'],
            tomato: ['помідори'],
            additional: ['базилік', 'оливкова олія', 'соус томатний']
        },
        small_size: {
            weight: 370,
            size: 30,
            price: 89
        }
    },
    {
        id: 43,
        icon: 'img/pizza_6.jpg',
        title: "Мікс смаків",
        type: 'М’ясна піца',
        content: {
            meat: ['ковбаски'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            pineapple: ['ананаси'],
            additional: ['цибуля кримська', 'огірки квашені', 'соус гірчичний']
        },
        small_size: {
            weight: 470,
            size: 30,
            price: 115
        },
        big_size: {
            weight: 780,
            size: 40,
            price: 180
        }
    },
    {
        id: 90,
        icon: 'img/pizza_8.jpg',
        title: "Дольче Маре",
        type: 'Морська піца',
        content: {
            ocean: ['криветки тигрові', 'мідії', 'ікра червона', 'філе червоної риби'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        big_size: {
            weight: 845,
            size: 40,
            price: 399
        }
    },
    {
        id: 6,
        icon: 'img/pizza_4.jpg',
        title: "Россо Густо",
        type: 'Морська піца',
        content: {
            ocean: ['ікра червона', 'лосось копчений'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        small_size: {
            weight: 400,
            size: 30,
            price: 189
        },
        big_size: {
            weight: 700,
            size: 40,
            price: 299
        }
    }
];

function renderPizza(pizza) {
    const pizzaContainer = document.getElementById('pizza-container');
    const pizzaCard = document.createElement('div');
    pizzaCard.classList.add('pizza-card');

    let headerClass = "";
    if (pizza.is_new) {
        headerClass = "new";
    } else if (pizza.is_popular) {
        headerClass = "popular";
    }

    pizzaCard.innerHTML = `
            <div class="pizza-header ${headerClass}">${pizza.is_new ? "Нова" : pizza.is_popular ? "Популярна" : ""}</div>
            <img src="${pizza.icon}" alt="${pizza.title}" class="pizza-image">
            <h3>${pizza.title}</h3>
            <p>${Object.values(pizza.content).flat().join(', ')}</p>
            <div class="pizza-sizes">
                ${pizza.small_size ? `
                <div class="size-option">
                    <img src="img/size-icon.svg" alt="Size Icon">
                    <span>${pizza.small_size.size} см</span>
                    <img src="img/weight.svg" alt="Weight Icon">
                    <span>${pizza.small_size.weight} г</span>
                    <div class="price">
                        <span>${pizza.small_size.price} грн.</span>
                        <button onclick="addToOrder(${pizza.id}, 'small')">Купити</button>
                    </div>
                </div>` : ''}
                ${pizza.big_size ? `
                <div class="size-option">
                    <img src="img/size-icon.svg" alt="Size Icon">
                    <span>${pizza.big_size.size} см</span>
                    <img src="img/weight.svg" alt="Weight Icon">
                    <span>${pizza.big_size.weight} г</span>
                    <div class="price">
                        <span>${pizza.big_size.price} грн.</span>
                        <button onclick="addToOrder(${pizza.id}, 'big')">Купити</button>
                    </div>
                </div>` : ''}
            </div>
        `;
    pizzaContainer.appendChild(pizzaCard);
}

function filterPizzas(filter) {
    const pizzaContainer = document.getElementById('pizza-container');
    pizzaContainer.innerHTML = '';
    let filteredPizzas = pizzaInfo;

    if (filter !== 'all') {
        if (filter === 'vega') {
            filteredPizzas = pizzaInfo.filter(pizza => pizza.type.toLowerCase().includes('вега'));
        } else {
            filteredPizzas = pizzaInfo.filter(pizza => Object.keys(pizza.content).includes(filter));
        }
    }

    filteredPizzas.forEach(pizza => renderPizza(pizza));
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('nav a.active').classList.remove('active');
        this.classList.add('active');
        const filter = this.getAttribute('data-filter');
        filterPizzas(filter);
    });
});

pizzaInfo.forEach(pizza => renderPizza(pizza));

window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function addToOrder(pizzaId, size) {
    const pizza = pizzaInfo.find(p => p.id === pizzaId);
    const orderPanel = document.querySelector('.order-panel');
    const orderTotal = orderPanel.querySelector('.order-total p:nth-child(2)');
    const orderCount = orderPanel.querySelector('h2 span');
    const clearOrderBtn = document.querySelector('.clear-order');
    const orderTotalContainer = document.querySelector('.order-total');

    let order = JSON.parse(localStorage.getItem('order')) || [];

    let orderItem = order.find(item => item.id === pizzaId && item.size === size);

    if (orderItem) {
        orderItem.quantity += 1;
    } else {
        orderItem = {
            id: pizzaId,
            size: size,
            title: pizza.title,
            quantity: 1,
            price: size === 'small' ? pizza.small_size.price : pizza.big_size.price,
            icon: pizza.icon
        };
        order.push(orderItem);
    }

    localStorage.setItem('order', JSON.stringify(order));

    renderOrder();
    orderCount.textContent = `(${order.reduce((sum, item) => sum + item.quantity, 0)})`;
    orderTotal.textContent = `${order.reduce((sum, item) => sum + item.quantity * item.price, 0)} грн`;

    clearOrderBtn.style.display = 'block';
    orderTotalContainer.style.display = 'block';
}

function renderOrder() {
    const orderPanel = document.querySelector('.order-panel');
    const orderContainer = document.querySelector('.order-container');

    orderContainer.innerHTML = '';

    let order = JSON.parse(localStorage.getItem('order')) || [];

    order.forEach(item => {
        const pizza = pizzaInfo.find(p => p.id === item.id);
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');

        orderItem.innerHTML = `
                <img src="${item.icon}" alt="${item.title}">
                <div class="order-details">
                    <h3>${item.title} (${item.size === 'small' ? 'Мала' : 'Велика'})</h3>
                    <p>${item.size === 'small' ? '30 см' : '40 см'}, ${item.size === 'small' ? pizza.small_size.weight : pizza.big_size.weight} г</p>
                    <p>${item.price * item.quantity} грн</p>
                    <div class="order-controls">
                        <button class="minus" onclick="updateQuantity(${item.id}, '${item.size}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="plus" onclick="updateQuantity(${item.id}, '${item.size}', 1)">+</button>
                    </div>
                </div>
            `;

        orderContainer.appendChild(orderItem);
    });

    const orderCount = order.reduce((sum, item) => sum + item.quantity, 0);
    const orderTotal = order.reduce((sum, item) => sum + item.quantity * item.price, 0);

    document.querySelector('.order-panel h2 span').textContent = `(${orderCount})`;
    document.querySelector('.order-total p:nth-child(2)').textContent = `${orderTotal} грн`;

    const clearOrderBtn = document.querySelector('.clear-order');
    const orderTotalContainer = document.querySelector('.order-total');

    if (orderCount === 0) {
        clearOrderBtn.style.display = 'none';
        orderTotalContainer.style.display = 'none';
    } else {
        clearOrderBtn.style.display = 'block';
        orderTotalContainer.style.display = 'block';
    }
}

function updateQuantity(pizzaId, size, delta) {
    let order = JSON.parse(localStorage.getItem('order')) || [];
    let orderItem = order.find(item => item.id === pizzaId && item.size === size);

    if (orderItem) {
        orderItem.quantity += delta;

        if (orderItem.quantity <= 0) {
            order = order.filter(item => !(item.id === pizzaId && item.size === size));
        }

        localStorage.setItem('order', JSON.stringify(order));
        renderOrder();

        const orderTotal = order.reduce((sum, item) => sum + item.quantity * item.price, 0);
        const orderCount = order.reduce((sum, item) => sum + item.quantity, 0);

        document.querySelector('.order-panel h2 span').textContent = `(${orderCount})`;
        document.querySelector('.order-total p:nth-child(2)').textContent = `${orderTotal} грн`;

        const clearOrderBtn = document.querySelector('.clear-order');
        const orderTotalContainer = document.querySelector('.order-total');

        if (orderCount === 0) {
            clearOrderBtn.style.display = 'none';
            orderTotalContainer.style.display = 'none';
        }
    }
}

document.querySelector('.clear-order').addEventListener('click', function() {
    localStorage.removeItem('order');
    renderOrder();
    document.querySelector('.order-panel h2 span').textContent = '(0)';
    document.querySelector('.order-total p:nth-child(2)').textContent = '0 грн';

    document.querySelector('.order-total').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    renderOrder();



    const activeFilter = document.querySelector('nav a.active').getAttribute('data-filter');
    filterPizzas(activeFilter);
});
