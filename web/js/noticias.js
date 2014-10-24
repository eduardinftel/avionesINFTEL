/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function cargarNoticia(titulo, texto, fecha, url) {

    var div = document.createElement('div');
    //img = "img/slide-2.jpg";
    div.className = 'noticia_js';
//<img class="img-responsive img-border img-full" src="'+img+'" alt="">\
    div.innerHTML = '<div class="col-lg-12 text-center">\
                        <h2>' + titulo + '\
                            <br>\
                            <small>' + fecha + '</small>\
                        </h2>\
                        <p>' + texto + '</p>\
                        <a href="' + url + '" class="btn btn-default btn-lg">Read full article</a>\
                        <hr>\
                    </div>';

    document.getElementById("idNoticias").appendChild(div);

}


var arrayNoticias;
var i;
$(document).ready(function () {
    $.getJSON("http://api.nytimes.com/svc/search/v2/articlesearch.json?q=Supermarine+Spitfire&api-key=b1e8bdbc3fa9841be66f9cb3bab690b7%3A4%3A70045411", function (result) {
        arrayNoticias = result.response.docs;
        console.log(result.response.docs);
    });
    for (i in arrayNoticias) {
        cargarNoticia(arrayNoticias[i].headline.main, arrayNoticias[i].lead_paragraph, arrayNoticias[i].pub_date, arrayNoticias[i].web_url);
    }
});