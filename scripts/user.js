const baseUrl = 'https://delivery-system-1h5j.onrender.com';

let emailInput = document.getElementById('emailInput')
let nameInput = document.getElementById('nameInput')
let passwordInput = document.getElementById('passwordInput')
let submitButton = document.getElementById('submitButton')

submitButton.onclick = async () => {
    let name = nameInput.value,
        email = emailInput.value,
        password = passwordInput.value

    let userData = {
        username: name,
        email,
        password
    }

    let response = await addUser(userData)

    // console.log(response);
}



async function addUser(userData) {
    let response = await fetch(`${baseUrl}/addUser`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let data = await response.json()
    return data
}

// getAllUsers()
async function getAllUsers() {
    let response = await fetch(`${baseUrl}allUsers`)
    let data = await response.json()

    // console.log(data);
}