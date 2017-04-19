var cariA = [ ];
var CariB = [ ];
var CariC = [ ];
var konsanta;

var matrixC = document.querySelectorAll( ".C" );
var fire = document.querySelector( "#fire" );

fire.addEventListener( "click", function ( ) {
	getNilai( );
	CariC = cariJawaban( cariA, cariB, konsanta );
	tulisHasil( matrixC, CariC );
});

function getNilai( ) {
	var matrixA = isiArray( ".A" );
	var matrixB = isiArray( ".B" );
	konsanta = document
		.querySelector( "#operasi" )
		.value || 1;
	cariA = mapNode( matrixA, convertToFraction );
	cariB = mapNode( matrixB, convertToFraction );;

}

//ambil nama class trus ambil isi .value tiap itemnya, keluarkan dalam bentuk arr
//kalo kosong biarkan jadi 0
//entah kenapa pake arr.map tak bisa
function isiArray( kelas ) {
	let arr = document.querySelectorAll( kelas );
	let newArr = [ ];

	for ( var x = 0; x < arr.length; x++ ) {
		if ( arr[x]['value' ] == "") {
			newArr[x] = 0
		} else {
			newArr[x] = arr[x]['value' ];
		}
	}
	return newArr;
}

function cariJawaban( fracA, fracB, konsanta ) {
	var tempArr = fracA.map(( object ) => object.mul( konsanta ));
	var results = [ ];
	for ( var i = 0; i < tempArr.length; i++ ) {
		results.push(tempArr[i].add(fracB[i]));
	}
	return results;
}

function convertToFraction( value ) {
	return new Fraction( value );
}

function mapNode( array, fn ) {
	var results = [ ];
	for ( var i = 0; i < array.length; i++ ) {
		results.push(fn(array[i]));
	}
	return results;
}

function tulisHasil( node, hasil ) {
	for ( var i = 0; i < hasil.length; i++ ) {
		node[i].value = hasil[i].toFraction( true );
	}
}

/////////////////////// generate banyak kolom /////////////////
// var banyakKolom = parseInt(document.querySelector("#kolom").value) + 1;
var generate = document.querySelector( "#generate" );
//
// var baseA = document.querySelector("#baseA");
// var baseB = document.querySelector("#baseB");
// var baseC = document.querySelector("#baseC");
//
// var inputA = document.createElement("td");
// inputA.innerHTML = '<td><input class="A" type="text" value="0"></td>';
//
// var inputB = document.createElement("td");
// inputB.innerHTML = '<td><input class="B" type="text" value="0"></td>';
//
// var inputC = document.createElement("td");
// inputC.innerHTML = '<td><input class="C" type="text" value="0"></td>';
//
//
//
generate.addEventListener( "click", function ( ) {
	alert( "fitur ini belum tersedia" );
	//
	//   if (baseA.length < banyakKolom) {
	//     for (var i = matrixC.length; i <= banyakKolom; i++) {
	//       baseA.appendChild(inputA);
	//       baseB.appendChild(inputB);
	//       baseC.appendChild(inputC);
	//     }
	//   } else {
	//
	//   }
	//
});
