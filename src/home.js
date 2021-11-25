const restaurantDescription = 'Taste around town in November with a whole month of indulgences and the trendiest tasting experiences. Meet masters of wines in our on-air programmes with special tasting kits delivered to your door and embark on a new self-guided wine tasting journey with our e-pass. Let your taste buds wander as you soak up the glamour of restaurant celebrations in this Culinary Capital of Asia! There’s so much more to check out.';
const addressCard =
    {
     'address': 'International Commerce Centre, 1 Austin Road West',
     'phone': '+85222632263',
     'email': 'starxburst@gmail.com'
    };

const testz = '       4930 Ross St.\n'
    + 'Red Deer, AB T4N 1X7\n'
    + '\n'
    + '            Phone:\n'
    + '      403-392-3046\n'
    + '            Email:\n'
    + 'eat@tribeflatout.com\n';

function createImage() {
    const imageCointainer = document.createElement('div');
    const div = document.createElement('div');
    const img = document.createElement('img');

    div.textContent = restaurantDescription;
    img.setAttribute('src', './img/home1.jpg');
    img.setAttribute('id', 'home-image1');

    imageCointainer.classList.add('image-cointainer');
    div.classList.add('centered');

    imageCointainer.appendChild(img);
    imageCointainer.appendChild(div);

    return imageCointainer;
}

function createAddressCard() {
    const card = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('pre');

    h1.textContent = '-Address-';
    h2.textContent = testz;

    card.appendChild(h1);
    card.appendChild(h2);
    console.log(`Hello`);

    return card;
}

function createInformationCard() {
    const cardCointainer = document.createElement('div');

    let addressCard = createAddressCard();
    cardCointainer.appendChild(addressCard);

    return cardCointainer;
}

function createHome() {
    const cointainer = document.getElementById('cointainer');
    const image = createImage();
    const card = createInformationCard();

    cointainer.appendChild(image);
    cointainer.appendChild(card);
}

export default createHome;