var contador=0;
var cont_fallos=0;
var cont_win=0;
var primer_div;
var secundo_div;
var img1;
var img2;
var finalizar=true;
var segundos=0;
var minutos=0;
var horas=0;

$(document).ready(cargar_cartas);

function cargar_cartas(){
	var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var copia = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	
	//ESTO DESORDENA LOS ARRAYS 20 VECES
	for(var i=0; i<20; i++){
		nums.sort(function() {return Math.random() - 0.1});
		copia.sort(function() {return Math.random() - 0.1});
	}
	
	//ASIGNAMOS CADA NUM DE ARRAY QUE CORRESPONDE A CADA IMAGEN
	//DOS VECES PARA QUE CADA CARTA TENGA UNA REPETIDA
	for(var i=0; i<10; i++){
		$('#contenedor').append('<div class="carta"><span class="original"></span><div class="front"><img src="img/dorso.png"/></div><div class="back"><img class="'+nums[i]+'" src="img/'+nums[i]+'.png"/></div></div>');
		
		$('#contenedor').append('<div class="carta"><span class="copia"></span><div class="front"><img src="img/dorso.png"/></div><div class="back"><img class="'+copia[i]+'" src="img/'+copia[i]+'.png"/></div></div>');
	}
	
	girar();
	
}

function girar(){
	
	//PARA QUE SE GIREN MEDIANTE JS: MANUAL
	$(".carta").flip({
		trigger: 'manual'
	});
	
	
	$('.btn').one('click', function(){
		reloj();
		$(".carta").click(comprobar);
		$("#empezar").removeClass( "btn" ).addClass( "reload" );
		$("#empezar").html( "Reiniciar" );
		$("a").click(function(){
			location.reload();
		});
	});
	
	
	
}

function comprobar(){
	
	//Si finalizar es true -> Para que no me deje clickar 3 cartas
	if(finalizar){
		//Contador para saber cual es la carta 1 y la carta 2
		//Empieza en 0, al hacer primer click pasa a 1, al hacer segundo click pasa a 2 y se reinicia a 0
		contador++;
		
		//Al clickar la gira automaticamente
		$(this).flip(true);

		//alert('Contador: '+contador);
		//alert('Tag: '+$(this).prop("tagName"));
		//alert('Class div: '+$(this).attr("class"));
		
		if(contador==1){ //Si la carta es la primera clickada
			//OBJETO CARTA 1
			primer_div=$(this);
			
			//CLASE NUM DE CARTA 1
			img1=$(this).find('.back img').attr("class");
			
			//DESACTIVAMOS QUE SE LE PUEDA HACER CLICK DE NUEVO
			primer_div.off("click");
			
		}else if(contador==2){ //Si la carta es la segunda clickada
			//OBJETO CARTA 2
			segundo_div=$(this);
			
			//CLASE NUM DE CARTA 2
			img2=$(this).find('.back img').attr("class");
			
			//DESACTIVAMOS QUE SE LE PUEDA HACER CLICK DE NUEVO
			segundo_div.off("click");
			
			//FINALIZAR PASA A SER FALSE, no se puede entrar más en comprobar hasta que se giren las dos primeras cartas
			finalizar=false;
			
			// alert('Class img1: '+img1);
			//alert('Class img2: '+img2);
			
			if(img1==img2){ //SI LAS 2 CARTAS SON IGUALES
				//Contador para saber cuando has ganado
				cont_win++;
				
				//Finalizar pasa a ser true, se puede volver a usar la funcion
				finalizar=true;
				
				
				if(cont_win==10){ //Si el contador de ganar llega a 10 -> GANASTE
					setTimeout(function(){
						hasGanado()
					}, 900);
				}
				
			}else if(img1!=img2){ //SI LAS 2 CARTAS SON DIFERENTES
				//Tiempo para mostrar las 2 cartas levantadas antes de girarlas
				setTimeout(function(){
					primer_div.flip(false);
					segundo_div.flip(false);
					finalizar=true;
				}, 900);
				
				//Activamos el click de nuevo para que se puedan volver a pulsar una vez giradas
				primer_div.on('click', comprobar);
				segundo_div.on('click', comprobar);
				
				//Sumamos el contador de fallos
				cont_fallos++;
				$('#fallos').html('FALLOS: '+cont_fallos);
			}
			
			//Reiniciamos el contador de cartas a 0
			contador=0;
		}
	}	
	
}

function reloj(){
	
	if(segundos==60){
		minutos++;
		segundos=0;
		if(minutos==60){
			horas++;
			minutos=0;
		}
	}
	
	var us=segundos%10;
	var ds=Math.floor(segundos/10);
	
	var um=minutos%10;
	var dm=Math.floor(minutos/10);
	
	var uh=horas%10;
	var dh=Math.floor(horas/10);
	
	$("#dh").html(dh);
	$("#uh").html(uh);
	
	$("#sep1").html(":");
	
	$("#dm").html(dm);
	$("#um").html(um);
	
	$("#sep2").html(":");
	
	$("#ds").html(ds);
	$("#us").html(us);
	
	if(cont_win!=10){
		segundos++;
		setTimeout(function(){reloj();},1000);
	}
}


function hasGanado(){
	$('#titulo').html('WINNER!!');
	$('body').append("<div id='fin'></div>");
	$('#control').addClass('posicion');
	$('#contenedor').addClass('posicion');
}
