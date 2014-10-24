/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function footer(){
 
    var div = document.createElement('div');

    div.className = 'footer';

    div.innerHTML = '  <footer>\
            <div class="container">\
                <div class="row">\
                    <div class="col-lg-12 text-center">\
                        <p>¡Contenido del footer!</p>\
                    </div>\
                </div>\
            </div>\
        </footer>';

    document.getElementById("idFooter").appendChild(div);
    
}
