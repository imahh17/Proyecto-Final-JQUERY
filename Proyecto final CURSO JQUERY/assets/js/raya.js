var play = true;
var turno = 1;
var cont=0;

	$("table tr td").click(function () {
        if ($(this.element).text() == "" && play) {
			if (turno == 1) {
				$(this).append("X");
				$(this).css('color', "#61892f");
                turno = 2;
				
			}else {
				$(this).append("O");
				$(this).css('color', "#e85a4f");
                turno = 1;
			}
			
            if (checkForWinner() != -1 && checkForWinner() != "") {
				if (checkForWinner() == "X") {
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
                cont++
                console.log(cont);
                if(cont == 9){
                    $('body').append('<div class="wrap"><div class="empate"><span>Empate</span></div><button onclick="location.reload();" id="reload">Volver a jugar</button></div>');
                    $('.empate').css('background-color', 'rgb(175, 71, 175)');
                    $('#reload').css('color','black');
                }
            }
		}
	});

    function checkForWinner() {
		var space1 = $("table tr:nth-child(1) td:nth-child(1)").text();
		var space2 = $("table tr:nth-child(1) td:nth-child(2)").text();
		var space3 = $("table tr:nth-child(1) td:nth-child(3)").text();
		var space4 = $("table tr:nth-child(2) td:nth-child(1)").text();
		var space5 = $("table tr:nth-child(2) td:nth-child(2)").text();
		var space6 = $("table tr:nth-child(2) td:nth-child(3)").text();
		var space7 = $("table tr:nth-child(3) td:nth-child(1)").text();
		var space8 = $("table tr:nth-child(3) td:nth-child(2)").text();
		var space9 = $("table tr:nth-child(3) td:nth-child(3)").text();
		// check rows
		if ((space1 == space2) && (space2 == space3)) {
			return space3;
		} else if ((space4 == space5) && (space5 == space6)) {
			return space6;
		} else if ((space7 == space8) && (space8 == space9)) {
			return space9;
		}
		// check columns
		else if ((space1 == space4) && (space4 == space7)) {
			return space7;
		} else if ((space2 == space5) && (space5 == space8)) {
			return space8;
		} else if ((space3 == space6) && (space6 == space9)) {
			return space9;
		}
		// check diagonals
		else if ((space1 == space5) && (space5 == space9)) {
			return space9;
		} else if ((space3 == space5) && (space5 == space7)) {
			return space7;
		}
		// no winner
		return -1;
	}

    $('#back').click(()=>{
        $(location).attr('href','index.html');
    });