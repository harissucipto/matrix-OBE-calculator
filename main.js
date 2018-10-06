// variabel awal
var cariA = [];
var CariB = [];
var CariC = [];
var konsanta;

var matrixC = document.querySelectorAll('.C');

// tombol
var fire = document.querySelector('#fire');

// ketika tombol di klik
fire.addEventListener('click', function() {
  getNilai();
  CariC = cariJawaban(cariA, cariB, konsanta);
  tulisHasil(matrixC, CariC);
});

// ambil nilai dari inputan
function getNilai() {
  var matrixA = document.querySelectorAll('.A');
  var matrixB = document.querySelectorAll('.B');
  konsanta = document.querySelector('#operasi').value;

  cariA = mapNode(matrixA, convertToFraction);
  cariB = mapNode(matrixB, convertToFraction);
}

function cariJawaban(fracA, fracB, konsanta) {
  var tempArr = fracA.map(object => object.mul(konsanta));
  var results = [];
  for (var i = 0; i < tempArr.length; i++) {
    results.push(tempArr[i].add(fracB[i]));
  }
  return results;
}

// ubah menjadi bilangan pecahan
function convertToFraction(value) {
  return new Fraction(value);
}

function mapNode(array, fn) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    results.push(fn(array[i].value));
  }
  return results;
}

function tulisHasil(node, hasil) {
  for (var i = 0; i < hasil.length; i++) {
    node[i].value = hasil[i].toFraction(true);
  }
}

/////////////////////// generate banyak kolom /////////////////
var generate = document.querySelector('#generate');

generate.addEventListener('click', function() {
  alert('fitur ini belum tersedia');
});
