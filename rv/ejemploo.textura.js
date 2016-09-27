var TEXTURA = new Object();

TEXTURA.retrollamada = function  (textura) {

var material = new THREE.MeshBasicMaterial({map: textura});
TEXTURA.malla = new THREE.Mesh (new THREE.SphereGeometry (1),
                                material );
                               
     TEXTURA.escena.add (TEXTURA.malla);
}

TEXTURA.setup = function () {
TEXTURA.escena = new THREE.Scene ();

var cargador = new THREE.TextureLoader();
cargador.load("earth.jpg",
              TEXTURA.retrommalada);
              
TEXTURA.camara = new THREE.PerespectiveCamera (75,
                                              window.innerWidth / window.innerHeight,
                                              0.1,
                                              1000);
                                              
  VENTANA.camara.position.z = 5;
   
   var lienzo = document.getElementById ("ejemplo-textura");
   TEXTURA.renderizador = new THREE.WebGLRenderer ({canvas: lienzo,
                                                    antialias: true});
  TEXTURA.renderizador.setSize(600,600);
  
  
