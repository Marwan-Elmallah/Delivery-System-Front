async function getProducts() {
    let response = await fetch(`https://delivery-system-1h5j.onrender.com/allProducts`)
    let data = await response.json()
    return data
}
let listOfProducts = document.querySelector("#listOfProducts")

handleSearch()
async function handleSearch() {
    listOfProducts.innerHTML = ""
    let Products = await getProducts()
    console.log(Products, 'products');
    var value = document.getElementById('searchValue').value;
    let findProduct = Products.filter((Product) => Product.name.startsWith(value))
    findProduct.map((Product) => listOfProducts.innerHTML += `
        <tr >
            <td>${Product.name}</td>
            <td>${Product.price}</td>
            <td>
                <input type="number" class="form-control text-center w-25 mx-auto" id="${Product.id}-qty" value="0" min="0">
            </td>
            <td>
                <button class="btn btn-primary" onclick="getProductData('${Product.id}','${Product.name}','${Product.price}')">Add</button>
            </td>
        </tr>
`)
    // console.log(findProduct);
}


function getProductData(id = "not found", name = "not found", price = "not found") {

    let qty = document.getElementById(`${id}-qty`).value

    if (qty <= 0) {
        alert("Product Should be more than ZERO")
        return
    }
    let lista = localStorage.getItem("Product ID")
    lista = JSON.parse(lista) || {}
    lista[id] = {
        name,
        qty,
        price
    }
    localStorage.setItem("Product ID", JSON.stringify(lista))
    console.log(lista);
}
