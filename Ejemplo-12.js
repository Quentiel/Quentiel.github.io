var forma = new THREE.SphereGeometry(1);
var material = new THREE.MeshBasicMaterial ({color:0x00f00});
var mall = new THREE.Mesh (forma, material);

var escema = new THREE.Scene ();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z=5;

var lienzo = document.getElementById("basicMaterial");
var renderizador = new THREE.WebGLRenderer({canvas: lienzo, 
                                          antialias: true});
renderizador.setSize (600, 600);
renderizador. render (escena, camara);

