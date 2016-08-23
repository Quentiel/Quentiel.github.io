var escena = new THREE.Scene();
escena.add(malla);

var camara= new THREE.PerspectiveCamera();
camara.position.z=5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
        document.body.appendChild( renderizador.domElement);
        renderizador.render(escena, camara);


var forma = new THREE.Geometry();

<!--Después de definir el objeto, se definen los vértices de la geometría. Los vértrices se van colocando-->
<!--en un orden determinado-->

forma.vertices.push( new THREE.Vector3(1, 0, 1));
forma.vertices.push( new THREE.Vector3(1, 0, -1));
forma.vertices.push( new THREE.Vector3(-1, 0, -1));
forma.vertices.push( new THREE.Vector3(-1, 0, 1));
forma.vertices.push( new THREE.Vector3(0, 1, 0));

forma.faces.push( new THREE.Face3 (3, 2, 1) ); <!--Cara1-->
forma.faces.push( new THREE.Face3 (3, 1, 0) ); <!--Cara2-->
forma.faces.push( new THREE.Face3 (3, 0, 4) ); <!--Cara3-->
forma.faces.push( new THREE.Face3 (0, 1, 4) ); <!--Cara4-->
forma.faces.push( new THREE.Face3 (1, 2, 4) ); <!--Cara5-->
forma.faces.push( new THREE.Face3 (2, 3, 4) ); <!--Cara6-->

<!--Finalmente se solicita el computo de la esfera de menor tamaño que acota al objeto-->

forma.computeBoundingSphere();
forma.computeFaceNormals(); <!-- Por el tipo de material a usar, se computan las normales de las caras-->

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh (forma, material);
malla.rotateX(Math.PI/4);


        
