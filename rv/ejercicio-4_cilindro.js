var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                    	window.innerHeight*.95);
			
document.body.appendChild (renderizador.domElement);

var geometry = new THREE.CylinderGeometry( 1, 2, 4 );
var material = new THREE.MeshNormalMaterial();
var cilindro = new THREE.Mesh(geometry, material);


cilindro.rotateX(-Math.PI/1); 
cilindro.rotateY(Math.PI/3);
escena.add(cilindro);

renderizador.render(escena,camara);
