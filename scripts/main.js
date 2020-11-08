const myHeading = document.querySelector('h1');
//alert('hello!');
myHeading.textContent = 'Hello world!';

const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
}
