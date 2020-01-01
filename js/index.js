// var container = document.getElementById('container');

// var div = document.getElementById('div');

// var image = document.createElement('img');

// image.src = "../voiture.jpg";


// photo.appendChild(image);



//Jquery

var container = $('#container');

var image = $('<img>');

image.attr('src', "../voiture.jpg");

image.appendTo(container);

// image.style["box-shadow"] = "15px 10px 2px red";

image.css("box-shadow","15px 10px 2px red");
// image.className = 'imageStyle';
image.addClass('imageStyle')



//////////// INTRO 

// var container = document.getElementById('container')

// 1ere façon de modifier du html avec JS
// var monTitre = document.getElementById('titre');
// monTitre.textContent= "Nouveau titre";


// // 2ème façon de modifier du html avec JS

// var newImage = document.createElement('img');
// newImage.id= "image";
// container.appendChild(newImage)


//////////// EXO AJOUTER UNE IMAGE 

// version Vanilla

// var image= document.createElement("img");
// image.src="./minion.jpg";
// var container = document.getElementById("container")
// container.appendChild(image)

// version JQuery

// var image = $('<img>');
// var container = $('#container');
// image.attr('src',"./minion.jpg");
// image.appendTo(container);



//////////// EXO AJOUTER DU STYLE A L'IMAGE

// version vanilla 

// image.style['box-shadow'] ='10px 5px 5px green';
// image.className = 'imageStyle';
// image.className = '';

// version JQUERY

// image.css('box-shadow','10px 5px 5px green')
// image.addClass('imageStyle');
// image.removeClass('imageStyle');

// image.addEventListener('click',function(){
//     console.log('click');
    
// })

image.on('click',function(){
    console.log('click');
    
})

// var counter = document.getElementById('counter');
// var i=0;
// image.addEventListener('click',
// function(evt){
//     i = i+1
//     counter.textContent =i;
// })


var counter = document.getElementById('counter');
var i=0;
image.on('click',
function(evt){
    i = i+1
    counter.textContent =i;
    
})


