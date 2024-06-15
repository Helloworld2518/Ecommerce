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

function send() {
  var nomor = "+6281901242626";
  var value = "https://wa.me/" + nomor + "?text=" + "hello";
  window.open(value, "_blank").focus();
}
