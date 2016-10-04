var foo = {nombre: "foo", uno: 1, dos: 2};
var bar = {dos: "dos", tres: 3};

bar.__proto__ = foo;

console.log ( bar.uno );
console.log ( bar.tres );
console.log ( bar.dos );
console.log ( bar.nombre );
console.log ( foo.nombre );

var pelota = {radio: 1};

pelota. proto = new THREE.Mesh (new THREE.SphereGeometry (pelota.radio),
                                new THREE.MeshNormalMaterial ()       );

console.log (pelota.material);



