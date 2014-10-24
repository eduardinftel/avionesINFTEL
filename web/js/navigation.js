/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function nav(){
    var res="";
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
    console.log(document.getElementById("idNav").innerHTML);
    document.getElementById("idNav").innerHTML = res;
}
