let body = document.getElementsByTagName('body')[0];
let main = document.getElementsByTagName('main')[0];

let nav;

nav = document.createElement('nav');
nav.classList.add('nav');
body.insertBefore(nav, main);

ul = document.createElement('ul');

li = document.createElement('li');
li.textContent = 'Electronica'
li.setAttribute('onclick', 'pintar("electronica")');
ul.appendChild(li);

li = document.createElement('li');
li.textContent = 'Papeleria'
li.setAttribute('onclick', 'pintar("papeleria")');
ul.appendChild(li);

li = document.createElement('li');
li.textContent = 'Cocina'
li.setAttribute('onclick', 'pintar("cocina")');
ul.appendChild(li);

li = document.createElement('li');
li.textContent = 'Hogar'
li.setAttribute('onclick', 'pintar("hogar")');
ul.appendChild(li);

nav.appendChild(ul);