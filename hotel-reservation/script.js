let odalar = [];
let musteriler = [];
let rezervasyonlar = [];



class Oda {
  constructor(odaNo, odaTip) {
    this.odaNo = odaNo;
    this.odaTip = odaTip;
  }
}

class Musteri {
  constructor(ad, tel) {
    this.ad = ad;
    this.tel = tel;
  }
}

class Rezervasyon {
  constructor(ad, oda, tarih) {
    this.ad = ad;
    this.oda = oda;
    this.tarih = tarih;
  }
}

function odaEkle() {

    let no = document.getElementById("odaNo").value;
    let tip = document.getElementById("odaTip").value;
    let liste = document.getElementById("odaListe");


    if (no === "") {
        alert("Oda numarası boş olamaz!");
        return;
    }

    const oda = new Oda( no, tip ); 
    odalar.push(oda);

     liste.innerHTML += "<li>" + no +  " - " + tip + "</li>";
     
    console.log(odalar);
}


function musteriEkle() {

    let ad = document.getElementById("musteriAd").value;
    let tel = document.getElementById("musteriTel").value;

    if (ad === "") {
        alert("Ad boş olamaz!");
        return;
    }

    
    const musteriJSON = JSON.stringify({ ad, tel });
    const parseEdilenMusteri = JSON.parse(musteriJSON);

   
    for (let i = 1; i <= 2; i++) {

        let musteri = new Musteri(
            ad: parseEdilenMusteri.ad + " " + i,
            tel: parseEdilenMusteri.tel
        );

        musteriler.push(musteri);
        let liste = document.getElementById("musteriListe");
        liste.innerHTML += "<li>" + parseEdilenMusteri.ad + " - " + parseEdilenMusteri.tel + "</li>";

    }

    console.log(musteriler);
}


function rezervasyonEkle() {

    let ad = document.getElementById("rezMusteri").value;
    let oda = document.getElementById("rezOda").value;
    let tarih = document.getElementById("rezTarih").value;
    let liste = document.getElementById("rezListe");

    

    if (ad === "" || oda === "" || tarih ==="") {
        alert("Bilgiler eksik!");
        return;
    }

    for (let i = 0; i < rezervasyonlar.length; i++) {
        if (rezervasyonlar[i].oda === oda) {
            alert("Bu oda zaten rezerve edilmiş!");
            return;
        }
    }

    const rezervasyonBekle().then((mesaj))



    liste.innerHTML += "<li>" + ad + " - Oda " + oda + " - " + tarih + "</li>";
    const rezervasyon = { ad, oda, tarih };

   
    rezervasyonBekle().then((mesaj) => {

        rezervasyonlar = [...rezervasyonlar, rezervasyon];

        
        const { ad, oda, tarih } = rezervasyon;

        console.log("Müşteri:", ad);
        console.log("Oda:", oda);
        console.log("Tarih:", tarih);

        alert(mesaj);
    });
}


function rezervasyonBekle() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Rezervasyon oluşturuldu");
        }, 3000);

    });
}

