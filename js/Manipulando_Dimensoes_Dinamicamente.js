$(function() {
    

    //pegamos a largura do nosso elemento
    var elWidth = $('.box').width()

    //Não é aconselhavel o uso do .width pois nao calcula o padding do elemento caso tenha
    $('.box').width(900)

    // Já calcula o tamanho com o padding
    $('.box').css('width', '900px')


    // Width/Height = Dimensão calculada total com base no paddin
    // InnerWidth/InnerHeight = Dimensão calculada total INCLUINDO o padding
    // OuterWidth/OuterHeight = Dimensão calculada total INCLUINDO o padding e border

    // Pega largura do elemento
    console.log("Width " + $('.box').width())
    // Pega o total do width contando com o padding
    console.log("InnerWidth " + $('.box').innerWidth())
    // Pega o total contando com a borda
    console.log("OuterWidth " + $('.box').outerWidth())

    //  Mesma coisa com height


    // Pega altura do elemento
    console.log("Height " + $('.box').height())
    // Pega o total do height contando com o padding
    console.log("InnerHeight " + $('.box').innerHeight())
    // Pega o total contando com a borda
    console.log("OuterHeight " + $('.box').outerHeight())
})