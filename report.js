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

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('wdr-component')) {

        const order = JSON.parse(localStorage.getItem('order')) || [];

        if (order.length === 0) {
            console.warn("No order data found in localStorage.");
        }

        const data = order.map(item => {
            const pizza = pizzaInfo.find(p => p.id === item.id);
            return {
                Назва: item.title,
                Розмір: item.size === 'small' ? 'Мала' : 'Велика',
                Кількість: item.quantity,
                Ціна: item.price,
                Всього: item.quantity * item.price
            };
        });

        console.log("Data for WebDataRocks:", data);

        const pivot = new WebDataRocks({
            container: "#wdr-component",
            toolbar: true,
            report: {
                dataSource: {
                    data: data
                },
                options: {
                    grid: {
                        showGrandTotals: "on",
                        showSubtotal: "off",
                        type: "flat"
                    }
                },
                slice: {
                    rows: [{
                        uniqueName: "Назва"
                    }],
                    columns: [{
                        uniqueName: "Розмір"
                    }, {
                        uniqueName: "[Measures]"
                    }],
                    measures: [{
                        uniqueName: "Кількість",
                        aggregation: "sum"
                    }, {
                        uniqueName: "Ціна",
                        aggregation: "sum"
                    }, {
                        uniqueName: "Всього",
                        aggregation: "sum"
                    }]
                }
            }
        });
    }
});
