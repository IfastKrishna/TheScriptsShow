log = console.log

let data = [
    { id: 1, fullname: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    { id: 2, fullname: 'Jane Smith', email: 'jane.smith@example.com', phone: '234-567-8901' },
    { id: 3, fullname: 'Alice Johnson', email: 'alice.johnson@example.com', phone: '345-678-9012' },
    { id: 4, fullname: 'Robert Brown', email: 'robert.brown@example.com', phone: '456-789-0123' },
    { id: 5, fullname: 'Emily Davis', email: 'emily.davis@example.com', phone: '567-890-1234' },
    { id: 6, fullname: 'Michael Wilson', email: 'michael.wilson@example.com', phone: '678-901-2345' },
    { id: 7, fullname: 'Sarah Lee', email: 'sarah.lee@example.com', phone: '789-012-3456' },
    { id: 8, fullname: 'David Harris', email: 'david.harris@example.com', phone: '890-123-4567' },
    { id: 9, fullname: 'Laura Clark', email: 'laura.clark@example.com', phone: '901-234-5678' },
    { id: 10, fullname: 'James Lewis', email: 'james.lewis@example.com', phone: '012-345-6789' },
    { id: 11, fullname: 'Olivia Walker', email: 'olivia.walker@example.com', phone: '123-456-7891' },
    { id: 12, fullname: 'Daniel Hall', email: 'daniel.hall@example.com', phone: '234-567-8902' },
    { id: 13, fullname: 'Sophia Allen', email: 'sophia.allen@example.com', phone: '345-678-9013' },
    { id: 14, fullname: 'Matthew Young', email: 'matthew.young@example.com', phone: '456-789-0124' },
    { id: 15, fullname: 'Isabella King', email: 'isaasqsqw1abella.king@example.com', phone: '567-890-1235' },
    { id: 16, fullname: 'Ethan Wright', email: 'ethan.wright@example.com', phone: '678-901-2346' },
    { id: 17, fullname: 'Ava Scott', email: 'ava.scott@example.com', phone: '789-012-3457' },
    { id: 18, fullname: 'Benjamin Adams', email: 'benjamin.adams@example.com', phone: '890-123-4568' },
    { id: 19, fullname: 'Mia Nelson', email: 'mia.nelson@example.com', phone: '901-234-5679' },
    { id: 20, fullname: 'Jackson Carter', email: 'jackson.carter@example.com', phone: '012-345-6780' },
    { id: 21, fullname: 'Charlotte Mitchell', email: 'charlotte.mitchell@example.com', phone: '123-456-7892' },
    { id: 22, fullname: 'Liam Roberts', email: 'liam.roberts@example.com', phone: '234-567-8903' },
    { id: 23, fullname: 'Amelia Hill', email: 'amelia.hill@example.com', phone: '345-678-9014' },
    { id: 24, fullname: 'Noah Gonzalez', email: 'noah.gonzalez@example.com', phone: '456-789-0125' },
    { id: 25, fullname: 'Harper Moore', email: 'harper.moore@example.com', phone: '567-890-1236' },
    { id: 26, fullname: 'Lucas Baker', email: 'lucas.baker@example.com', phone: '678-901-2347' },
    { id: 27, fullname: 'Evelyn Lewis', email: 'evelyn.lewis@example.com', phone: '789-012-3458' },
    { id: 28, fullname: 'Alexander Campbell', email: 'alexander.campbell@example.com', phone: '890-123-4569' },
    { id: 29, fullname: 'Abigail Rodriguez', email: 'abigail.rodriguez@example.com', phone: '901-234-5670' },
    { id: 30, fullname: 'Sebastian Turner', email: 'sebastian.turner@example.com', phone: '012-345-6781' }
];

let currPageEl = document.querySelector("#currPage");
let page = +currPageEl.textContent;
let pageSize = 10;
let totalPage = Math.ceil(data.length / pageSize);

// print Table 

function PrintTable(data=[], page, pageSize) {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML ='';
    const start = pageSize*page-pageSize;
    const end = pageSize*page;
    data.slice(start, end).forEach((value) => {
        const row = document.createElement('tr');
        row.setAttribute('data-id', value.id)
        row.innerHTML = `
        <th scope="row">${value.id}</th>
        <td>${value.fullname}</td>
        <td>${value.email}</td>
        <td>${value.phone}</td>
        <td>
        <button class="btn btn-primary btn-sm edit" onClick="edit(this)">Edit</button>
        <button class="btn btn-danger btn-sm delete" onClick="destroy(this)">Delete</button>
        </td>
        `
        tbody.appendChild(row);
        document.querySelector("#pageCount").textContent = Math.ceil(data.length/pageSize);
    })
}

// initial Table print
PrintTable(data,page, pageSize)


// pagination 

// first page pagination function 
document.querySelector("#first").addEventListener('click', function(e) {
    currPageEl.textContent = 1;
    PrintTable(data, +currPageEl.textContent, pageSize)
})

// last page pagination function 
document.querySelector("#last").addEventListener('click', function(e) {
    currPageEl.textContent = Math.ceil(data.length / pageSize);
    PrintTable(data, +currPageEl.textContent, pageSize)
})

// prev page pagination function 
document.querySelector("#prev").addEventListener('click', function(e) {
    currPageEl.textContent = +currPageEl.textContent == 1 ? 1 : +currPageEl.textContent-1;
    PrintTable(data, +currPageEl.textContent, pageSize)
}) 

// next page pagination function 
document.querySelector("#next").addEventListener('click', function(e) {
    currPageEl.textContent = +currPageEl.textContent === Math.ceil(data.length / pageSize) ? Math.ceil(data.length / pageSize) : +currPageEl.textContent+1;
    PrintTable(data, +currPageEl.textContent, pageSize)
})


// add Form function
const form = document.querySelector('#add-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const elements= e.target.elements;
    const formData = {
        id: data.length+1,
        fullname: elements.name.value,
        email: elements.email.value,
        phone:elements.phone.value,
    } 

    data.push(formData)
    PrintTable(data, +currPageEl.textContent, pageSize)
    e.target.reset();
    
})


// search function
document.querySelector('#global-search').addEventListener('input', function(e) {
    const searchVal = e.target.value.toLowerCase()
    const newData = data.filter((value) => 
        value.fullname.toLowerCase().includes(searchVal) || 
        value.email.toLowerCase().includes(searchVal) || 
        value.phone.toLowerCase().includes(searchVal) ||
        value.id == +searchVal
    )
    PrintTable(newData, 1, pageSize)
})


// delete function
function destroy(curEl) {
   const id = +curEl.parentElement.parentElement.getAttribute('data-id')
   data = data.filter((v) => v.id!==id)
   currPageEl.textContent = 1;
   PrintTable(data, 1, pageSize)
} 

// edit function 
function edit(curEl) {
    const id = +curEl.parentElement.parentElement.getAttribute('data-id')
    const user = data.find((v) => v.id === id);

    // open modal
    const modalEl = document.querySelector('#staticBackdrop2');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();

    // form
    const form = document.querySelector('#edit-form');
    let name =  form.querySelector(`input[name="name"]`)
    let email = form.querySelector(`input[name="email"]`)
    let phone = form.querySelector(`input[name="phone"]`)

    name.value = user.fullname;
    email.value = user.email;
    phone.value = user.phone;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        data = data.map((v) => v.id == id ? {id, fullname:name.value, email:email.value, phone:phone.value } : v);
        PrintTable(data, +currPageEl.textContent, pageSize)
        modal.hide()
    })
    
}


// this keyword

// const obj = {
//     name: 'krishna',
//     last: 'parsad',
//     email: 'krishna@email.com',
//     getName: () => {
//         console.log(this)
//     }


// }

// obj.getName()