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

function harga4() {
  var check = document.getElementsByClassName("barang1");
  var barang = Number(document.getElementsByClassName("barang1")[3].value);

  if (check[3].checked == true) {
    harga += barang;
    akhir();
  } else if (check[3].checked == false) {
    harga -= barang;
    akhir();
  }
}

function harga5() {
  var check = document.getElementsByClassName("barang1");
  var barang = Number(document.getElementsByClassName("barang1")[4].value);

  if (check[4].checked == true) {
    harga += barang;
    akhir();
  } else if (check[4].checked == false) {
    harga -= barang;
    akhir();
  }
}

function harga6() {
  var check = document.getElementsByClassName("barang1");
  var barang = Number(document.getElementsByClassName("barang1")[5].value);

  if (check[5].checked == true) {
    harga += barang;
    akhir();
  } else if (check[5].checked == false) {
    harga -= barang;
    akhir();
  }
}

function harga7() {
  var check = document.getElementsByClassName("barang1");
  var barang = Number(document.getElementsByClassName("barang1")[6].value);

  if (check[6].checked == true) {
    harga += barang;
    akhir();
  } else if (check[6].checked == false) {
    harga -= barang;
    akhir();
  }
}

function harga8() {
  var check = document.getElementsByClassName("barang1");
  var barang = Number(document.getElementsByClassName("barang1")[7].value);

  if (check[7].checked == true) {
    harga += barang;
    akhir();
  } else if (check[7].checked == false) {
    harga -= barang;
    akhir();
  }
}

function harga9() {
  var check = document.getElementsByClassName("barang1");
  var barang = Number(document.getElementsByClassName("barang1")[8].value);

  if (check[8].checked == true) {
    harga += barang;
    akhir();
  } else if (check[8].checked == false) {
    harga -= barang;
    akhir();
  }
}

function harga10() {
  var check = document.getElementsByClassName("barang1");
  var barang = Number(document.getElementsByClassName("barang1")[9].value);

  if (check[9].checked == true) {
    harga += barang;
    akhir();
  } else if (check[9].checked == false) {
    harga -= barang;
    akhir();
  }
}

//fungsi ngirim
function send() {
  var nama = document.getElementById("username").value;
  var rekening = document.getElementById("norek").value;
  var pesan = `
  Nama: ${nama}
  Nomor Rekening: ${rekening}
  Total Pembayaran: ${harga}
`;
  var nomor = "+6281901242626";
  var value = "https://wa.me/" + nomor + "?text=" + pesan;
  window.open(value, "_blank").focus();
}

function theme() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
