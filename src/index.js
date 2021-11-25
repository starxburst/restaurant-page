import createTabgroup from './tab';
import createHome from './home';

console.log(`Hello`);
createTabgroup();

const container = document.createElement('div');
const content = document.getElementById('content');

container.setAttribute('id', 'cointainer');
content.appendChild(container);

createHome();