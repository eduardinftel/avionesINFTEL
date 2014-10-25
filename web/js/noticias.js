/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function cargarNoticia(titulo, texto, fecha, url) {
    fecha = fecha.substring(0, fecha.length - 10);
    if(texto===null){
        texto="News item only available for NY Times subscribers";
    }
        $("#idNoticias").append('<div class="col-lg-12 text-center">\
                        <h2>' + titulo + '\
                            <br>\
                            <small>' + fecha + '</small>\
                        </h2>\
                        <p>' + texto + '</p>\
                        <a href="' + url + '" class="btn btn-default btn-lg" target="_blank">Read full article</a>\
                        <hr>\
                    </div>');

}


var arrayNoticias;
var i;

$(document).ready(function () {
    
    $.getJSON("http://api.nytimes.com/svc/search/v2/articlesearch.json?q=Spitfire+Supermarine&begin_date=19300101&end_date=19600101&api-key=b1e8bdbc3fa9841be66f9cb3bab690b7%3A4%3A70045411", function (result) {
        arrayNoticias = result.response.docs;
        $("#idNoticias").html('<div class="col-lg-12 text-center">\
                    </div>');
        for (i in arrayNoticias) {
            
            cargarNoticia(arrayNoticias[i].headline.main, arrayNoticias[i].lead_paragraph, arrayNoticias[i].pub_date, arrayNoticias[i].web_url);

        }

    });
});