//scroll code product

function kanan1() {
  var kanan = document.querySelector(".kartu1");
  kanan.scrollBy(350, 0);
}
function kiri1() {
  var kiri = document.querySelector(".kartu1");
  kiri.scrollBy(-350, 0);
}
function kanan2() {
  var kanan = document.querySelector(".kartu2");
  kanan.scrollBy(350, 0);
}
function kiri2() {
  var kiri = document.querySelector(".kartu2");
  kiri.scrollBy(-350, 0);
}

//Total Belanjaan
var harga = 0;
function akhir() {
  var total = (document.getElementsByClassName("totalan")[0].textContent =
    "Rp. " + harga);
}

//fungsi penambahan
function harga1() {
  var check = document.getElementsByClassName("barang1");
  var barang = Number(document.getElementsByClassName("barang1")[0].value);

  if (check[0].checked == true) {
    harga += barang;
    akhir();
  } else if (check[0].checked == false) {
    harga -= barang;
    akhir();
  }
}
function harga2() {
  var check = document.getElementsByClassName("barang1");
  var barang = Number(document.getElementsByClassName("barang1")[1].value);

  if (check[1].checked == true) {
    harga += barang;
    akhir();
  } else if (check[1].checked == false) {
    harga -= barang;
    akhir();
  }
}

function harga3() {
  var check = document.getElementsByClassName("barang1");
  var barang = Number(document.getElementsByClassName("barang1")[2].value);

  if (check[2].checked == true) {
    harga += barang;
    akhir();
  } else if (check[2].checked == false) {
    harga -= barang;
    akhir();
  }
}

function send() {
  var nama = document.getElementById("username").value;
  var rekening = document.getElementById("norek").value;
  var pesan = "Nama: ${nama}/n Nomor rekening: ${rekening}";
  var nomor = "+6281901242626";
  var value = "https://wa.me/" + nomor + "?text=" + nama;
  window.open(value, "_blank").focus();
}
