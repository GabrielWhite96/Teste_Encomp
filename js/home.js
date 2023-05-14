const Contact = function (name, email, phone, idade) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.idade = idade;
}

let contacts = [];

const addNewContact = function () {
  const name = document.getElementById('inputName').value;
  const email = document.getElementById('inputEmail').value;
  const phone = document.getElementById('inputPhone').value;
  const idade = document.getElementById('inputIdade').value;
  const contact = new Contact(name, email, phone, idade);
  contacts.push(contact);
  clearInputs();
  listarUsuarios();
}

const deleteContact = function (i) {
  contacts.splice(i, 1);
  listarUsuarios();
}

let contactId;

const updateContact = function (i) {
  contactId = i;
  document.getElementById("inputName").value = contacts[i].name;
  document.getElementById("inputEmail").value = contacts[i].email;
  document.getElementById("inputPhone").value = contacts[i].phone;
  document.getElementById("inputIdade").value = contacts[i].idade;
  document.getElementById("submitButtons").innerHTML = '<button id="updateButton" class="custom-btn btn-submit" onclick=submitUpdatedContact(contactId)>Atualizar</button>';
}

const submitUpdatedContact = function (i) {
  contacts[i].name = document.getElementById("inputName").value;
  contacts[i].email = document.getElementById("inputEmail").value;
  contacts[i].phone = document.getElementById("inputPhone").value;
  contacts[i].idade = document.getElementById("inputIdade").value;

  const inputs = document.querySelectorAll('#inputName, #inputEmail, #inputPhone, #inputIdade');

  document.getElementById("submitButtons").innerHTML = '<button type="button" class="custom-btn btn-submit" onclick="addNewContact()">Adicionar</button>';
  clearInputs();
  listarUsuarios();
}

const listarUsuarios = function () {
  const contactList = contacts.map((contact, i) => `
    <tr>
      <td class="tabela-item" id="name${i}">${contact.name}</td>
      <td class="tabela-item" id="email${i}">${contact.email}</td>
      <td class="tabela-item" id="phone${i}">${contact.phone}</td>
      <td class="tabela-item" id="idade${i}">${contact.idade}</td>
      <td class="tabela-item">
        <button class="btn btn-update" onclick=updateContact(${i})>Update</button>
        <button class="btn btn-delete" onclick=deleteContact(${i})>Delete</button>
      </td>
    </tr>
  `);

  document.getElementById('displayContacts').innerHTML = contactList.join('');
}

function clearInputs() {
  document.getElementById("inputName").value = "";
  document.getElementById("inputEmail").value = "";
  document.getElementById("inputPhone").value = "";
  document.getElementById("inputIdade").value = "";
}

listarUsuarios();
