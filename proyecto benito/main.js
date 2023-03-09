var suc = [];
var ubi = [];
var nom = [];
var ids = [];
var times = [];
var mar = [];
var si = [];
var ta = [];


function nombredelasucursa() {
    let nam = document.getElementById('nam');
    let u = document.getElementById('u');
    let s1 = new Sucursaal(nam.value, u.value);



    localStorage.setItem(suc, JSON.stringify(suc));

    sessionStorage.setItem(ubi, JSON.stringify(ubi));


    alert("se saguardo sucursal");
    document.getElementById('nam').value = ' '
    document.getElementById('u').value = ' '
}


function guardar() {
    let nam = document.getElementById('nam').value;
    let u = document.getElementById('u').value;
    let tal = document.getElementById('tal').value;
    let marc = document.getElementById('marc').value;

    let r1 = new Ropas(nam, u, tal, marc);
    mar.push(r1);
    localStorage.setItem(suc, JSON.stringify(suc));

    localStorage.setItem(ubi, JSON.stringify(ubi));
    localStorage.setItem(mar, JSON.stringify(mar));

    localStorage.setItem(ta, JSON.stringify(ta));
    var arrayg = localStorage.getItem('ubi');
    var arrayg = localStorage.getItem('suc');
    var arrayg = localStorage.getItem('mar');

    var arrayg = localStorage.getItem('ta');
    var ubi = JSON.parse(arrayg);
    console.log(ubi, ubi, mar, ta);
    alert("FICHAJE COMPLETADO");
    document.getElementById('tal').value = ' '
    document.getElementById('marc').value = ' '
    document.getElementById('nam').value = ' '
    document.getElementById('u').value = ' '



}
