const fs = require("fs").promises;
const path = require("path");
const { uid } = require("uid");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, "utf-8");

    const parsedContacts = JSON.parse(contacts);
    console.table(parsedContacts);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await fs.readFile(contactsPath, "utf-8");

    const parsedContacts = JSON.parse(contacts);

    const contactByID = parsedContacts.filter(
      (contact) => contact.id === contactId.toString()
    );

    console.log(contactByID);
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await fs.readFile(contactsPath, "utf-8");

    const parsedContacts = JSON.parse(contacts);

    const contactsAfterRemove = parsedContacts.filter(
      (contact) => contact.id !== contactId.toString()
    );

    console.log(contactsAfterRemove);

    await fs.writeFile(
      contactsPath,
      JSON.stringify(contactsAfterRemove),
      "utf-8"
    );
  } catch (error) {
    console.log(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await fs.readFile(contactsPath, "utf-8");
    let parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);

    const newContact = {
      id: uid(4),
      name: name.toString(),
      email: email.toString(),
      phone: phone.toString(),
    };
    console.log(newContact);

    parsedContacts.push(newContact);
    console.log(parsedContacts);

    await fs.writeFile(contactsPath, JSON.stringify(parsedContacts), "utf-8");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
