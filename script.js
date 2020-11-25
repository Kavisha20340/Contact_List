let contacts = [
    {
        name: 'Kavisha Gupta',
        phone: '9628820340',
        email: 'kavishagupta20340@gmail.com'
    },
    {
        name: 'Praveen Kumar',
        phone: '9634049244',
        email: 'pkspyder007@gmail.com'
    }
]

let ContactList = document.querySelector('#conlist');

contacts.forEach(function(_con){
    let row = document.createElement('tr'); 
    row.innerHTML = `<td>${_con.name}</td><td>${_con.phone}</td><td>${_con.email}</td>`;
    ContactList.appendChild(row);
});

let newPersonEntry = document.querySelector('#newperson');

newPersonEntry.addEventListener('submit', function(kg) {
    kg.preventDefault();
    let name = document.querySelector('#npname').value;
    let phone = document.querySelector('#npphone').value;
    let email = document.querySelector('#npemail').value;
    if(name === '' || phone === '' || email === '') {
        let msg = document.querySelector('#dmsg');
        msg.innerHTML = '<div class="message alert alert-danger">Please fill all the fields</div>';
        setTimeout(function(){
            console.log('hhh');
            document.querySelector('.message').remove();
        }, 3000);
    } else {
        let row = document.createElement('tr'); 
        row.innerHTML = `<td>${name}</td><td>${phone}</td><td>${email}</td>`;
        ContactList.appendChild(row);
    }


})