//Primero se establecen los puntos que definirán la forma de la malla, y definimos una arreglo vacío

var puntos = [];

//Se insertan 50 puntos en el arreglo con diversos valores:

for (var i = 0; i < 50; i++ )
                             {

          puntos.push( new THREE.Vector2(
                           Math.sin (i * 0.2 ) * 15 + 50;
                          ( i - 5 ) * 2 ) );
                          
                             }

var forma = new THREE.LatheGeometry(puntos); //geometria de torno por revoluciones

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
    malla.rotateX( Math.PI/6); //las caras internas de una malla son transparentes

var escena = new THREE.Scene();
    escena.add(malla);

var camara = new THREE.PerspectiveCamera();
    camara.position.z= 500;
    
renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
      
      document.body.appendChild( renderizador.domElement);
renderizador.render(escena, camara);
    
    
