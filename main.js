var cariA = [];
var CariB = [];
var CariC = [];
var konsanta;


var matrixC = document.querySelectorAll(".C");
var fire = document.querySelector("button");


fire.addEventListener("click", function() {
  getNilai();
  CariC = cariJawaban(cariA, cariB, konsanta);
  tulisHasil(matrixC, CariC);
});


function getNilai() {
  var matrixA = document.querySelectorAll(".A");
  var matrixB = document.querySelectorAll(".B");
  konsanta = document.querySelector("#operasi").value;

  cariA = mapNode(matrixA, convertToFraction);
  cariB = mapNode(matrixB, convertToFraction);;

}


function cariJawaban(fracA, fracB, konsanta) {
  var tempArr = fracA.map((object) => object.mul(konsanta));
  var results = [];
  for (var i = 0; i < tempArr.length; i++) {
    results.push(tempArr[i].add(fracB[i]));
  }
  return results;
}



function convertToFraction(value) {
  return new Fraction(value);
}


function mapNode(array, fn) {
  var results = [];
  for (var i = 0; i < array.length; i++){
    results.push(fn(array[i].value));
  }
  return results;
}

function tulisHasil(node, hasil) {
  for (var i  = 0; i < hasil.length; i++) {
    node[i].value = hasil[i].toFraction(true);
  }
}
