
const firstCard = document.querySelector(".card");
firstCard.textContent = "I love frontend job"; 

//Create an element didn't actually add that newly created element anywhere on the page! 
//Creating an element...just creates it. It doesn't add it to the DOM.
//Since the element isn't added to the DOM, it doesn't appear in the page 
const container = document.createElement('span');
container.textContent = ', rigt NOW!!';

//Adding Content To The Page
//create a brand new span element
const newSpan = document.createElement('span');
//create CONTENT inside a new span element
newSpan.textContent =', right now!!';
//select the first (main) heading of the page
const mainHeading = document.querySelector('h1');
//add the span element as the last child  element
mainHeading.appendChild(newSpan);
//.appendChild() method is called on one EXISTING ELEMENT, and is passed the element to append. 
//The element that is about to be appended is added as the last child. So, in the example above, 
//the <span> element will appear in the DOM as a child of the <h1>.
//but it will appear at the end, after all text and any other elements that might be in the <h1>


//Creating Text Nodes
//create a paragraph element
const myPara = document.createElement('p');
//creates a text node
const textOfParagraph = document.createTextNode('I am the text for the paragraph!');
//appends the text node to the paragraph
myPara.appendChild(textOfParagraph);
//appends the paragraph to the tag
document.body.appendChild(myPara);

//Faster way with .textContent method
const myPara1 = document.createElement('p');

myPara.textContent = 'I am the text for the paragraph!';
document.body.appendChild(myPara1);
//instead of creating a new text node and appending it to an element, it's faster and 
//easier to just update the element's text with the .textContent property.


//Inserting HTML In Other Locations
//The .insertAdjacentHTML() method has to be called with two arguments:

//the location of the HTML
//the HTML text that is going to be inserted
//This method needs to be called on parent element
// <!-- beforebegin -->
// <p>
//     <!-- afterbegin -->
//     Existing text/HTML content
//     <!-- beforeend -->
// </p>
// <!-- afterend -->

const mainHeading3 = document.querySelector('#main-heading');
const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

mainHeading3.insertAdjacentHTML('afterend', htmlTextToAdd);


//Remove page content
//Pattern: <parent-element>.removeChild(<child-to-remove>);
//removeChild() - require access to parent to function 
//how to workaround this?
//you can use the parentElement property to "move focus" to the element's parent. 
//Then we can call .removeChild() 
//(or .appendChild()) on that referenced parent element.

const mainHeading5 = document.querySelector('h1');

mainHeading5.parentElement.removeChild(mainHeading5);
//This starts with the mainHeading variable. It calls .parentElement, 
//so the focus of the next code is directed at the parent element. 
//Then .removeChild() is called on the parent element. Finally, 
//mainHeading itself is passed as the element that needs to be removed from its parent.
//So an element uses itself to remove itself from its parent. Pretty cool


//Remove child element directly
const mainHeading7 = document.querySelector('h1');

mainHeading7.remove(); 


//Styling multiple elements at once
const mainHeading8 = document.querySelector('h1');

mainHeading8.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';


//Setting An Element's Attributes
//Another way to set styles for an element is to bypass the .style.<property> and 
//.style.cssText properties altogether and use the .setAttribute() method 
//(You can use this method to set any attribute for an element):
const mainHeading8a = document.querySelector('h1');

mainHeading8a.setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5em;');
const mainHeading9 = document.querySelector('h1');

// add an ID to the heading's sibling element
mainHeading9.nextElementSibling.setAttribute('id', 'heading-sibling');

// use the newly added ID to access that element
document.querySelector('#heading-sibling').style.backgroundColor = 'red';

//Interactivity should be in the JS file
//However we do have to tie these together just a little


//Accessing an Element's Classes
//<h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>
const mainHeading10 = document.querySelector('#main-heading');

// store the list of classes in a variable
const listOfClasses2 = mainHeading10.className;

// logs out the string "ank-student jpk-modal"
console.log(listOfClasses2);

//The .className property returns a space-separated string of the classes. 
//To convert this space-separated string into an array using the JavaScript string method, .split():

const arrayOfClasses = listOfClasses2.split(' ');

// logs out the array of strings ["ank-student", "jpk-modal"]
console.log(arrayOfClasses);

mainHeading10.className = "im-the-new-class";
//The above code erases any classes that were originally in the element's class 
//attribute and replaces it with the single class im-the-new-class.


//.classList
//The .classList property is newer than the .className property, but is much nicer, and better in my opinion (it returns DOMTokenList so you can use on it the add(), remove(), replace(), contains() - returns a boolean based on if the class exists in the list or not, and toggle() methods faster), check it out:
//<h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>
const mainHeading11 = document.querySelector('#main-heading');

// store the list of classes in a variable
const listOfClasses = mainHeading11.classList;

// logs out ["ank-student", "jpk-modal"]
console.log(listOfClasses);
//https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

/// start displaying all events on the document object
monitorEvents(document);

// turn off the displaying of all events on the document object.
unmonitorEvents(document);

//monitorEvents(document); and IunmonitorEvents(document); It's not supposed to be used for production code.
//only development/testing


const mainHeadingb = document.querySelector('h1');

mainHeadingb.addEventListener('click', function () {
  console.log('The heading was clicked!');
});

//<event-target>.addEventListener(<event-to-listen-for>, <function-to-run-when-an-event-happens>);

//So an event listener needs three things:

//1.an event target - this is called the target

//2.the type of event to listen for - this is called the type
//3. function to run when the event occurs - this is called the listener


//.removeEventListener()
//.removeEventListener() method requires you to pass the same exact listener function to it as the one you passed to .addEventListener().

//Let's see some pseudo-code for the .removeEventListener():

//<event-target>.removeEventListener(<event-to-listen-for>, <function-to-remove>);

// So an event listener needs three things:

//     an event target - this is called the target

//     the type of event to listen for - this is called the type
//     the function to remove - this is called the listener

function myEventListeningFunction() {
    console.log('howdy');
}

// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', myEventListeningFunction);

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', myEventListeningFunction);

// Now, why does this work? It works because both .addEventListener() and .removeEventListener:

//     have the same target
//     have the same type
//     and pass the exact same listener

//An example that would not work (it does not remove the event listener):

// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', function myEventListeningFunction() {
    console.log('howdy');
});

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', function myEventListeningFunction() {
    console.log('howdy');
});

// This code does not successfully remove the event listener. Again, why does this not work?

//     both .addEventListener() and .removeEventListener have the same target
//     both .addEventListener() and .removeEventListener have the same type
//     .addEventListener() and .removeEventListener have their own distinct listener functions...
// they do not refer to the exact same function (this is the reason the event listener removal fails!)
// the function we added listener to has different  memory address than 
//memory address the function we tried to remove  the listener from

//Two functions can look the same, but live in two different places in memory. Looks can be deceiving!

//Imagine a scenario where you see two houses that look exactly the same. 
//While the houses might look the same, their addresses are different! 

//The difference between capturing and bubbling
el.addEventListener('click', function () {
    console.log('You clicked on the 2nd quizzing-quizzes item!');
}, false);
//at the end it should be, true --> to be executed as a capturing phase 
//(if not the default phase is bubbling)
//Remember that the third argument of the .addEventListener() method is the boolean 
//for the capturing phase. Since it's false, that means the event listener should
// not run during the capturing phase...therefore it will run in the (default) bubble phase.


// 💡 LISTENER WITH PARAMETER FUMNCTION TO STORE event object: An "event" is an "evt" is an "e" 💡

// Remember that a function's parameter is just like a regular variable. 
//In the following example, I'm using a parameter with the name event.

const items = document.querySelectorAll('.quizzing-quizzes');
const el = items[1];

el.addEventListener('keypress', function (event) {
    console.log('You clicked on the 2nd quizzing-quizzes item!');
});

//Prevent from default action:
// Without the event object, we're stuck with the default actions. 
// However, the event object has a .preventDefault() method on it that a handler can call to prevent 
// the default action from occurring!

const links = document.querySelectorAll('a');
const thirdLink = links[2];

thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Look, ma! We didn't navigate to a new page!");
});


//Checking the Node Type in Event Delegation
//Nasz element, ktory chcemy osluchac zostal upchniety w spanie w article, oto jka sie do niego dostac
// <article id="content">
//   <p>Brownie lollipop <span>carrot cake</span> gummies lemon drops sweet roll dessert tiramisu. Pudding muffin <span>cotton candy</span> croissant fruitcake tootsie roll. Jelly jujubes brownie. Marshmallow jujubes topping sugar plum jelly jujubes chocolate.</p>

//   <p>Tart bonbon soufflé gummi bears. Donut marshmallow <span>gingerbread cupcake</span> macaroon jujubes muffin. Soufflé candy caramels tootsie roll powder sweet roll brownie <span>apple pie</span> gummies. Fruitcake danish chocolate tootsie roll macaroon.</p>
// </article>

// In this filler text, notice that there are some <span> tags. 
//If we want to listen to the <article> for a click on a <span>, you need to add
//.nodeName for that element (it MUST be written in CAPIAL letters)
document.querySelector('#content').addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'SPAN') {  // ← verifies target is desired element
        console.log('A span was clicked with text ' + evt.target.textContent);
    }
});
//One of the properties of the Node Interface that is inherited is .nodeName. 
//We can use this property to verify that the target element is actually the element we're looking for. When a <span> element is clicked, it will have a .nodeName property of "SPAN", so the check will pass and the message will be logged. However, if a <p> element is clicked, it will have a .nodeName property of "P",
// so the check will fail and the message will not be logged.

// The nodeName's Capitalization ⚠️

// The .nodeName property will return an uppercase string, not a lowercase one. So when you perform your check make sure to either:

//     check for capital letters
//     convert the .nodeName to lowercase

// check using capital letters
if (evt.target.nodeName === 'SPAN') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}

// convert nodeName to lowercase
if (evt.target.nodeName.toLowerCase() === 'span') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}

// Event Delegation is the process of delegating to a parent element the ability to manage events for child elements. We were able to do this by making use of:

//     the event object and its .target property
//     the different phases of an event



//Using the DOMContentLoaded Event
//Because we now know about the DOMContentLoaded event, we can use it to keep our JS code in the <head>.
//HOw to use it so the Js file will be executed after DOM will be parsed

// Let's update the previous HTML code to include this event:

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <link rel="stylesheet" href="/css/styles.css" />
//     <script>
//       document.addEventListener('DOMContentLoaded', function () {
//           document.querySelector('footer').style.backgroundColor = 'purple';
//       });
//     </script>
//Pretty cool, right?!? We have the JavaScript code in the <head> element, 
//but it is now wrapped in an event listener for the DOMContentLoaded event. 
//This will prevent the DOM-styling code from running when the browser gets to it. 
//Then, when the DOM has been constructed, the event will fire and this code will run.


//When would you want to use this technique? 
//Well, JavaScript code in the <head> will run before JavaScript code in the <body>, 
//so if you do have JavaScript code that needs to run as soon as possible, 
//then you could put that code in the <head> and wrap it in a DOMContentLoaded event listener. 
//This way it will run as early as possible, but not too early that the DOM isn't ready for it.

//Testing if our code is efficient 
//MEASURE THE SPEED OF YOUR CODE:

const startingTime = performance.now();

for (let i = 1; i <= 100; i++) { 
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}

const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
//These are the steps to use performance.now() to measure the speed of your code:

// use performance.now() to get the initial start time for the code - HERE const startingTime

// run the code you want to test
// execute performance.now() to get another time measurement- HERE const endingTime
// subtract the initial time from the final time

//What is reflow?
//Reflow is the process of the browser laying out the page. It happens when you first display the DOM 
//(generally after the DOM and CSS have been loaded), 
//and happens again every time something could change the layout. This is a fairly expensive (slow) process.
//Why are we doing this? The browser is constantly working to make the screen match the DOM. 
//When we add a new element, the browser has to run through a reflow calculation (to determine the new screen layout) and then repaint the screen. This takes time.

//If we had added each new paragraph to the body element, 
//then the code would've been a lot slower, because this would cause the browser to go through the reflow and 
//repaint process for each paragraph. We really only want the browser to do this once, 
//so we need to attach each new paragraph to something, 
//but we don't want to have an extra, unneeded element to get added to the DOM.

//Here's  DocumentFragment comes to help - it's like creating another lightweight DOM tree. 
//But the beneficial part of this is what it says next: changes made to a DocumentFragment 
//happen off-screen; there's no reflow and repaint cost while you build this. So this is exactly what we need!
//We can use the .createDocumentFragment() method to create an empty DocumentFragment object.

const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

for (let i = 0; i < 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // reflow and repaint here -- once!