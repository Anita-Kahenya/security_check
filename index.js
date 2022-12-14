
// const
// const input = document.createElement("input")
// input.id = "id"
// input.type = "hidden"

// const searchBar = document.querySelector("#search")
// searchBar.addEventListener("input" searchButton)

// function searchButton(e){
//     e.preventDefault()
//     const value = e.target.value
//     console.log(value)
// }

fetch("http://localhost:3000/tenants")
.then(res => res.json())
.then(function(tenants){
    console.log(tenants)
    tenants.map(function(tenant){
        let houseNum = document.querySelector("#housenumber")
        const houseDisplay = document.createElement("h6")
        // houseDisplay.id = ("number")
        houseNum.appendChild(houseDisplay)
    
        houseDisplay.innerHTML = tenant.house_name

        houseDisplay.addEventListener("click", tenantDetails)

        function tenantDetails() {
            const tenantName = document.querySelector("#name")
            const mobileNum = document.querySelector("#mobile")
            const idNum = document.querySelector("#idnum")
            const tenantAge = document.querySelector("#age")
            const occupants = document.querySelector("#occupants")

            tenantName.textContent = tenant.name
            mobileNum.textContent = tenant.mobile_number
            idNum.textContent = tenant.id_number
            tenantAge.textContent = tenant.age
            occupants.textContent = tenant.occupants



        }

    
    })
}
)