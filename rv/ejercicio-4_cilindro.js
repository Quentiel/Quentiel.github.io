var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                    	window.innerHeight*.95);
			
document.body.appendChild (renderizador.domElement);

var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var cilindro = new THREE.Mesh(geometry, material);


cilindro.rotateX(-Math.PI/1); 
cilindro.rotateY(Math.PI/1);
escena.add(cilindro);

renderizador.render(escena,camara);
