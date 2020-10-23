/* Use this area for pseudo - coding:



*/

// Query selectors
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
var addContactButton = document.querySelector('#register-btn');
var displayContactButton = document.querySelector('#display-btn');
var displayArea = document.querySelector('.display-area');
var contacts = [];

// Event listeners
addContactButton.addEventListener('click', addContact);
displayContactButton.addEventListener('click', displayContact);


// Functions
function addContact() {
  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("email", emailInput.value);
  nameInput.value = "";
  emailInput.value = "";
  addContacts();
}

function displayContact() {
  contacts.forEach(con => {
    displayArea.insertAdjacentHTML('beforeend', con);
  });
}

function addContacts() {
  var name = localStorage.getItem("name");
  var email = localStorage.getItem("email");
  var contact = `<p><b>Name: </b>` + name + `<br><b>Email: </b>` + email + `</p>`;
  contacts.push(contact);
}
