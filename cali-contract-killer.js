
function populateFields() {
    const companyName = document.querySelector("#company-name")
    const customerName = document.querySelectorAll(".customer-name")
    const customerAddress = document.querySelector("#customer-address")
    const service = document.querySelector("#service")
    const total = document.querySelector("#total")

    companyName.innerText = "[COMPANY NAME]"
    customerName.forEach(name => name.innerText = "[CUSTOMER NAME")
    customerAddress.innerText = "[CUSTOMER ADDRESS]"
    service.innerText = "[Design and develop a web site]"
    total.innerText = "[total]"
}

populateFields()