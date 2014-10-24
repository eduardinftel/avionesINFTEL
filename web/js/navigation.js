/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function nav(){
 
    var div = document.createElement('div');

    div.className = 'navig';

    div.innerHTML = '<nav class="navbar navbar-default" role="navigation">\
            <div class="container">\
\
\
                <!-- Collect the nav links, forms, and other content for toggling -->\
                <div class="collapse navbar-collapse navbar-ex1-collapse">\
                    <ul class="nav navbar-nav">\
                        <li><a href="index.html">Inicio</a>\
                        </li>\
                        <li><a href="nosotros.html">Nosotros</a>\
                        </li>\
                        <li><a href="noticias.html">Noticias</a>\
                        </li>\
                        <li>\
                            <a href="aviones.html">Aviones</a>\
                        </li>\
                        <li>\
                            <a href="museos.html">Museos</a>\
                        </li>\
                        <li><a href="contact.html">Contacto</a>\
                        </li>\
                    </ul>\
                </div>\
                <!-- /.navbar-collapse -->\
            </div>\
            <!-- /.container -->\
        </nav>';

    document.getElementById("idNav").appendChild(div);
    
}
