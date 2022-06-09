var fraseOculta = new Array();
var errores = 1;
let fraseRan = "";

for (var i = 65; i < 91; i++) {

    if(String.fromCharCode(i) == "N"){
        $('#letras').append('<br>');
    }
    $('#letras').append('<button disabled class="btn btn-default" id="letra'+String.fromCharCode(i)+'">'+String.fromCharCode(i)+'</button>');
};

$( document ).ready(function() {
    $('.btn-default').click((e) => {
        var id =e.target.id.charAt(5);
        var ban = false;

        $('#frase').empty();

        for (var i = 0; i < fraseRan.length; i++) {
            if(fraseRan.charAt(i) == id){
                fraseOculta[i] = id;
                ban = true;
            }
            $('#frase').append(fraseOculta[i]);
        };

        console.log(e.target.id);
        $('.btn:contains('+e.target.id.charAt(5)+')').prop('disabled', true);

        if(!ban){
            errores++;
            $('#imagen').attr('src', 'assets/img/ahorcado/ahorcado'+errores+'.png');
            if(errores == 5){
                $('h2#resultado').text("UPS! Perdiste... :(");
                //alert('Buuuu Perdiste la frase era: '+fraseRan);
                $('.btn').prop('disabled', true);
                $('#restart').prop('disabled', false);
            }
        }
        //Si la letra si esta en la frase entonces checamos si completaste la frase 
        else{
            var ban2 = true;
            for (var i = 0; i < fraseOculta.length; i++) {
                if(fraseOculta[i] == '__ '){
                    ban2 = false;
                    break;
                }
            };
            if(ban2){
                $('h2#resultado').text("YASS! Ganaste!!! :)");
                $('.btn').prop('disabled', true);
                
                $('#restart').prop('disabled', false);
            }
        }
        //Desactivamos la letra que ya se pulso
        $(this).removeClass('btn-default');
        
    });
});


const peliculas =   [
                        "El caballero oscuro",
                        "Buscando a Nemo",
                        "La milla verde",
                        "El club de la lucha",
                        "Los siete samurais",
                        "Escondidos en Brujas",
                        "Malditos bastardos",
                        "Jumanji",
                        "Con la muerte en los talones",
                        "Regreso al futuro",
                        "El efecto mariposa",
                        "Los inmortales",
                        "Harry Potter y el caliz de fuego",
                        "El fuego de la venganza",
                        "Un ciudadano ejemplar",
                        "Uno de los nuestros",
                        "Titanic",
                        "El rey leon",
                        "Infiltrados",
                        "La lista de Schindler",
                        "Star Wars El Imperio contraataca",
                        "Jurassic Park"
                    ];

$('#start').click(() => {
    $('.btn').prop('disabled', false);
    $('#start').prop('disabled', true);
    $('h2#resultado').text("Jugando...");
    cargarFrase();
});

$('#restart').click(() => {
    location.reload();
});

const cargarFrase = () => {
    var random = Math.floor(Math.random()*21);

    fraseRan = (peliculas[random]).toUpperCase();

    for (var i = 0; i < fraseRan.length; i++) {
        if(fraseRan.charAt(i) != ' '){
            fraseOculta[i] = '__ ';
        }else{
            fraseOculta[i] = '<br>';
        }
        $('#frase').append(fraseOculta[i]);
    }
}

$('#back').click(()=>{
    $(location).attr('href','index.html');
});
