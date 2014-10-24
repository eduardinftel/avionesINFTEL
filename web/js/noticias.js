/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function nuevoContenido()
{
    var res="";
    res += "<div class=\"col-lg-12\" >";
    res += "<hr>";
    res += "<h2 class=\"intro-text text-center\">Our <strong>news</strong>";
    res += "</h2>";
    res += "<hr>";
    res += "</div>";
    res += "<div class=\"col-lg-12 text-center\">";
    res += "<h2>__TITULO__";
    res += "<br>";
    res += "<small>___FECHA___</small>";
    res += "</h2>";
    res += "<p>___TEXTO___ ";
    res += "</p>";
    res += "<a href=\"__ENLACE___\" class=\"btn btn-default btn-lg\">Read More</a>";
    res += "<hr>";
    res += "</div>";
    document.getElementById("idNoticias").innerHTML = (res);

}
        