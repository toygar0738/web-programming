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

    if (no === "") {
        alert("Oda numarası boş olamaz!");
        return;
    }

    const oda = { no, tip }; 
    odalar.push(oda);

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

        let musteri = {
            ad: parseEdilenMusteri.ad + " " + i,
            tel: parseEdilenMusteri.tel
        };

        musteriler.push(musteri);
    }

    console.log(musteriler);
}


function rezervasyonEkle() {

    let ad = document.getElementById("rezMusteri").value;
    let oda = document.getElementById("rezOda").value;
    let tarih = document.getElementById("rezTarih").value;

    if (ad === "" || oda === "") {
        alert("Bilgiler eksik!");
        return;
    }

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