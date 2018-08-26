var buttom = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0){
		createListElement();
	}
}

function addListAfterKeypress(event){
	//keycode 13 = enter
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

buttom.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);


//remove item

var removeButtom = document.getElementById('remove');
var removeItem = document.getElementById("removeItem");
var existingList = document.getElementsByTagName("LI");

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function removeLength() {
	return removeItem.value.length;
}

function deleteListElement() {
	var li = document.removeElement('li');
	li.removeChild(document.createTextNode(removeItem.value));
	ul.removeChild(li);
	removeItem.value = "";
}

function removeListAfterClick() {
	if (removeLength() > 0){
		deleteListElement();
	}
}

removeButtom.addEventListener("click",removeListAfterClick);
