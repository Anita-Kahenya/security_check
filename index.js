document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("#form")
    const input = document.createElement("input")
    input.id = ("id")
    input.type = "hidden"
    form.appendChild(input)

  fetch("http://localhost:3000/tenants")
    .then((res) => res.json())
    .then(function (tenants) {
      // console.log(tenants)
      tenants.map(function (tenant) {
        let houseNum = document.querySelector("#housenumber");
        const houseDisplay = document.createElement("h6");
        // houseDisplay.id = ("number")
        houseNum.appendChild(houseDisplay);

        houseDisplay.innerHTML = tenant.house_name;

        houseDisplay.addEventListener("click", tenantDetails);

        function tenantDetails() {
          const tenantName = document.querySelector("#name");
          const mobileNum = document.querySelector("#mobile");
          const mail = document.querySelector("#mail");
          const idNum = document.querySelector("#idnum");
          const tenantAge = document.querySelector("#age");
          const occupants = document.querySelector("#occupants");
          const visitor = document.querySelector("#visitor");
          

          tenantName.textContent = tenant.name;
          mobileNum.textContent = tenant.mobile_number;
          mail.textContent = tenant.email;
          idNum.textContent = tenant.id_number;
          tenantAge.textContent = tenant.age;
          occupants.textContent = tenant.occupants;
          visitor.textContent = tenant.visitors;
          input.value = tenant.id
        }
      });

      let searchBar = document.querySelector("#search")
      searchBar.addEventListener("keyup", searchHouse)

      function searchHouse() {
        let searchValue = searchBar.value.toUpperCase()
        let item = document.getElementsByTagName("h6")

        for(let i = 0; i<item.length; i++){
            let span = item[i]
            
    
    
            if(span.innerHTML.toUpperCase().indexOf(searchValue)> -1){
                item[i].style.display = ""
            }
            else{
                item[i].style.display = "none"
            }
    }
      }
    });

    const btn = document.getElementById("button")
    btn.addEventListener("click", addVisitor)

    function addVisitor(e){
        e.preventDefault()

        let newVisitors = document.querySelector("#visitor")
        let addInput = document.querySelector("#add").value;
        let id = document.querySelector("#id").value;
        console.log(addInput) 

        newVisitors.innerHTML = addInput

        fetch(`http://localhost:3000/tenants/${id}`,{
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json'
            
          },
          body: JSON.stringify({visitors:newVisitors.textContent})

        })
        .then(res => res.json())
        .then(tenant => visitors.textContent = tenant.visitors)

    }

});

