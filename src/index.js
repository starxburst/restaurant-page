import createTabgroup from './tab';
import createHomePage from './home';

console.log(`Hello`);
createTabgroup();

const container = document.createElement('div');
const content = document.getElementById('content');

container.setAttribute('id', 'container');
content.appendChild(container);

createHomePage();