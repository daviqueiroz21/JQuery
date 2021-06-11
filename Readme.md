# APRENDIZAGEM JQUERY

- Aprendizagem do 0 :tada:

  
  
- Como chama uma função no JQuery:

  ```javascript
  ~~~ JQuery
  $(function() {
      alert("Teste")
  })
  ~~~
  ```
  
  
  
- A função  serve para manipular o css via Jquery, primeiro vem a classe ou id <span>$('.classe ou #id ou seletor')</span> acompanhado da <span>.css('padding','20px')</span>  funcao css com a propriedade e medida.

  

  ```javascript
  ~~~ JQuery
  $(function() {
      $('.artigo1').css('font-size','20px')
  })
  ~~~
  ```

  
  
- A função setTimeout server para setar um tempo para o que estiver dentro dela aconteça, a cada 1000 é equivalente a 1s.

```javascript
~~~ JQuery
setTimeout(function() {
 $('.artigo1').css('padding','20px')
  },2000)
~~~
```



### Eventos :zap:



```javascript
~~~ JQuery
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
        //Executa alguma função quando existe foco no elemento.
    }).blur(function() {
        //Executa uma função quando retiramos o foco. 
    })

//Ao trocar a option do select ira retorna uma mensagem ao console do navegador
    function validarformulario(){
        $('select').change(function(){
            console.log("Meu Select foi alterado")
        })
    }

    //chamando função
    validarformulario();

})

~~~
```



- #### Mais eventos :zap:

  

```javascript
~~~ JQuery
$(function() {

	// Ele cancela a propragação de alguma função relacionada ao elemento
    /*Exemplo: criamos uma função na qual ao clicar no body ele muda a cor 
    do box, logo o box está dentro do body, criando um conflito no qual ao 
    clicar no box ira ativar a função é ai que vem a função stopPropagation(); */
    
	// Ela cancela a propragação de alguma função relacionada ao elemento
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
        
        // Limpa o tempo da variavel no parametro
        clearTimeout(timer);

       timer = setTimeout(function() {
            location.href= "https://google.com";
        }, 1000)
    })
    

})
~~~
```

#### Manipulando dimensões

- Pegando e setando Width e Height via JQuery

  ​	<a href="/js/Manipulando_Dimensoes_Dinamicamente.js">Manipulando...</a>
