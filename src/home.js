const restaurantDescription = 'Taste around town in November with a whole month of indulgences and the trendiest tasting experiences. Meet masters of wines in our on-air programmes with special tasting kits delivered to your door and embark on a new self-guided wine tasting journey with our e-pass. Let your taste buds wander as you soak up the glamour of restaurant celebrations in this Culinary Capital of Asia! There’s so much more to check out.';
const addressCardDescription = 'International Commerce Centre, 1 Austin Road West\n'
    + '\n'
    + 'Phone:\n'
    + '+85222632263\n'
    + 'Email:\n'
    + 'starxburst@gmail.com\n';

const hoursCardDescription = 'Monday:\n'
    + '11:00 a.m. - 11:45 p.m.\n'
    + '\n'
    + 'Wed,Thurs,Fri,Sat,Sun:\n'
    + '10:00 a.m. - 01:00 a.m.\n';

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
    h2.textContent = addressCardDescription;
    h2.classList.add('card-description');
    card.classList.add('information-card');

    card.appendChild(h1);
    card.appendChild(h2);

    return card;
}

function createHoursCard() {
    const card = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('pre');

    h1.textContent = '-Hours-';
    h2.textContent = hoursCardDescription;
    h2.classList.add('card-description');
    card.classList.add('information-card');

    card.appendChild(h1);
    card.appendChild(h2);

    return card;
}

function createInformationCard() {
    const cardContainer = document.createElement('div');

    let addressCard = createAddressCard();
    let hoursCard = createHoursCard();
    cardContainer.classList.add('information-card-container');
    cardContainer.appendChild(addressCard);
    cardContainer.appendChild(hoursCard);

    return cardContainer;
}

function createHome() {
    const container = document.getElementById('container');
    const image = createImage();
    const card = createInformationCard();

    container.appendChild(image);
    container.appendChild(card);
}

export default createHome;