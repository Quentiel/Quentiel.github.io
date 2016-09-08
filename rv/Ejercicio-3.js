var forma=new THREE.Geometry();

forma.vertices.push(  new THREE.Vector3(1,1,1) );
forma.vertices.push(  new THREE.Vector3(1,1,-1) );
forma.vertices.push(  new THREE.Vector3(-1,1,-1) );
forma.vertices.push(  new THREE.Vector3(-1,1,1) );
forma.vertices.push(  new THREE.Vector3(-1,-1,1) );
forma.vertices.push(  new THREE.Vector3(1,-1,1) );
forma.vertices.push(  new THREE.Vector3(1,-1,-1) );
forma.vertices.push(  new THREE.Vector3(-1,-1,-1) );

forma.faces.push(  new THREE.Face3(0,1,2) );
forma.faces.push(  new THREE.Face3(0,2,3) );
//Frente 
forma.faces.push(  new THREE.Face3(0,3,4) );
forma.faces.push(  new THREE.Face3(0,4,5) );
//Atras 
forma.faces.push(  new THREE.Face3(0,6,5) );
forma.faces.push(  new THREE.Face3(1,6,0) );
//atras 
forma.faces.push(  new THREE.Face3(1,2,7) );
forma.faces.push(  new THREE.Face3(1,7,6) );
//frente 
forma.faces.push(  new THREE.Face3(7,4,2) );
forma.faces.push(  new THREE.Face3(2,4,3) );
//abajo
forma.faces.push(  new THREE.Face3(7,4,5) );
forma.faces.push(  new THREE.Face3(7,5,6) );


forma.computeBoundingSphere();
forma.computeFaceNormals();

var material= new THREE.MeshNormalMaterial();

var malla=new THREE.Mesh(forma,material);
malla.rotateX(Math.PI/3);
malla.rotateY(Math.PI/2);

var escena = new THREE.Scene();
escena.add(malla);
var camara=new THREE.PerspectiveCamera();
camara.position.z=5;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.75, window.innerHeight*.75);
document.body.appendChild( renderizador.domElement);
renderizador.render(escena,camara);
