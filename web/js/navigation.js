/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function nav(){
    var res="";
    res += "<nav class=\"navbar navbar-default\" role=\"navigation\" >";
    
    res += "<div class = \"container\" >";
    res += "   < !-- Collect the nav links, forms, and other content for toggling -- >";
    res += "< div class = \"collapse navbar-collapse navbar-ex1-collapse\" >";
    res += "    < ul class = \"nav navbar-nav\" >";
    res += "    < li > < a href = \"index.html\" > Inicio < /a>";
    res += "    < /li>";
    res += "    < li > < a href = \"nosotros.html\" > Nosotros < /a>";
    res += "    < /li>";
    res += "    < li > < a href = \"noticias.html\" > Noticias < /a>";
    res += "    < /li>";
    res += "    < li >";
    res += "    < a href = \"aviones.html\" > Aviones < /a>";
    res += "    < /li>";
    res += "    < li >";
    res += "    < a href = \"museos.html\" > Museos < /a>";
    res += "    < /li>";
    res += "    < li > < a href = \"contact.html\" > Contacto < /a>";
    res += "    < /li>";
    res += "    < /ul>";
    res += "    < /div>";
    res += "    < !-- /.navbar-collapse -->";
    res += "    < /div>";
    res += "    < !-- /.container -->";
    res += "        </nav>";
    
    document.getElementById("idNav").innerHTML = res;
}
