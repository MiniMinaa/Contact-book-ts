interface Contact {
    id: number;
    name: string;
    email?: string;
    phone?: string;
    tags?: string[];
}

let contacts: Contact[] = [];

/*Step 4 function 1*/
function addContact(contact: Contact): void {
    contacts.push(contact);
    console.log(`Contact "${contact.name}" added successfully`);
}
