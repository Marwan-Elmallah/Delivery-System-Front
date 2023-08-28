const baseUrl = 'https://delivery-system-1h5j.onrender.com/';

let mobile1Input = document.getElementById('mobile1Input')
let nameInput = document.getElementById('nameInput')
let mobile2Input = document.getElementById('mobile2Input')
let addressInput = document.getElementById('addressInput')
let submitButton = document.getElementById('submitButton')

submitButton.onclick = async () => {
    let name = nameInput.value,
        mobile1 = mobile1Input.value,
        mobile2 = mobile2Input.value,
        address = addressInput.value

    let CSTData = {
        name,
        mobile1,
        mobile2,
        address
    }

    let response = await addCST(CSTData)

    console.log(response);
}



async function addCST(CSTData) {
    let response = await fetch(`${baseUrl}addCoustmer`, {
        method: 'POST',
        body: JSON.stringify(CSTData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let data = await response.json()

    return data
}

// getAllCSTs()
// async function getAllCSTs() {
//     let response = await fetch(`${baseUrl}allCSTs`)
//     let data = await response.json()

//     console.log(data);
// }