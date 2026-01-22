interface Contact {
    id: number;
    name: string;  /*required*/
    email?: string;  /* "?" optional*/
    phone?: string;
    tags?: string[];
}

let contacts: Contact[] = []; /*det här är en array(och den är tom)*/

/*Step 4 function 1*/
function addContact(contact: Contact): void { /*void betyder att function returns nothing*/
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

/*function 3*/
function findByName(name: string): Contact[] {
    const matches = contacts.filter(contact => contact.name === name);
    console.log(`Found ${matches.length} contact(s) with name "${name}"`);
    return matches;
}
/*function 4*/
function removeById(id: number): boolean {
    const index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) { // -1 kör koden bara om kontakten finns i arrayen
        const removed = contacts.splice(index, 1); //splice betyder att det tar bort elementet
        console.log(`Contact "${removed[0]!.name}" with ID ${id} has been removed.`);
        return true;
    }
    else {
            console.log(`No contact found with ID ${id}`);
            return false;
        }
    }
