const formDiv = document.querySelector(`#formDiv`)
document.addEventListener(`DOMContentLoaded`, init);

function init() {
    getPetInfo()
}



function getPetInfo() {
    const petInfo = [`parent name`, `puppy's name`, `puppy's breed`, `puppy's gender`, `day of birth`, `month of birth`, `year of birth`];

    formDiv.innerHTML = "";

    const puppyForm = document.createElement(`form`);
        puppyForm.id = `puppyForm`;
    const inputLabel = document.createElement(`h1`);
        inputLabel.id = `puppyInputLabel`;
        inputLabel.textContent = `What is the puppy owner's name?`;
    const puppyFormInput = document.createElement(`input`);
        puppyFormInput.type = `text`;
        puppyFormInput.name = `puppyFormInput`;
        puppyFormInput.id = `puppyFormInput`;
        puppyFormInput.value = "";
        puppyFormInput.placeholder = petInfo[0];
    const nextLine = document.createElement(`br`);
    const nextLine1 = document.createElement(`br`);
    const nextButton = document.createElement(`input`);
        nextButton.type = `submit`;
        nextButton.name = `submit`;
        nextButton.id = `nextBtn`;
        nextButton.value = "Next";
    puppyForm.append(inputLabel, nextLine, puppyFormInput, nextLine1, nextButton);
    formDiv.append(puppyForm);

    puppyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        petInfo[0] = document.querySelector(`#puppyFormInput`).value;

        formDiv.innerHTML = "";

        const puppyForm = document.createElement(`form`);
            puppyForm.id = `puppyForm`;
        const inputLabel = document.createElement(`h1`);
            inputLabel.id = `puppyInputLabel`;
            inputLabel.textContent = `What is the puppy's name?`;
        const puppyFormInput = document.createElement(`input`);
            puppyFormInput.type = `text`;
            puppyFormInput.name = `puppyFormInput`;
            puppyFormInput.id = `puppyFormInput`;
            puppyFormInput.value = "";
            puppyFormInput.placeholder = petInfo[1];
        const nextLine = document.createElement(`br`);
        const nextLine1 = document.createElement(`br`);
        const nextButton = document.createElement(`input`);
            nextButton.type = `submit`;
            nextButton.name = `submit`;
            nextButton.id = `nextBtn`;
            nextButton.value = "Next";
        puppyForm.append(inputLabel, nextLine, puppyFormInput, nextLine1, nextButton);
        formDiv.append(puppyForm);

        puppyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            petInfo[1] = document.querySelector(`#puppyFormInput`).value;

            formDiv.innerHTML = "";

            const puppyForm = document.createElement(`form`);
                puppyForm.id = `puppyForm`;
            const inputLabel = document.createElement(`h1`);
                inputLabel.id = `puppyInputLabel`;
                inputLabel.textContent = `What is the puppy's breed?`;
            const puppyFormInput = document.createElement(`input`);
                puppyFormInput.type = `text`;
                puppyFormInput.name = `puppyFormInput`;
                puppyFormInput.id = `puppyFormInput`;
                puppyFormInput.value = "";
                puppyFormInput.placeholder = petInfo[2];
            const nextLine = document.createElement(`br`);
            const nextLine1 = document.createElement(`br`);
            const nextButton = document.createElement(`input`);
                nextButton.type = `submit`;
                nextButton.name = `submit`;
                nextButton.id = `nextBtn`;
                nextButton.value = "Next";
            puppyForm.append(inputLabel, nextLine, puppyFormInput, nextLine1, nextButton);
            formDiv.append(puppyForm);

            puppyForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                petInfo[2] = document.querySelector(`#puppyFormInput`).value;

                formDiv.innerHTML = "";

                const puppyForm = document.createElement(`form`);
                    puppyForm.id = `puppyForm`;
                const inputLabel = document.createElement(`h1`);
                    inputLabel.id = `puppyInputLabel`;
                    inputLabel.textContent = `What is the puppy's gender?`;
                const puppyFormInput = document.createElement(`input`);
                    puppyFormInput.type = `text`;
                    puppyFormInput.name = `puppyFormInput`;
                    puppyFormInput.id = `puppyFormInput`;
                    puppyFormInput.value = "";
                    puppyFormInput.placeholder = petInfo[3];
                const nextLine = document.createElement(`br`);
                const nextLine1 = document.createElement(`br`);
                const nextButton = document.createElement(`input`);
                    nextButton.type = `submit`;
                    nextButton.name = `submit`;
                    nextButton.id = `nextBtn`;
                    nextButton.value = "Next";
                puppyForm.append(inputLabel, nextLine, puppyFormInput, nextLine1, nextButton);
                formDiv.append(puppyForm);

                puppyForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    
                    petInfo[3] = document.querySelector(`#puppyFormInput`).value;

                    formDiv.innerHTML = "";
                    const inputLabel = document.createElement(`h1`);
                        inputLabel.id = `puppyInputLabel`;
                        inputLabel.textContent = `What is the puppy's date of birth?`;
                    const daySelector = document.createElement(`select`);
                        daySelector.className = `dateSelector`;
                    for (let day = 1; day <= 31; day++) {
                        const option = document.createElement("option");
                        switch(day % 10) {
                            case 1:
                                option.value = String(day).padStart(2, "0") + `st`;
                                option.textContent = String(day).padStart(2, "0") + `st`;
                                break;
                            case 2:
                                option.value = String(day).padStart(2, "0") + `nd`;
                                option.textContent = String(day).padStart(2, "0") + `nd`;
                                break;
                            case 1:
                                option.value = String(day).padStart(2, "0") + `rd`;
                                option.textContent = String(day).padStart(2, "0") + `rd`;
                                break;
                            default:
                                option.value = String(day).padStart(2, "0") + `th`;
                                option.textContent = String(day).padStart(2, "0") + `th`;
                                break;
                        }
                        daySelector.append(option);
                      }
                    const monthsInYear = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
                    const monthSelector = document.createElement(`select`);
                        monthSelector.className = `dateSelector`;
                    monthsInYear.forEach(month => {
                        const option = document.createElement("option");
                            option.value = month;
                            option.textContent = month;
                            monthSelector.append(option);
                    })
                    const yearSelector = document.createElement(`select`);
                    yearSelector.className = `dateSelector`;
                    for (let year = 2023; year >= 1950; year--){
                        const option = document.createElement("option");
                            option.value = String(year);
                            option.textContent = String(year);
                            yearSelector.append(option);
                    }
                    const nextLine = document.createElement(`br`);
                    const nextLine1 = document.createElement(`br`);
                    const nextButton = document.createElement(`input`);
                        nextButton.type = `submit`;
                        nextButton.name = `submit`;
                        nextButton.id = `nextBtn`;
                        nextButton.value = "Next";
                    formDiv.append(inputLabel, nextLine, daySelector, monthSelector, yearSelector, nextLine1, nextButton);
                    nextButton.addEventListener(`click`, (e) => {
                        console.log(nextButton);
                        e.preventDefault()
                        petInfo[4] = document.querySelector(`#daySelector`).value;
                        petInfo[5] = document.querySelector(`#monthSelector`).value;
                        petInfo[6] = document.querySelector(`#yearSelector`).value;
                        fetch("http://localhost:3000/dogs", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/json",
                            },
                            body: JSON.stringify({
                                name: petInfo[1],
                                birthDay: petInfo[4],
                                birthMonth: petInfo[5],
                                birthYear: petInfo[6],
                                breed: petInfo[2],
                                gender: petInfo[3],
                                parent: petInfo[0]
                            }),
                        })
                        .then(r => r.json())
                        .then(dog => {
                            console.log("Here")
                })
            })
        })
    })    
}}}


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



