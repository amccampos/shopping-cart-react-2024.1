import { useContext, useState } from "react"
import { CartItem, CartItemProps } from "./CartItem"
import { cartContext } from "./CartContext"

import './CartItemList.module.css'

interface CartItemListProps {
  items: CartItemProps[]
  onListChange?: () => void
}

export function CartItemList(props: CartItemListProps) {
  const cart = useContext(cartContext)
  const {items, setItems} = cart
  // const [items, setItems] = useState(props.items)

  function removeItem(index: number) {
    const newItems = [
      ...items.slice(0, index),
      ...items.slice(index + 1)
    ]
    setItems(newItems)
    props.onListChange?.()
  }

  function updateQuantity(index: number, quantity: number) {
    const newItems = items.map((item, i) => (index === i) ? {...item, quantity } : item)
    setItems(newItems)
  }

  const list = items.map((el, index) => {
    return (
      <li key={index}>
        <CartItem key={el.title} {...el}
          onQuantityChange={(quant) => updateQuantity(index, quant)}
          onRemove={() => removeItem(index)}
        />
      </li>
    )
  })
  return list.length > 0 ? (
    <ul> {list} </ul>
  ) : (
    <h3>Nenhum item no carrinho</h3>
  )
}