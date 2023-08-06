function renderizarprod(Productos){
  for (const producto of Productos){
    contenidotienda.innerHTML +=`
    <div class="col-4">
      <div class="card mt-4" style="width: 18rem;">
        <img src="${producto.foto}" class="card-img-top" height="420">
        <div class="card-body">
          <h3 class="card-title">${producto.nombre}</h3>
          <p class="card-text">${"$" + producto.precio}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>
    `
  }  
}

function filtrarPorPrecio(maxPrice) {
  const filteredProd = Productos.filter((producto) => producto.precio <= maxPrice);
  return filteredProd;
}
renderizarprod(filtrarPorPrecio(1000000));




