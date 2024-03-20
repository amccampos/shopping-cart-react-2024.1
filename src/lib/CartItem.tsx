import { useState } from 'react'
import { Quantity } from './Quantity'

import styles from './CartItem.module.css'

export interface CartItemProps {
  title: string
  description: string
  price: number
  image: string
  quantity: number
  onQuantityChange?: (newQuantity: number) => void
  onRemove?: () => void
}

export const CartItem = (props: CartItemProps) => {
  const [total, setTotal] = useState(props.price)
  const [quant, setQuant] = useState(props.quantity)

  function updateQuantity(quantity: number) {
    console.log(quantity);
    
    setQuant(quantity)
    setTotal(quantity * props.price)
    props.onQuantityChange?.(quantity)
  }

  return (
    <section className={styles.cartItem}>
      <img src={props.image} alt={props.title} />
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{props.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
      </div>
      <Quantity
        num={quant}
        onInc={updateQuantity}
        onDec={updateQuantity}
      />
      {total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
      <button onClick={props.onRemove}>x</button>
    </section>
  )
}