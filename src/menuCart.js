import { catalog } from './utilities'

const idsProductCartWithAmount = {}

function openCart() {
  document.getElementById('cart').classList.add('right-[0px]')
  document.getElementById('cart').classList.remove('right-[-360px]')
}

function closeCart() {
  document.getElementById('cart').classList.remove('right-[0px]')
  document.getElementById('cart').classList.add('right-[-360px]')
}

export function initializeCart() {
  const buttonCloseCart = document.getElementById('close-cart')
  const buttonOpenCart = document.getElementById('open-cart')

  buttonCloseCart.addEventListener('click', closeCart)
  buttonOpenCart.addEventListener('click', openCart)
}


function removeFromCart(idProduct) {
  delete idsProductCartWithAmount[idProduct]
  renderProductsCart()
}

function increaseAmountProduct(idProduct) {
  idsProductCartWithAmount[idProduct]++
  updateInfoAmount(idProduct)
}

function decreaseAmountProduct(idProduct) {
  if( idsProductCartWithAmount[idProduct] === 1) {
    removeFromCart(idProduct)
    return
  }
  idsProductCartWithAmount[idProduct]--
  updateInfoAmount(idProduct)
}

function updateInfoAmount(idProduct) {
  document.getElementById(`amount-${idProduct}`).innerText =
    idsProductCartWithAmount[idProduct]
}


function drawProductsCart(idProduct) {
  const product = catalog.find(p => p.id === idProduct)
  const containerProductsCart = document.getElementById('cart-products')

  const articleElement = document.createElement('article')
  const articleClasses = [
    'flex',
    'bg-slate-100',
    'rounded-lg',
    'p-1',
    'relative'
  ]

  for( const articleClass of articleClasses) {
    articleElement.classList.add(articleClass)
  }

  const cardProductCart = ` <button id="remove-item-${product.id}" class="absolute top-0 right-2" id="close-cart"><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i></button>
  <img src="./assets/img/${product.image}" alt=" carrinho: ${
    product.name
  }" class="h-24 rounded-lg">
  <div class="p-2 flex flex-col justify-between">
    <p class="text-slate-900 text-sm">${product.name}</p>
    <p class="text-slate-400 text-xs">Tamanho: M</p>
    <p class="text-green-700">$${product.price} </p>
  </div>
  <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
    <button id="decrease-product-${product.id}">-</button>
    <p id="amount-${product.id}" class="ml-2">${
    idsProductCartWithAmount[product.id]
  }</p>
    <button id="increase-product-${product.id}" class="ml-2">+</button>
  </div>`

  articleElement.innerHTML = cardProductCart
  containerProductsCart.appendChild(articleElement)

  document
    .getElementById(`decrease-product-${product.id}`)
    .addEventListener('click', () => decreaseAmountProduct(product.id))

  document
    .getElementById(`increase-product-${product.id}`)
    .addEventListener('click', () => increaseAmountProduct(product.id))

    document
    .getElementById(`remove-item-${product.id}`)
    .addEventListener('click', () => removeFromCart(product.id))
}

function renderProductsCart() {
  const containerProductsCart =
  document.getElementById("cart-products")
  containerProductsCart.innerHTML = ''

  for(const idProduct in idsProductCartWithAmount) {
    drawProductsCart(idProduct)
  }

}

export function addToCart(idProduct) {
  if (idProduct in idsProductCartWithAmount) {
    increaseAmountProduct(idProduct)
    return
  }
  idsProductCartWithAmount[idProduct] = 1
  drawProductsCart(idProduct)
}
 