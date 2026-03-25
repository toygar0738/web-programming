let dizi = [];

class ogrenci {
    constructor (ad, numara){
        this.ad = ad;
        this.numara = numara;
    }
}

function ogrenciEkle(){
    let ad = document.getElementById("ad").value;
    let numara = document.getElementById("numara").value;

    if (ad === ""  ||  numara === ""){
        alert("Boş bırakma");
        return;
    }
    const veri = JSON.stringify({ad , numara})
    const parseVeri = JSON.parse(veri);

    const ogrenci = new Ogrenci(parseVeri.ad, parseVeri.numara);
    dizi.push(ogrenci);


}