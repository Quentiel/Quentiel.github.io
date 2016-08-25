var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 15;
camara.position.y = 4;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                    	window.innerHeight*.95);
			
document.body.appendChild (renderizador.domElement);

var geometry = new THREE.CylinderGeometry( 1, 1, 12, 30 );
var material = new THREE.MeshNormalMaterial();
var cilindro = new THREE.Mesh(geometry, material);


cilindro.rotateX(-Math.PI/4); 
cilindro.rotateY(Math.PI/5);
escena.add(cilindro);

renderizador.render(escena,camara);
