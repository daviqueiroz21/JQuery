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

