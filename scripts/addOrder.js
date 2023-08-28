let productsList = document.querySelector("#products")
let CSTname = document.querySelector("#CSTname")
let productsID = JSON.parse(localStorage.getItem("Product ID"))
let CSTid = JSON.parse(localStorage.getItem("CST ID"))
let shippingCost = document.querySelector("#shippingCost")
let counter = {}
let products = {}
let OrderData;
const generateProducts = async () => {
    let response = await fetch("http://localhost:7000/allProducts")
    let data = await response.json()
    console.log(data)
}



const displayProducts = () => {
    productsList.innerHTML = ""
    for (let key in productsID) {
        counter[`${key}`] = 0
        productsList.innerHTML += (
            `
                <li class="list-group-item d-flex justify-content-between align-items-center id="${key}">
                    ${productsID[key]["name"]}
                    <span>${productsID[key]["qty"]}</span>
                </li>
        `)
    }
}


const displayCSTName = () => {
    CSTname.innerHTML = `
    <input type="text" class="form-control" placeholder="${CSTid.name}" disabled>
    
    `
}
displayCSTName()
displayProducts()

const createOrder = () => {

    OrderData = {
        CST: CSTid.id,
        products: {
            ...productsID
        },
        shipping: shippingCost.value
    }
    localStorage.clear()
    return addOrder(OrderData)
}

const addOrder = async (order) => {
    let response = await fetch("http://localhost:7000/addOrder", {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let data = await response.json()
    return data
}