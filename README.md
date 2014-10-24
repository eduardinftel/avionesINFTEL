trabajo1
========

Trabajo 1 INFTEL

========

Master INFTEL proyect

var arrayNoticias;
var i;
$(document).ready(function(){
    $.getJSON("http://api.nytimes.com/svc/search/v2/articlesearch.json?q=Supermarine+Spitfire&api-key=b1e8bdbc3fa9841be66f9cb3bab690b7%3A4%3A70045411",function(result){
        arrayNoticias=result.response.docs;
        console.log(result.response.docs);
      });
      for (i in arrayNoticias){
      cargarNoticia(arrayNoticias[i].headline.main,arrayNoticias[i].lead_paragraph,arrayNoticias[i].pub_date,arrayNoticias[i].web_url);
      }
});
