import { createContext } from "react"
import { CartItemProps } from "./CartItem"

interface CartContext {
  items: CartItemProps[]
  setItems: (items: CartItemProps[]) => void
}

export const cartContext = createContext<CartContext>({
  items: [],
  setItems: (_: CartItemProps[]) => {}
})