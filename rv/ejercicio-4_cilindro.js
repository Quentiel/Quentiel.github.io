var escena = new THREE.Scene();
//var escena2 = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 15;
camara.position.y = 4;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                    	window.innerHeight*.95);
			
document.body.appendChild (renderizador.domElement);

var geometry = new THREE.CylinderGeometry( 1, 1, 20, 30 );
var material = new THREE.MeshBasicMaterial({color: 0x8B4513});
var cilindro = new THREE.Mesh(geometry, material);
cilindro.rotateX(-Math.PI/4); 
cilindro.rotateY(Math.PI/5);
escena.add(cilindro);

var geometry1 = new THREE.SphereGeometry( 3, 32, 32 );
var material1 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var sphere = new THREE.Mesh( geometry1, material1 );
geometry1.translate( 0, 6, 0 );
escena.add( sphere );
//0xffff00 006600
renderizador.render(escena,camara);
//renderizador.render(escena2,camara);
