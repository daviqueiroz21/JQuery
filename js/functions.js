
/*

VAR COM JQUERY

$(function() {
    var el = $('div.box')

    el.css('background-color', 'green')

        function teste() {
            el.click(function() {
                el.css('background-color', 'red')
            })
        }

        teste();

})

*/


/*
$(function() {

    Evento Stop progagação

    $('.box').click(function(e) {
        e.stopPropagation(); 
    })
    
    $('body').click(function() {
        $('.box').css('background-color', 'green')
    })

    var timer;

    $(window).scroll(function() {
        //Evento quando o scroll ocorre
    })

    $(window).resize(function() {
        //Evento de quando redimensionamos a tela.
        console.log("Minha tela está sendo redimencionada")
        
        
        clearTimeout(timer);

       timer = setTimeout(function() {
            location.href= "https://google.com";
        }, 1000)
    })
    
})
*/


/*
$(function() {

// essa ira mudar a cor ao clicar

    $('.artigo1').click(function(){
        $('.artigo2').css('background-color','Blue')
    })


Essa função ira mudar o background ao passar o mouse
 depois chamando outra function ira voltar a cor que 
 escolher 

    $('.artigo1').hover(function(){
        $('.artigo2').css('background-color','red')
    },function(){
        
        $('.artigo2').css('background-color','rgb(65, 59, 59)')
    })


    //ira execultar ao forcar e .blur ao tira o foco

    $('textarea').focus(function() {
        console.log("Estou dentro do textarea")
    }).blur(function() {
        console.log("Estou fora do textarea")
    })

    // ira execultar quando o select for alterado
    function validarformulario(){
        $('select').change(function(){
            console.log("Meu Select foi alterado")
        })
    }

    validarformulario();

})
*/


/*
Função de Tempo

$(function(){
    setTimeout(function() {
        $('.artigo1').css('padding','20px')
    },2000)
    
});

Manipula o CSS pelo jQuery

$(function() {
    $('.artigo1').css('padding','20px')
})
*/


/*

METODOS PARA CHAMA FUNÇÃO NO JQUERY

$(function() {
    alert("Olá Mundo")
})

$(document).ready(function() {
    alert("Olá Mundo")
})


$(window).on('load', function() {
    alert("Aloha")
})

*/