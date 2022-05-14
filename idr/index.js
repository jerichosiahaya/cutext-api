const express = require('express');
const router = express.Router();

const formatRupiah = (money) => {
    return new Intl.NumberFormat('id-ID',
      { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
    ).format(money);
 }

 const formatPembilang = (nilai) => {
    nilai = Math.abs(nilai);
    var simpanNilaiBagi=0;
    var huruf = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
    var temp="";
 
    if (nilai < 12) {
        temp = huruf[nilai];
    }
    else if (nilai <20) {
        temp = formatPembilang(nilai - 10) + "Belas";
    }
    else if (nilai < 100) {
        simpanNilaiBagi = Math.floor(nilai/10);
        temp = formatPembilang(simpanNilaiBagi)+"Puluh"+ formatPembilang(nilai % 10);
    }
    else if (nilai < 200) {
        temp = "Seratus" + formatPembilang(nilai - 100);
    }
    else if (nilai < 1000) {
        simpanNilaiBagi = Math.floor(nilai/100);
        temp = formatPembilang(simpanNilaiBagi) + "Ratus" + formatPembilang(nilai % 100);
    }
     else if (nilai < 2000) {
        temp = "Seribu" + formatPembilang(nilai - 1000);
    }
    else if (nilai < 1000000) {
        simpanNilaiBagi = Math.floor(nilai/1000);
        temp = formatPembilang(simpanNilaiBagi) + "Ribu" + formatPembilang(nilai % 1000);
    } 
    else if (nilai < 1000000000) {
        simpanNilaiBagi = Math.floor(nilai/1000000);
        temp =formatPembilang(simpanNilaiBagi) + "Juta" + formatPembilang(nilai % 1000000);
    } 
    else if (nilai < 1000000000000) {
        simpanNilaiBagi = Math.floor(nilai/1000000000);
        temp = formatPembilang(simpanNilaiBagi) + "Miliar" + formatPembilang(nilai % 1000000000);
    } 
    else if (nilai < 1000000000000000) {
        simpanNilaiBagi = Math.floor(nilai/1000000000000);
        temp = formatPembilang(nilai/1000000000000) + "Triliun" + formatPembilang(nilai % 1000000000000);
    }
    
    return temp;
}

function insertSpaces(string) {
    string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
    string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    return string;
}

router.get('/:number', (req, res) => {
    let input = req.params.number;
    let number = parseInt(input);
    let outputNumber = formatRupiah(number);
    let temp = formatPembilang(number);
    let outputText = insertSpaces(temp) + " Rupiah";
    var data = {
        "number": outputNumber,
        "text": outputText
    }
    var json = {
        "code": 200,
        "status": "OK",
        "data": data,
        "logtime": new Date()
    }
    res.json(json)
});

module.exports = router;