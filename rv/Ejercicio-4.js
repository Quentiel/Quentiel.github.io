var figura =new THREE.Shape();

figura.moveTo(10,5);
figura.lineTo(60,100);
figura.lineTo(100,10);
figura.lineTo(60,35);
figura.moveTo(5,60);
figura.lineTo(110,70);
figura.lineTo(20,10);
figura.lineTo(30,50);

var estrella= new THREE.ShapeGeometry(figura);
var malla=new THREE.Mesh(estrella);

var escena= new THREE.Scene();
escena.add(malla);

var camara= new THREE.PerspectiveCamera();
camara.position.z=400;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.75,window.innerHeight*.75);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
