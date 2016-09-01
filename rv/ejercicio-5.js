var troncoForma = new THREE.TorusGeometry(0.9, 0.3, 4, 100);
var esferaForma = new THREE.SphereGeometry(0.95);
var cajaForma = new THREE.BoxGeometry (1, 7, 1)

esferaForma.translate(0,1,0);
troncoForma.rotateX(Math.PI/2);
cajaForma.translate (0,-4,0);

var troncoMalla = new THREE.Mesh(troncoForma);
var esferaMalla = new THREE.Mesh(esferaForma);
var cajaMalla = new THREE.Mesh(cajaForma) 

var arbolForma = new THREE.Geometry();

arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);
arbolForma.merge(cajaMalla.geometry, cajaMalla.matrix)

var material = new THREE.MeshNormalMaterial();
//var material = new THREE.MeshPhongMaterial( {color: 0x181616} );
var arbolMalla = new THREE.Mesh(arbolForma, material);

var escena = new THREE.Scene();
escena.add(arbolMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z=5;
//camara.position.y=10;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.200, window.innerHeight*.200);
document.body.appendChild (renderizador.domElement);
renderizador.render ( escena, camara);
