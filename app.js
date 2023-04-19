
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
