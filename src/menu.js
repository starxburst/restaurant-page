const menuDescription = 'While staying at our Absolute Resorts & Hotels in Phuket, you will be spoilt for choice when it comes to innovative dining concepts to suit all appetites. Whether it’s stellar Thai food, Italian classics or a variety of fresh and light meals, we have you covered. While staying at Absolute Bangla Suites or Absolute Twin Sands Resort & Spa, make sure to drop into one of our three outstanding restaurants and try our signature dishes, sure to satisfy all of your cravings !';

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

function createMenuPage() {
    const container = document.getElementById('container');
    const image = createImage();
    //const card = createInformationCard();

    container.appendChild(image);
    //container.appendChild(card);
}

export default createMenuPage;