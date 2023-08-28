const baseUrl = 'https://delivery-system-1h5j.onrender.com/';

let costInput = document.getElementById('costInput')
let nameInput = document.getElementById('nameInput')
let priceInput = document.getElementById('priceInput')
let submitButton = document.getElementById('submitButton')

submitButton.onclick = async () => {
    let name = nameInput.value,
        cost = costInput.value,
        price = priceInput.value

    let productData = {
        name,
        cost,
        price,
    }

    let response = await addProduct(productData)

    console.log(response);
}



async function addProduct(productData) {
    let response = await fetch(`${baseUrl}addProduct`, {
        method: 'POST',
        body: JSON.stringify(productData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let data = await response.json()

    return data
}

// getAllproducts()
// async function getAllProducts() {
//     let response = await fetch(`${baseUrl}allProducts`)
//     let data = await response.json()

//     console.log(data);
// }