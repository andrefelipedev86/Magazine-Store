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