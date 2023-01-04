const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, "utf-8");

    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);
  } catch (error) {
    console.log(error);
  }
}
// listContacts();

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
// getContactById(2);

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
// removeContact(4);

async function addContact(name, email, phone) {
  try {
    const contacts = await fs.readFile(contactsPath, "utf-8");

    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);
    console.log(parsedContacts.length);

    const newContact = {
      id: "12",
      name: name,
      email: email,
      phone: phone,
    };

    console.log(newContact);
    const newListContacts = await parsedContacts.push("helo");

    console.log(newListContacts);

    // await fs.writeFile(contactsPath, JSON.stringify(newListContacts), "utf-8");
  } catch (error) {
    console.log(error);
  }
}

// addContact("Bon", "123@mail.com", "131315");
