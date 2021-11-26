import createHomePage from './home';
import createMenuPage from './menu';

const tabNames = [
    {
     'name': 'Home',
     'id': 'home'
    },
    {
     'name': 'Menu',
     'id': 'menu'
    },
    {
     'name': 'Contact us',
     'id': 'contact'
    }
];

//create tab button
function createTab() {
    tabNames.forEach((tab) => {
        const btn = document.createElement('button');
        btn.classList.add('tab-button');   
        btn.setAttribute('id', tab.id);
        btn.textContent = tab.name;
        btn.addEventListener('click',  changeTab);

        const tabgroup = document.getElementById('tabgroup');
        tabgroup.appendChild(btn);
    })


}

//create tab panel
function createTabgroup() {
    const tabgroup = document.createElement('div');
    tabgroup.classList.add('tab-panel');
    tabgroup.setAttribute('id', 'tabgroup');

    const content = document.getElementById('content');
    content.appendChild(tabgroup);

    createTab();
}

//Change tab content
function changeTab(e) {
    const container = document.getElementById('container');

    if (e.target.getAttribute('id') == 'home') {
        container.innerHTML = '';
        createHomePage();
        console.log('home');
    }
    if (e.target.getAttribute('id') == 'menu') {
        console.log('menu');
        container.innerHTML = '';
        createMenuPage();
    }
}

export default createTabgroup;