import { Meta, StoryObj } from '@storybook/react'
import { CartItem } from '../lib/CartItem'

const meta = {
  title: 'Cart/CartItem',
  component: CartItem
} satisfies Meta<typeof CartItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Pizza da mãe',
    description: 'Saborosa pizza caseira feita por sua mãe.',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
}