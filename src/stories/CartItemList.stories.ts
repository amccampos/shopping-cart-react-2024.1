import { Meta, StoryObj } from "@storybook/react"
import { CartItemList } from "../lib/CartItemList"

const meta = {
  title: 'Cart/List',
  component: CartItemList
} satisfies Meta<typeof CartItemList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Pizza da minha mãe',
        description: 'Saborosa pizza caseira feita por sua mãe.',
        price: 79.90,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quantity: 1
      },
      {
        title: 'Pizza da minha mama',
        description: 'Saborosa pizza caseira feita por sua mãe.',
        price: 59.90,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quantity: 3
      },
      {
        title: 'Pizza da mãe',
        description: 'Saborosa pizza caseira feita por sua mãe.',
        price: 79.90,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quantity: 2
      },
      {
        title: 'Pizza da mama',
        description: 'Saborosa pizza caseira feita por sua mãe.',
        price: 59.90,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quantity: 5
      },
    ]
  }
}