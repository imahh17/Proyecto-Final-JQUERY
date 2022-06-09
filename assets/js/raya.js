var play = true;
var turno = 1;
var cont=0;

	$("table tr td").click(function () {
        if ($(this).text() == "" && play) {
			if (turno == 1) {
				$(this).append("X");
				$(this).css('color', "#61892f");
                turno = 2;
				
			}else {
				$(this).append("O");
				$(this).css('color', "#e85a4f");
                turno = 1;
			}
			
			cont++;
			
			if(cont >= 3){
				let ganador = checkForWinner();
				if (ganador != -1 && ganador != "") {
					if (ganador == "X") {
						$('body').append('<div class="wrap"><div class="winner"><span>Ganador </span>X</div><button onclick="location.reload();" id="reload">Volver a jugar</button></div>');
						$('.winner').css('background-color', '#61892f');
						$('#reload').css('color','#61892f');
					} else {
						$('body').append('<div class="wrap"><div class="winner"><span>Ganador </span>O</div><button onclick="location.reload();" id="reload">Volver a jugar</button></div>');
						$('.winner').css('background-color', '#e85a4f');
						$('#reload').css('color','#e85a4f');
					}
					play = false;
				}else{
					
					if(cont == 9){
						$('body').append('<div class="wrap"><div class="empate"><span>Empate</span></div><button onclick="location.reload();" id="reload">Volver a jugar</button></div>');
						$('.empate').css('background-color', 'rgb(175, 71, 175)');
						$('#reload').css('color','black');
					}
				}
				
			}
		}
	});

    let = checkForWinner = () => {
		var space1 = $("table tr:nth-child(1) td:nth-child(1)").text();
		var space2 = $("table tr:nth-child(1) td:nth-child(2)").text();
		var space3 = $("table tr:nth-child(1) td:nth-child(3)").text();
		var space4 = $("table tr:nth-child(2) td:nth-child(1)").text();
		var space5 = $("table tr:nth-child(2) td:nth-child(2)").text();
		var space6 = $("table tr:nth-child(2) td:nth-child(3)").text();
		var space7 = $("table tr:nth-child(3) td:nth-child(1)").text();
		var space8 = $("table tr:nth-child(3) td:nth-child(2)").text();
		var space9 = $("table tr:nth-child(3) td:nth-child(3)").text();

		console.log((space3 == "O") && (space5 == "O") && (space7 == "O"));

		//COMPROBAR FILAS
		if ((space1 == "X") && (space2 == "X") && (space3 == "X") || (space1 == "O") && (space2 == "O") && (space3 == "O")) {
			return space1; 
		} else if ((space4 == "X") && (space5 == "X") && (space6 == "X") || (space4 == "O") && (space5 == "O") && (space6 == "O")){
			return space4;
		} else if ((space7 == "X") && (space8 == "X") && (space9 == "X") || (space7 == "O") && (space8 == "O") && (space9 == "O")) {
			return space7;
		}

		//COMPROBAR COLUMNAS
		if ((space1 == "X") && (space4 == "X") && (space7 == "X") || (space1 == "O") && (space4 == "O") && (space7 == "O")) {
			return space1; 
		} else if ((space2 == "X") && (space5 == "X") && (space8 == "X") || (space2 == "O") && (space5 == "O") && (space8 == "O")){
			return space2;
		} else if ((space3 == "X") && (space6 == "X") && (space9 == "X") || (space3 == "O") && (space6 == "O") && (space9 == "O")) {
			return space3;
		}

		//COMPROBAR DIAGONALES
		if ((space1 == "X") && (space5 == "X") && (space9 == "X") || (space1 == "O") && (space5 == "O") && (space9 == "O")) {
			return space1; 
		} else if ((space3  == "X") && (space5 == "X") && (space7 == "X") || (space3 == "O") && (space5 == "O") && (space7 == "O")){
			return space3;
		}

		//NO GANADOR
		return -1;
	}

    $('#back').click(()=>{
        $(location).attr('href','index.html');
    });