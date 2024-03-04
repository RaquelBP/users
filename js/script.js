const listaUsuarios = document.getElementById("listaUsuarios")

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (!response.ok) {
            throw new Error("La solicitud no fue exitosa")
        }
        return response.json()
    })
    .then((data) => {
        //Ejecuta la función infoAPI que activa todo el funcionamiento
        infoAPI(data)
    })
    
    .catch((error) => {
        listaUsuarios.innerText = "Error: No se pudo obtener la información"
    })

//Función saca los parámetros de la API que necesitamos de cada usuario
function infoAPI(data){
    //Saca la información que necesitamos por cada usuario con el bucle for
    for (const i in data) {
        
        //Destructuring. Separa los parámetros necesarios en variables
        const {name, username, phone, email, company, address} = data[i]
        const companyName = company.name
        const addressName = [address.street, address.suite, address.city]
        const addressString = addressName.join(", ")
        //Añade el resultado de la función randomAge a la variable age
        const age = randomAge()
        //Añade el resultado de la función addImage a la variable img
        const img = addImage(i)
        //Añade todas las variables como parámetros para la función addToHTML
        addToHTML(i, name, age, username, email, phone, img, companyName, addressString)
    }
}

//Función que saca un número random entre 18 y 99. Esa será la edad
function randomAge(){
    const min = 18
    const max = 99

    const ageNumber = Math.random() * (max-min) + min
    const age = Math.floor(ageNumber)
    return age
}

//Función que crea la ruta de cada imagen de cada usuario
function addImage(i){
    i++
    const img = document.createElement("img")
    img.src = `./assets/img/${i}.jpeg`
    return img
}

//Función que coloca todo el HTML
function addToHTML(i, name, age, username, email, phone, img, companyName, addressString){

    const ul = document.createElement("ul")
    ul.setAttribute("class", "usuario")
    listaUsuarios.appendChild(ul)

    const pInfoPersonal = document.createElement("div")
    pInfoPersonal.setAttribute("class", "Info_Personal")
    ul.appendChild(pInfoPersonal)

    const pInfoPersonalTexto = document.createElement("div")
    pInfoPersonalTexto.setAttribute("class", "Info_Personal_Texto")
    pInfoPersonal.appendChild(pInfoPersonalTexto)

    const pInfoCompany = document.createElement("div")
    pInfoCompany.setAttribute("class", "Info_Company")
    ul.appendChild(pInfoCompany)
    
    


    const pName = document.createElement("li")
    pName.innerText = name
    const pNameTitulo = document.createElement("span")
    pNameTitulo.innerText= "Nombre: "
    pName.prepend(pNameTitulo)
    pInfoPersonalTexto.appendChild(pName)

    const pAge = document.createElement("li")
    pAge.innerText = age
    const pAgeTitulo = document.createElement("span")
    pAgeTitulo.innerText= "Edad: "
    pAge.prepend(pAgeTitulo)
    pInfoPersonalTexto.appendChild(pAge)

    const pUsername = document.createElement("li")
    pUsername.innerText = username
    const pUsernameTitulo = document.createElement("span")
    pUsernameTitulo.innerText= "Usuario: "
    pUsername.prepend(pUsernameTitulo)
    pInfoPersonalTexto.appendChild(pUsername)

    const pPhone = document.createElement("li")
    pPhone.innerText = phone
    const pPhoneTitulo = document.createElement("span")
    pPhoneTitulo.innerText= "Teléfono: "
    pPhone.prepend(pPhoneTitulo)
    pInfoPersonalTexto.appendChild(pPhone)

    const pEmail = document.createElement("li")
    pEmail.innerText = email
    const pEmailTitulo = document.createElement("span")
    pEmailTitulo.innerText= "Email: "
    pEmail.prepend(pEmailTitulo)
    pInfoPersonalTexto.appendChild(pEmail)

    pInfoPersonal.appendChild(img)



    const pCompany = document.createElement("li")
    pCompany.innerText = companyName
    const pCompanyTitulo = document.createElement("span")
    pCompanyTitulo.innerText= "Compañía: "
    pCompany.prepend(pCompanyTitulo)
    pInfoCompany.appendChild(pCompany)

    const pAddress = document.createElement("li")
    pAddress.innerText = addressString
    const pAddressTitulo = document.createElement("span")
    pAddressTitulo.innerText= "Dirección: "
    pAddress.prepend(pAddressTitulo)
    pInfoCompany.appendChild(pAddress)
}