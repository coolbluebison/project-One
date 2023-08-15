
let dataBase = {
    "petName" : "Doggo",
    "birthday" : "21",
    "birthmonth" : "August",
    "birthyear" : "2022",
    "breed" : "mixed",
    "gender" : "female",
    "parent" : "Adam Smith",
}


console.log("working")


let listIdNames= ["petName", "birthday", "birthmonth", "birthyear", "breed", "gender", "parent"]

function fillOutCert() {
    listIdNames.forEach((id) => {
        let element = document.getElementById(`${id}`)
        element.textContent = dataBase[`${id}`]
    })
} 

fillOutCert()




            
// <div class="image-text" id="petName"></div>
// <div class="image-text" id="birthdate1"></div>
// <div class="image-text" id="birthdate2"></div>
// <div class="image-text" id="birthdate3"></div>
// <div class="image-text" id="breed"></div>
// <div class="image-text" id="gender"></div>
// <div class="image-text" id="parent"></div>








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



