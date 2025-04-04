function populateFields() {
    const companyName = document.querySelectorAll(".company-name")
    const customerName = document.querySelectorAll(".customer-name")
    const customerAddress = document.querySelector("#customer-address")
    const service = document.querySelector("#service")
    const total = document.querySelector("#total")
    const paymentDays = document.querySelector("#payment-days")
    const percentage = document.querySelector("#percentage")
    const companySignature = document.querySelector("#company-signature")
    const companySignDate = document.querySelector("#company-sign-date")
    const customerSignature = document.querySelector("#customer-signature")
    const customerSignDate = document.querySelector("#customer-sign-date")

    companyName.forEach(name => name.innerText = "[COMPANY NAME]")
    customerName.forEach(name => name.innerText = "[CUSTOMER NAME]")
    customerAddress.innerText = "[CUSTOMER ADDRESS]"
    service.innerText = "[Design and develop a web site]"
    total.innerText = "[total]"
    paymentDays.innerText = "[number]"
    percentage.innerText = "[percentage]"
    companySignature.innerText = "COMPANY SIGNATURE HERE"
    companySignDate.innerText = "00/00/0000"
    customerSignature.innerText = "CUSTOMER SIGNATURE HERE"
    customerSignDate.innerText = "00/00/0000"
}

populateFields()