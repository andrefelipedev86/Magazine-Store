import { addToCart } from "./menuCart"
import { catalog } from "./utilities"

export function renderCatalog() {
  for (const productCatalog of catalog) {
    const productCard = `<div class="border-solid  w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg  group" id="product-card-${productCatalog.id}">
    <img 
    src="./assets/img/${productCatalog.image}" alt="produto 1" class="group-hover:scale-110 duration-300 my-3 rounded-lg">
    <p class="text-sm ">${productCatalog.brand}</p>
    <p class="text-sm ">${productCatalog.name}</p>
    <p class="text-sm ">$${productCatalog.price}</p>
    <button id='add-${productCatalog.id}' class="bg-slate-950 hover:bg-slate-700 text-slate-200"><i class="fa-solid fa-cart-plus"></i></button>
    </div>`
 
    document.getElementById('product-container').innerHTML += productCard
    document.getElementById(`add-${productCatalog.id}`)
  }
  for(const productCatalog of catalog) {
    document.getElementById(`add-${productCatalog.id}`).addEventListener('click', () => addToCart(productCatalog.id))
  }
}
