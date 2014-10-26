/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function cargarPortada(){
    $("#portada").load('portada.html');
}
var fotos;
function cargarFotos(){
	
	//assign your api key equal to a variable
	var apiKey = 'b8064489154fb1c0e09ec34fd323acdd';
        
        var textbusqueda="aviones históricos";
	var tag = "aviones históricos,warplanes,historic planes";
	//the initial json request to flickr
	//to get your latest public photos, use this request: http://api.flickr.com/services/rest/?&amp;method=flickr.people.getPublicPhotos&amp;api_key=' + apiKey + '&amp;user_id=29096781@N02&amp;per_page=15&amp;page=2&amp;format=json&amp;jsoncallback=?
	$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' + apiKey + '&per_page=50&text='+textbusqueda+'&format=json&&nojsoncallback=1',function(data){
            
            fotos=data.photos.photo;
            console.log(fotos);
            var i;
            for (i in fotos){
//                $("#cahaFotos").append("prueba"+i);
            $("#cajaFotos").append('<div class="col-lg-12 text-rigth">\
                        <h2>' + fotos[i].title + '</h2>\
                        <img src="https://farm'+ fotos[i].farm +'.staticflickr.com/'+fotos[i].server+'/'+fotos[i].id+'_'+fotos[i].secret+'_c.jpg"></div>');
            }
            });
        
}


$(document).ready(function(){
    
    cargarPortada();
    $("#botonCargarFotos").click(cargarFotos);
    
});
