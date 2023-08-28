
async function getCoutmers() {
    let response = await fetch(`http://localhost:7000/allCoustmers`)
    let data = await response.json()
    return data
}


let listOfCSTs = document.querySelector("#listOfCSTs")


const logMsg = (ID, name) => {

    localStorage.setItem("CST ID", JSON.stringify({ id: ID, name }))
    alert("You'll move to Select Products Now :D")
    window.location = "selectProduct.html"
}
handleSearch()
async function handleSearch() {
    listOfCSTs.innerHTML = ""
    let CSTs = await getCoutmers()
    var value = document.getElementById('searchValue').value;
    let findCST = CSTs.filter((cst) => cst.mobile1.startsWith(value))
    findCST.map((cst) => listOfCSTs.innerHTML += `
        <tr id=${cst.id} onClick='logMsg("${cst.id}","${cst.name}")'>
            <td>${cst.name}</td>
            <td>${cst.mobile1}</td>
            <td>${cst.mobile2}</td>
            <td>${cst.address}</td>
        </tr>
`)
    console.log(findCST);
}