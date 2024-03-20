import type { Meta, StoryObj } from '@storybook/react'
import { Cart } from "../lib/Cart"

const meta = {
  title: 'Cart/MainCart',
  component: Cart
} satisfies Meta<typeof Cart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
}