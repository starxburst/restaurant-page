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

export default createTabgroup;