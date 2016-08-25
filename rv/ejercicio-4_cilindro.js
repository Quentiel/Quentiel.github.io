var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 15;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                    	window.innerHeight*.95);
			
document.body.appendChild (renderizador.domElement);

var geometry = new THREE.CylinderGeometry( 1, 1, 2, 19 );
var material = new THREE.MeshNormalMaterial();
var cilindro = new THREE.Mesh(geometry, material);


cilindro.rotateX(-Math.PI/3); 
cilindro.rotateY(Math.PI/5);
escena.add(cilindro);

renderizador.render(escena,camara);
