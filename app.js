
const firstCard = document.querySelector(".card");
firstCard.textContent = "I love frontend job"; 

//Create an element didn't actually add that newly created element anywhere on the page! 
//Creating an element...just creates it. It doesn't add it to the DOM.
//Since the element isn't added to the DOM, it doesn't appear in the page 
const container = document.createElement('span');
container.textContent = ', rigt NOW!!';


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

