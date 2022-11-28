let controls = document.querySelector('.controls');
let container = document.querySelector('#container'); // document is the entire page, container.querySelector is also possible
console.dir(container.firstElementChild);
console.dir(controls.previousElementSibling);
console.log(container.querySelectorAll('div')); // This will print a nodelist, which is NOT an array
Array.from(container.querySelectorAll('div'));
const div = document.createElement('div'); // This only creates the element, not put it in the DOM
div.style.color = 'red';
div.setAttribute('style', 'color: blue; background: white;'); // Will override previously set styles
// div.style.background-color doesn't work - attempts to subtract color from div.style.background
div.style.backgroundColor // accesses the div's background-color style
div.style['background-color'] // also works
div.style.cssText = "background-color: white;" // ok in a string

div.setAttribute('id', 'theDiv');
div.getAttribute('id');   
div.removeAttribute('id');   

div.classList.toggle('active');                                
// if div doesn't have class "active" then add it, or if
// it does, then remove it

div.textContent = 'Hello World!' // Adds text content
container.appendChild(div);

const p = document.createElement('p'); // Only for document
p.textContent = "Hey I'm red";
p.style.color = 'red';
div.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3";
h3.style.color = 'blue';
container.appendChild(h3);

const div2 = document.createElement('div');
div2.setAttribute('style', 'background-color: pink; border: 2px solid black;')
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
const p2 = document.createElement('p');
p2.textContent = "ME TOO!";
div2.appendChild(h1);
div2.appendChild(p2);
container.appendChild(div2);

const btn = document.querySelector('#button2');
btn.onclick() = () => alert('Hello World'); // Problem, can only have one click property

const btn2 = document.querySelector('#button3');
btn2.addEventListener('click', (e) => {
    alert('Hello World');
    console.log(e); // e is the event and can give more info about the event
    // e.target is the event node that was clicked, and can be editted
    // e.target.style.background = 'blue'; like this
}); // All 3 can use named functions too

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});