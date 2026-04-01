let rooms = [];
let customers = [];
let reservations = [];



class Room {
  constructor(roomNo, roomType) {
    this.roomNo = roomNo;
    this.roomType = roomType;
  }
}

class Customer {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}

class Reservation {
  constructor(name, room, date) {
    this.name = name;
    this.room = room;
    this.date = date;
  }
}

function addRoom() {

    let no = document.getElementById("roomNo").value;
    let type = document.getElementById("roomType").value;
    let list = document.getElementById("roomList")

    if (no === "") {
        alert("Oda numarası boş olamaz!");
        return;
    }

    const room = new Room(no, type);
    rooms.push(room);
    localStorage.setItem("rooms", JSON.stringify(rooms));

    list.innerHTML += "<li>" + no + " - " + type + "</li>";

    console.log(rooms);
}


function addCustomer() {

    let name = document.getElementById("customerName").value;
    let phone = document.getElementById("customerPhone").value;
    let list = document.getElementById("customerList");

    if (name === "") {
        alert("Ad boş olamaz!");
        return;
    }

    const customerJSON = JSON.stringify({ name, phone });
    const parseEdilenCustomer = JSON.parse(customerJSON);

    for (let i = 1; i <= 2; i++) {

        let customer = new Customer(
            parseEdilenCustomer.name + " " + i,
            parseEdilenCustomer.phone
        );

        customers.push(customer);





        list.innerHTML += "<li>" + customer.name + " - " + customer.phone + "</li>";
    }



    
    console.log(customers);
}


function addReservation() {

    let name = document.getElementById("resCustomer").value;
    let room = document.getElementById("resRoom").value;
    let date = document.getElementById("resDate").value;
    let list = document.getElementById("resList");

    if (name === "" || room === "" || date === "") {
        alert("Bilgiler eksik!");
        return;
    }

    for (let i = 0; i < reservations.length; i++) {
        if (reservations[i].room === room) {
            alert("Bu oda zaten rezerve edilmiş!");
            return;
        }
    }

    const reservation = new Reservation(name, room, date);

    waitReservation().then((message) => {

        reservations = [...reservations, reservation];

        list.innerHTML += "<li>" + name + " - Oda " + room + " - " + date + "</li>";


        console.log("Müşteri:", name);
        console.log("Oda:", room);
        console.log("Tarih:", date);

        alert(message);
    });
}


function waitReservation() {

    return new Promise ((resolve) => {

        setTimeout(() => {
            resolve("Rezervasyon oluşturuldu");
        }, 3000);

    });
}

//asd