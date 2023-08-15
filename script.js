const formDiv = document.querySelector(`#formDiv`)
document.addEventListener(`DOMContentLoaded`, init);

function init() {
    getPetInfo()
}






fetch("http://localhost:3000/dogs")
.then((r) => r.json())
.then(data => {
    console.log(data)
    fillOutCert(data)

})


let listIdNames= ["name", "birthDay", "birthMonth", "birthYear", "breed", "gender", "parent"]

function fillOutCert(data) {
    listIdNames.forEach((id) => {
        let element = document.getElementById(`${id}`)
        element.textContent = data[0][`${id}`]
    })
} 




// const PDFDocument = require("pdfkit")
// const fs = require("fs")

// let doc = new PDFDocument

// doc.pipe(fs.createWriteStream("certificate.pdf"))

// doc.image("PuppyBdayCertTemplate.png", 0, 0, {width: 595.28, height: 841.89})

// doc.fontSize(12)
// doc.text(petname, 100, 100)

// doc.fontSize(12)
// doc.text(birthdate1, 200, 100)

// doc.fontSize(12)
// doc.text(birthdate1, 200, 150)

// doc.end();




// whatsupppp

