interface Contact {
    id: number;
    name: string;  /*required*/
    email?: string;  /* "?" optional*/
    phone?: string;
    tags?: string[];
}

let contacts: Contact[] = []; /*det här är en array(och den är tom)*/

/*Step 4 function 1*/
function addContact(contact: Contact): void {
    contacts.push(contact);
    console.log(`Contact "${contact.name}" added successfully`);
}
/* function 2*/
function listContacts(): void {
    if(contacts.length === 0){ /*if array is empty tell user and stop*/
        console.log("No contacts found.");
        return;
    }
    contacts.forEach(contact => { /*går igenom varje för sig*/
        console.log(
            `ÌD: ${contact.id}, Name: ${contact.name}, Email: ${contact.email ?? "N/A"}, Phone: ${contact.phone ?? "N/A"}`
        );
    });
}