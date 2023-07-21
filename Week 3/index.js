const names = document.getElementById('fname').value;
const mail = document.getElementById('email').value;
const number = document.getElementById('tel-no').value;

let stored_data = localStorage.getItem("storedItem");

function save(){
    const new_contact = {
        id: names,
        email: mail,
        phone: number,
    };
    function getNames(){
        return ('Name: ${new_contact.id} Email: ${new_contact.email} Phone number: ${new_contact.phone}')
    };
}
console.log(new_contact.getNames());
