
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


