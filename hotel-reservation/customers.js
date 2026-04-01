let customers = JSON.parse(localStorage.getItem("customers")) || [];
let list = document.getElementById("customersList");
for (let i = 0; i < customers.length; i++) {
    list.innerHTML += "<li>" + customers[i].name + " - " + customers[i].phone + "</li>";
}

//asd