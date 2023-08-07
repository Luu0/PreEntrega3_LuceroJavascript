const carrito = [];
let resultado = 0

function renderizarprod(Productos){
  for (const producto of Productos){
    document.getElementById("contenidotienda").innerHTML +=`
    <div class="col-4">
      <div class="card mt-4" style="width: 26rem;">
        <img src="${producto.foto}" class="card-img-top" height="420">
        <div class="card-body">
          <h3 class="card-title">${producto.nombre}</h3>
          <p class="card-text">${"$" + producto.precio}</p>
          <button id=${producto.id} class="compra btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
    `
    let botones = document.getElementsByClassName("compra");


    for (const boton of botones){

      // PARA AGREGAR PRODUCTOS AL CARRO     
      boton.onclick = () =>{
        const prodACarro = Productos.find((producto) => producto.id == boton.id);
        agregarACarrito(prodACarro);
      }
    }
  } 
}


let tablaCarrito = document.getElementById("tablacarrito");


function agregarACarrito(producto){
  carrito.push(producto);
  tablacarrito.innerHTML +=`
    <tr>
      <td>${producto.id}</td>
      <td>${producto.nombre}</td>
      <td>${producto.precio}</td>
    </tr>
  `;
}


renderizarprod(Productos);

