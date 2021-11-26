const menuDescription = 'While staying at our Absolute Resorts & Hotels in Phuket, you will be spoilt for choice when it comes to innovative dining concepts to suit all appetites. Whether it’s stellar Thai food, Italian classics or a variety of fresh and light meals, we have you covered. While staying at Absolute Bangla Suites or Absolute Twin Sands Resort & Spa, make sure to drop into one of our three outstanding restaurants and try our signature dishes, sure to satisfy all of your cravings !';

const foodDescription = [
    {
     'name': 'Tiradito Rosita',
     'src': './img/food1.webp'
    },
    {
     'name': 'Pork Schnitzel with Warm Potato Salad',
     'src': './img/food2.webp'
    },
    {
     'name': 'Stuffed Pork Loin',
     'src': './img/food3.webp'
    },
    {
     'name': 'Battered Onion Rings',
     'src': './img/food4.webp'
    },
    {
     'name': 'Fish & Chips, Mushy Peas and Tartare Sauce',
     'src': './img/food5.webp'
    },
    {
     'name': 'Soups and Stews for Autumn',
     'src': './img/food6.webp'
    }
];


function createImage() {
    const imageCointainer = document.createElement('div');
    const div = document.createElement('div');
    const img = document.createElement('img');

    div.textContent = menuDescription;
    img.setAttribute('src', './img/menu1.jpg');
    img.setAttribute('id', 'menu-image1');

    imageCointainer.classList.add('image-container');
    div.classList.add('centered');

    imageCointainer.appendChild(img);
    imageCointainer.appendChild(div);

    return imageCointainer;
}

function createFancyLine() {
    const hr = document.createElement('hr');
    hr.classList.add('fancy-line');

    return hr;
}

function createFoodCard(name, src) {
    const foodCard = document.createElement('div');
    const img = document.createElement('img');
    const h1 = document.createElement('h1');
    const foodCardNameContainer = document.createElement('div');

    foodCard.classList.add('food-card');
    foodCardNameContainer.classList.add('food-card-name-container');
   
    h1.textContent = name;
    h1.classList.add('food-name');

    img.setAttribute('src', src);
    img.classList.add('food-image');

    foodCardNameContainer.appendChild(h1);
    foodCard.appendChild(foodCardNameContainer);
    foodCard.appendChild(img);

    return foodCard;
}

function createFoodContainer() {
    const foodCardContainer = document.createElement('div');
    foodCardContainer.classList.add('food-card-container');

    foodDescription.forEach((food) => {
        foodCardContainer.appendChild(createFoodCard(food.name, food.src));
    })

    return foodCardContainer;
}

function createMenuPage() {
    const container = document.getElementById('container');
    const image = createImage();
    const food = createFoodContainer();
    const hr = createFancyLine();
    //const card = createInformationCard();

    container.appendChild(image);
    container.appendChild(hr);
    container.appendChild(food);
    //container.appendChild(card);
}

export default createMenuPage;