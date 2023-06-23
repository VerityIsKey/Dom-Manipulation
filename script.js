const container = document.querySelector('#container');

const para = document.createElement('p');
para.textContent = "Hey i\'m red!";
para.style.color = 'red';
container.appendChild(para);

const header3 = document.createElement('h3');
header3.textContent = "I\'m a blue h3!";
header3.style.color = 'blue';
container.appendChild(header3);

const div = document.createElement('div');
div.style.cssText ='background: pink;';
div.style.border = 'thick solid black';


const header1 = document.createElement('h1');
header1.textContent = "i\'m in a div";
div.appendChild(header1);

const para2 = document.createElement('p');
para2.textContent = "ME TOO!";
div.appendChild(para2);

container.appendChild(div);
