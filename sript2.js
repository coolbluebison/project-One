
let petName = "Doggo"
let birthdate1 = "21"
let birthdate2 = "August"
let birthdate3 = "2022"
let breed = "mixed"
let gender = "Female"
let parent = "Juana Baranov"

console.log("working")


let picDiv = document.querySelector("#divTwo")

let puppyCert = document.createElement("img")
puppyCert.src = "PuppyBdayCertTemplate.png"

picDiv.appendChild(puppyCert)




// <div class="image-container">
//   <img src="path_to_your_image.jpg" alt="Description of Image">
//   <div class="image-text">Your Text Here</div>
// </div>










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



