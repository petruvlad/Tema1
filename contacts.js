const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
 
  const contactsData = fs.readFileSync(contactsPath, "utf-8");


  const contacts = JSON.parse(contactsData);

 
  console.table(contacts);
}

function getContactById(contactId) {
  const contactsData = fs.readFileSync(contactsPath, "utf-8");
  const contacts = JSON.parse(contactsData);

 
  const numericContactId = parseInt(contactId);

  const contact = contacts.find((c) => c.id === numericContactId);

  if (contact) {
    console.log(contact);
  } else {
    console.log(`Contact with ID ${contactId} not found.`);
  }
}

function removeContact(contactId) {
 
  const contactsData = fs.readFileSync(contactsPath, "utf-8");


  const contacts = JSON.parse(contactsData);


  const updatedContacts = contacts.filter((c) => c.id !== contactId);

  
  fs.writeFileSync(contactsPath, JSON.stringify(updatedContacts, null, 2));

  console.log(`Contact with ID ${contactId} removed successfully.`);
}

function addContact(name, email, phone) {
 
  const contactsData = fs.readFileSync(contactsPath, "utf-8");

  
  const contacts = JSON.parse(contactsData);


  const newContact = {
    id: contacts.length + 1,
    name,
    email,
    phone,
  };

  
  contacts.push(newContact);

  
  fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));

  console.log("Contact added successfully:", newContact);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
