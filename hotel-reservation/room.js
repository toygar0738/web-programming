let rooms = JSON.parse(localStorage.getItem("rooms"))  || [];
let list = document.getElementById("roomList");
for (let i = 0; i < rooms.length; i++) {
    list.innerHTML += "<li>" + rooms [i]. roomNo + " - " + rooms[i].roomType + "</li>";
    
}

