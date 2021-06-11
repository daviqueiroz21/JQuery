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

