var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                    	window.innerHeight*.95);
			
document.body.appendChild (renderizador.domElement);

var geometry = new THREE.ConeGeometry( 1, 2, 4 );
var material = new THREE.MeshNormalMaterial();
var cilindro = new THREE.Mesh(geometry, material);

cilindro.rotateX(-Math.PI/2); 
cilindro.rotateY(Math.PI/4);
escena.add(cilindro);

//var geometry = new THREE.SphereGeometry( 6, 8, 6 );
//var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
//var sphere = new THREE.Mesh( geometry, material );
//scene.add( sphere );

renderizador.render(escena,camara);
