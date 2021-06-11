$(function() {

// essa ira mudar a cor ao clicar

    $('.artigo1').click(function(){
        $('.artigo2').css('background-color','Blue')
    })


/* Essa função ira mudar o background ao passar o mouse
 depois chamando outra function ira voltar a cor que 
 escolher */

    $('.artigo1').hover(function(){
        $('.artigo2').css('background-color','red')
    },function(){
        
        $('.artigo2').css('background-color','rgb(65, 59, 59)')
    })

    $('textarea').focus(function() {
        console.log("Estou dentro do textarea")
    }).blur(function() {
        console.log("Estou fora do textarea")
    })


    function validarformulario(){
        $('select').change(function(){
            console.log("Meu Select foi alterado")
        })
    }

    validarformulario();

})


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