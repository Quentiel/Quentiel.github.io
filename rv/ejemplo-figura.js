
var figura = new THREE.Shape ();
                                  //las figuras en THREE se realizan sobre el plano xy
figura.moveTo(10,10);
figura.lineTo(10,40);
figura.lineTo(40,40);
figura.lineTo(10,10);

//para generar la malla hay que desarrollar la forma

var forma= new THREE.ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);

// En el constructor mesh no se indicó material alguno. En este caso se utiliza el material pro defento para mallas (aleatorio)

//Finalmente, se coloca la escena, la cámara y el renderizador

var escena= new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z=100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,
                    window.innerHeight*.95);
                    
                document.body.appendChild( renderizador.domElement);
                renderizador.render(escena, camara);
