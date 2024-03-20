import { useState } from "react"
import { CartItemProps } from "./CartItem"
import { CartItemList } from "./CartItemList"
import { cartContext } from "./CartContext"


const defaultItems: CartItemProps[] = [
  {
    title: 'Pizza da mãe',
    description: 'Saborosa pizza caseira feita por sua mãe.',
    price: 79.90,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Pizza da mama',
    description: 'Saborosa pizza caseira feita por sua mãe.',
    price: 59.90,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Pizza da mãe',
    description: 'Saborosa pizza caseira feita por sua mãe.',
    price: 79.90,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Pizza da mama',
    description: 'Saborosa pizza caseira feita por sua mãe.',
    price: 59.90,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
]


export const Cart = () => {
  const [items, setItems] = useState(defaultItems)
  const quantTotal = items.reduce((prev, item) => prev + item.quantity, 0)
  const priceTotal = items.reduce((prev, item) => prev + item.quantity * item.price, 0)
  return (
    <cartContext.Provider value={{ items, setItems }}>
      <h1>Carrinho de compras</h1>
      <p>Há {quantTotal} itens no carrinho, totalizando {priceTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}.</p>
      <CartItemList items={items} />
    </cartContext.Provider>
  )
}