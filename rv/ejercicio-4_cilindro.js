var escena = new THREE.Scene();
var escena2 = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 15;
camara.position.y = 4;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                    	window.innerHeight*.95);
			
document.body.appendChild (renderizador.domElement);

var geometry = new THREE.CylinderGeometry( 1, 1, 12, 30 );
var material = new THREE.MeshBasicMaterial({color: 0x8B4513});
var cilindro = new THREE.Mesh(geometry, material);
cilindro.rotateX(-Math.PI/4); 
cilindro.rotateY(Math.PI/5);
escena.add(cilindro);

var geometry1 = new THREE.SphereGeometry( 1, 1, 32 );
var material1 = new THREE.MeshBasicMaterial( {color: 0x008000} );
var sphere = new THREE.Mesh( geometry1, material1 );
sphere.rotateX(-Math.PI/4); 
sphere.rotateY(Math.PI/5);
escena2.add( sphere );

renderizador.render(escena,camara);
renderizador.render(escena2,camara);
